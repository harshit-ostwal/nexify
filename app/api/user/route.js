import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET(req) {
    const session = await getServerSession(authOptions);

    const userId = session.data.id;

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }
    const normalCount = await prisma.normalPost.count({
        where: {
            userId: userId,
        },
    });

    // Count Project Posts
    const projectCount = await prisma.projectPost.count({
        where: {
            userId: userId,
        },
    });

    // Count Job Posts
    const jobCount = await prisma.jobPost.count({
        where: {
            userId: userId,
        },
    });

    // Total Counts
    const totalPosts = normalCount + projectCount + jobCount;

    // Fetch User Info
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        }
    });

    return NextResponse.json({ user, data: totalPosts })
}