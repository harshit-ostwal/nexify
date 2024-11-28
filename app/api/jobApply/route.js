import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req, res) {
  const session = await getServerSession(authOptions);

  const userId = session.data.id;

  if (!session || !session.data || !session.data.id) {
    return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
  }

  const { postId } = await req.json();

  if (!postId) {
    return NextResponse.json(
      { error: "Job Post ID is required" },
      { status: 400 }
    );
  }

  try {
    await prisma.jobApplications.create({
      data: {
        userId: userId,
        jobPostId: postId,
        status: "Applied",
      },
    });

    return NextResponse.json(
      { message: "Job application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to apply for job" },
      { status: 500 }
    );
  }
}