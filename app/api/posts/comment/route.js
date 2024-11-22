import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req) {
    const session = await getServerSession(authOptions);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const { postId, postType, message } = await req.json(); // Expect postType and comment message

    if (!postType || !['NormalPost', 'ProjectPost', 'JobPost'].includes(postType)) {
        return NextResponse.json({ error: "Invalid post type" }, { status: 400 });
    }

    if (!message || message.trim().length === 0) {
        return NextResponse.json({ error: "Comment message is required" }, { status: 400 });
    }

    try {
        // Create a comment dynamically based on the postType
        const newComment = await prisma[`${postType}Comment`].create({
            data: {
                message: message,
                [`${postType.toLowerCase()}Id`]: postId, // Dynamically refer to the correct post model
            },
        });

        // Update the comment count for the respective post type
        await prisma[postType].update({
            where: { id: postId },
            data: {
                comments: {
                    increment: 1, // Increment the comment count
                },
            },
        });

        return NextResponse.json(newComment);
    } catch (error) {
        return NextResponse.json({ error: 'Error posting the comment' }, { status: 500 });
    }
}