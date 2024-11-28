import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    console.log("Session:", session);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const { postId, postType } = await req.json();
    console.log("Received Data:", postId, postType); // Log postId and postType

    if (!postType || !['NormalPost', 'ProjectPost', 'JobPost'].includes(postType)) {
        console.log(postType);
        return NextResponse.json({ error: "Invalid post type" }, { status: 400 });
    }



    try {
        // Generalize the update operation based on post type
        const updatedPost = await prisma[postType].update({
            where: { id: postId },
            data: {
                likes: {
                    increment: 1, // Increment likes by 1
                },
            },
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        return NextResponse.json({ error: 'Error liking the post' }, { status: 500 });
    }
}