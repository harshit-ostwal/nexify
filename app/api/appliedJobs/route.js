import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function GET(res) {
    const session = await getServerSession(authOptions);

    const userId = session.data.id;

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    try {
        const appliedJobs = await prisma.jobApplications.findMany({
            where: {
                userId: userId,
            },
            include: {
                JobPost: true
            },
        });

        return NextResponse.json({ appliedJobs }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch applied jobs" }, { status: 500 });
    }

}