import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req) {
    const session = await getServerSession(authOptions);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const { postId, postType, message } = await req.json();

    if (!postType || !['NormalPost', 'ProjectPost', 'JobPost'].includes(postType)) {
        return NextResponse.json({ error: "Invalid post type" }, { status: 400 });
    }

    if (!message || message.trim().length === 0) {
        return NextResponse.json({ error: "Comment message is required" }, { status: 400 });
    }

    let newComment;

    if (postType === 'NormalPost') {
        newComment = await prisma.nComment.create({
            data: {
                message: message,
                normalPostId: postId, // Adjusted for NormalPost
            },
        });
    } else if (postType === 'ProjectPost') {
        newComment = await prisma.pComment.create({
            data: {
                message: message,
                projectPostId: postId, // Adjusted for ProjectPost
            },
        });
    } else if (postType === 'JobPost') {
        newComment = await prisma.jComment.create({
            data: {
                message: message,
                jobPostId: postId, // Adjusted for JobPost
            },
        });
    }

    return NextResponse.json(newComment);
}