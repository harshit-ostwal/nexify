import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req, res) {

    const { email } = req.json();

    await prisma.user.update({
        where: {
            email
        },
        data: {
            password
        }
    })

    return NextResponse.json("Password Updated");
}