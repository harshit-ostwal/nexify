import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function POST(req, res) {
  const session = await getServerSession(authOptions);

  const userId = session.data.id;

  if (!session || !session.data || !session.data.id) {
    return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
  }

  const { postId } = await req.json();

  if (!postId) {
    return NextResponse.json({ error: "Job Post ID is required" }, { status: 400 });
  }

  try {
    // Check if the job application already exists
    const exists = await prisma.jobApplications.findFirst({
      where: { userId, jobPostId: postId },
    });

    if (exists) {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 400 }
      );
    }

    // Create a new job application
    await prisma.jobApplications.create({
      data: {
        userId,
        jobPostId: postId,
        status: "Applied",
      },
    });

    return NextResponse.json(
      { message: "Job application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling job application:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}