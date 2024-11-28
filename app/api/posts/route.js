import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const posts = await prisma.user.findMany({
    select: {
      fullname: true,
      shortBio: true,
      avatar: true, // Assuming avatar is part of the User model
      normalPost: {
        select: {
          id: true,
          title: true,
          imageUrl: true,
          content: true,
          likes: true,
          createdAt: true,
          comments: {
            select: { id: true, message: true, createdAt: true },
          },
        }
      },
      projPost: {
        select: {
          id: true,
          title: true,
          content: true,
          submissionDate: true,
          imageUrl: true,
          techStack: true,
          likes: true,
          createdAt: true,
          comments: {
            select: { id: true, message: true, createdAt: true },
          },
        }
      },
      jobPost: {
        select: {
          id: true,
          company: true,
          joiningDate: true,
          imageUrl: true,
          role: true,
          salary: true,
          location: true,
          title: true,
          content: true,
          likes: true,
          createdAt: true,
          comments: {
            select: { id: true, message: true, createdAt: true },
          },
        }
      }
    }
  });

  const formattedPosts = posts.map((user) => {
    const allPosts = [
      ...user.normalPost.map((post) => ({
        ...post,
        type: 1, // Normal post type
        author: {
          avatar: user.avatar,
          name: user.fullname,
          title: user.shortBio,
        },
        comments: post.comments,
        image: "", // Add image field if needed
      })),
      ...user.projPost.map((post) => ({
        ...post,
        type: 2, // Project post type
        author: {
          avatar: user.avatar,
          name: user.fullname,
          title: user.shortBio,
        },
        comments: post.comments,
        image: "https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Sample image for project post
      })),
      ...user.jobPost.map((post) => ({
        ...post,
        type: 3, // Job post type
        author: {
          avatar: user.avatar,
          name: user.fullname,
          title: user.shortBio,
        },
        comments: post.comments,
        image: "", // Add image field if needed
      }))
    ];

    return allPosts;
  }).flat();

  // Sort the merged posts by createdAt in descending order (latest posts first)
  const sortedPosts = formattedPosts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    if (dateA && dateB) {
      return dateB - dateA; // Sort in descending order
    }
    return 0; // If no valid date, leave as is
  });

  return NextResponse.json({ formattedPosts: sortedPosts });
}