"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function SignIn() {
  const [rollno, setRollNo] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      rollno,
      password,
    });

    if (res) {
      router.push('/Dashboard');
    }

  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <div className="flex flex-col items-center justify-center w-1/4 gap-10">
        <div className="flex flex-col items-start w-full gap-2">
          <h1 className="text-6xl font-black">Nexify</h1>
          <p>Welcome Back! Please Sign In to Continue.</p>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-3">
            <Label>Roll No <span className="text-red-500">*</span></Label>
            <Input
              value={rollno}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Password <span className="text-red-500">*</span></Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link href="/Auth/ForgotPassword" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit">Sign In</Button>
        </form>
        <div className="flex items-center justify-center gap-4">
          <div className="w-40 border-b border-neutral-400"></div>
          <p className="text-neutral-400">OR</p>
          <div className="w-40 border-b border-neutral-400"></div>
        </div>
        <Link href="/Auth/SignUp">
          Don't Have An Account? <span className="text-[#F59E0B]">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;