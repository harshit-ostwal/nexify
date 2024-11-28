import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req, res) {
    const session = await getServerSession(authOptions);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const { company, title, content, joiningDate, salary, location, role } = await req.json();

    try {
        const post = await prisma.jobPost.create({
            data: {
                userId: session.data.id, 
                company: company,
                title: title,
                content: content,
                joiningDate: joiningDate,
                salary: salary,
                location: location,
                role: role,
            },
        });

        return NextResponse.json({ post });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create job post" }, { status: 500 });
    }
}