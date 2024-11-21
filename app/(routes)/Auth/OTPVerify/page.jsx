import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import React from 'react'

function page() {

    return (
        <div className="flex flex-col gap-10 items-center justify-center w-full h-screen">
            <div className="flex flex-col gap-10 items-center justify-center w-1/4">
                <div className="flex flex-col gap-2 items-start w-full">
                    <h1 className="text-6xl font-black">OTP Verification</h1>
                    <p>Please Enter The OTP Sent To Your Email To Verify Your Identity.</p>
                </div>

                <form className="flex flex-col w-full gap-6">
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <Button>Verify OTP</Button>
                </form>
                <div className="flex gap-4 items-center justify-center">
                    <div className="w-40 border-b border-neutral-400"></div>
                    <p className="text-neutral-400">OR</p>
                    <div className="w-40 border-b border-neutral-400"></div>
                </div>
                <Link href="/Auth/ForgotPassword">Didn’t Receive An Email From Us? <span className="text-[#F59E0B]">Resend Email</span></Link>
            </div>
        </div>
    )
}

export default page