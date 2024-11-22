"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/auth/sendResetPasswordEmail", {
        email,
      });

      if (response.status === 200) {
        toast.success("OTP sent to your email!");
        router.push("/Auth/OTPVerify");
      } else {
        toast.error(response.data.error || "Failed to send OTP.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <div className="flex flex-col items-center justify-center w-1/4 gap-10">
        <div className="flex flex-col items-start w-full gap-2">
          <h1 className="text-6xl font-black">Forgot Password</h1>
          <p>Please enter your email to receive an OTP for password reset.</p>
        </div>

        <form className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-3">
            <Label>
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <Button onClick={handleClick} disabled={loading}>
            {loading ? "Sending OTP..." : "Reset Password"}
          </Button>
        </form>
        <div className="flex items-center justify-center gap-4">
          <div className="w-40 border-b border-neutral-400"></div>
          <p className="text-neutral-400">OR</p>
          <div className="w-40 border-b border-neutral-400"></div>
        </div>
        <Link href="/Auth/SignIn">
          Remembered Your Password? <span className="text-[#F59E0B]">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default Page;