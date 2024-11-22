import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        return NextResponse.json({ message: "OTP sent successfully", otp }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}