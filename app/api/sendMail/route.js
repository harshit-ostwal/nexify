import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User with this email does not exist." },
        { status: 404 }
      );
    }

    const otp = crypto.randomInt(100000, 999999);

    console.log(otp);


    const expirationTime = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.oTP.create({
      data: {
        email,
        otp: otp.toString(),
        expiresAt: expirationTime,
      },
    });

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL_ID,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    const emailBody = `
      <h1>Password Reset OTP</h1>
      <p>Hello ${user.fullname || "User"},</p>
      <p>Your OTP for password reset is: <b>${otp}</b></p>
      <p>This OTP will expire in 10 minutes. If you did not request this, please ignore this email.</p>
      <p>Thank you,</p>
      <p>Your Application Team</p>
    `;

    await transport.sendMail({
      from: `"Your App Support" <${process.env.ADMIN_EMAIL_ID}>`,
      to: email,
      subject: "Password Reset OTP",
      html: emailBody,
    });

    return NextResponse.json(
      { message: "OTP sent successfully to your email." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}