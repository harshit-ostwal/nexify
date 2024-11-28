import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {

    const user = await prisma.user.findMany();

    return NextResponse.json({ user })
}