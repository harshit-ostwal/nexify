import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, otp } = await req.json();

        console.log(email, otp);

        // Validate input
        if (!email || !otp) {
            return NextResponse.json(
                { message: "Email and OTP are required" },
                { status: 400 }
            );
        }

        // Find the OTP record associated with the email
        const record = await prisma.oTP.findUnique({
            where: { email },
        });

        if (!record) {
            return NextResponse.json(
                { message: "No OTP found for this email" },
                { status: 404 }
            );
        }

        // Validate OTP value
        if (record.otp !== otp) {
            return NextResponse.json(
                { message: "Invalid OTP" },
                { status: 401 }
            );
        }

        // Check if the OTP has expired
        if (new Date() > new Date(record.expiresAt)) {
            return NextResponse.json(
                { message: "OTP has expired" },
                { status: 410 }
            );
        }

        // OTP and email verified successfully; delete the OTP record
        await prisma.oTP.delete({ where: { email } });

        return NextResponse.json(
            { message: "Email and OTP verified successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error verifying OTP and email:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}