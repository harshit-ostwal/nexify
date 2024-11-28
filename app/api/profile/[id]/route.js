import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { id } = await params;

        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                skills: true,
                projects: {
                    include: {
                        techstack: true,
                    },
                },
                experiences: {
                    include: {
                        techstack: true,
                    },
                },
                followers: true,
                following: true,
                normalPost: true,
                jobPost: true,
                projPost: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}