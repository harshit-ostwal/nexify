import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    const { fullname, rollno, mobileNo, email, password } = await req.json();

    // Check if the user already exists
    const existsUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existsUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 } // Conflict
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await prisma.user.create({
      data: {
        fullname,
        password: hashedPassword,
        rollno,
        mobileNo,
        email,
      },
    });

    console.log(user);

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 } // Created
    );
  } catch (error) {
    console.error("Error during user creation:", error);

    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 } // Internal Server Error
    );
  }
}