import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req, res) {
    const session = await getServerSession(authOptions);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const { fullname, mobileno, email, shortBio, about, topSkill1, topSkill2, topSkill3 } = await req.json();

    const user = await prisma.user.update({
        where: {
            id: session.data.id
        }
        , data: {
            fullname
            , mobileno
            , email
            , shortBio
            , about,
            topSkills: [topSkill1, topSkill2, topSkill3]
        }
    })

    return NextResponse.json({ user });

}

export async function GET(req) {
    const session = await getServerSession(authOptions);

    if (!session || !session.data || !session.data.id) {
        return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.data.id
        },
        include: {
            skills: true,
            experiences: true,
            projects: true,
        }
    })

    return NextResponse.json({ user });
}