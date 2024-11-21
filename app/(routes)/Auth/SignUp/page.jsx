"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function SignUp() {
  const router = useRouter(); // Move useRouter() here
  const [formData, setFormData] = useState({
    fullname: '',
    rollno: '',
    mobileNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { fullname, rollno, mobileNo, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/auth/SignUp', {
        fullname,
        rollno,
        mobileNo,
        email,
        password,
      });

      if (response) {
        router.push('/Auth/SignIn');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <div className="flex flex-col items-center justify-center w-1/4 gap-10">
        <div className="flex flex-col items-start w-full gap-2">
          <h1 className="text-6xl font-black">Nexify</h1>
          <p>Welcome! Please Sign Up to Continue.</p>
        </div>
        <form onSubmit={handleSignUp} className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-3">
            <Label>Full Name <span className="text-red-500">*</span></Label>
            <Input
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Roll No <span className="text-red-500">*</span></Label>
            <Input
              name="rollno"
              value={formData.rollno}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Mobile No <span className="text-red-500">*</span></Label>
            <Input
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Email <span className="text-red-500">*</span></Label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Password <span className="text-red-500">*</span></Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Confirm Password <span className="text-red-500">*</span></Label>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="flex items-center justify-center gap-4">
          <div className="w-40 border-b border-neutral-400"></div>
          <p className="text-neutral-400">OR</p>
          <div className="w-40 border-b border-neutral-400"></div>
        </div>
        <Link href="/Auth/SignIn">Already have an account? <span className="text-[#F59E0B]">Sign In</span></Link>
      </div>
    </div>
  );
}

export default SignUp;