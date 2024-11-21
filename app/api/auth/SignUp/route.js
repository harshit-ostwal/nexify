import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(req, res) {
  const { fullname, rollno, mobileNo, email, password } = await req.json();

  const existsUser = await prisma.user.findUnique({
    where: {
      email,
      rollno
    }
  })

  if (existsUser)
    return NextResponse.json({ message: "user already exists" })

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      fullname,
      password: hashedPassword,
      rollno,
      mobileNo,
      email,
    }
  });

  console.log(user);


  return NextResponse.json(user)
}