import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req, res) {
    const session = await getServerSession(authOptions);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const { title, content, imageUrl } = await req.json();

    // Create a new post with normalPost relation
    const post = await prisma.normalPost.create({
        data: {
            userId: session.data.id, // Associate the post with the existing user
            title: title,
            imageUrl: imageUrl,
            content: content,
        },
    });

    return NextResponse.json({ post });
}