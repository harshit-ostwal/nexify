"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {

    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/Auth/OTPVerify");
    };

    return (
        <div className="flex flex-col gap-10 items-center justify-center w-full h-screen">
            <div className="flex flex-col gap-10 items-center justify-center w-1/4">
                <div className="flex flex-col gap-2 items-start w-full">
                    <h1 className="text-6xl font-black">Forgot Password</h1>
                    <p>Please Enter Your Email To Receive An OTP For Password Reset.</p>
                </div>

                <form className="flex flex-col w-full gap-6">
                    <div className="flex flex-col gap-3">
                        <Label>Email <span className="text-red-500">*</span></Label>
                        <Input />
                    </div>
                    <Button onClick={handleClick}>Reset Password</Button>
                </form>
                <div className="flex gap-4 items-center justify-center">
                    <div className="w-40 border-b border-neutral-400"></div>
                    <p className="text-neutral-400">OR</p>
                    <div className="w-40 border-b border-neutral-400"></div>
                </div>
                <Link href="/Auth/SignIn">Remembered Your Password? <span className="text-[#F59E0B]">Sign In</span></Link>
            </div>
        </div>
    )
}

export default page