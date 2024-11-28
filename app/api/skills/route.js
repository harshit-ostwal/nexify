import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req, res) {
  const session = await getServerSession(authOptions);

  if (!session || !session.data || !session.data.id) {
    return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
  }

  const { subject, fullMark, A } = await req.json();

  const user = await prisma.skills.create({
    where: {
      id: session.data.id
    }
    , data: {
      subject
      , fullMark
      , A
    }
  })

  return NextResponse.json({ user });

}