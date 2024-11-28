import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/options";

export async function DELETE(req) {
    const session = await getServerSession(authOptions);

    const userId = session.data.id;

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    try {
        const { applicationId } = await req.json();

        if (!applicationId) {
            return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
        }

        const application = await prisma.jobApplications.findUnique({
            where: { id: applicationId },
            include: { JobPost: true },
        });

        if (!application) {
            return NextResponse.json({ error: "Application not found" }, { status: 404 });
        }

        if (application.userId !== userId) {
            return NextResponse.json({ error: "You do not have permission to remove this application" }, { status: 403 });
        }

        await prisma.jobApplications.delete({
            where: { id: applicationId },
        });

        return NextResponse.json({ message: "Application removed successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error removing application:", error);
        return NextResponse.json({ error: "Failed to remove application" }, { status: 500 });
    }
}