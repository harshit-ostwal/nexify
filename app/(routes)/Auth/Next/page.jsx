"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import axios from 'axios';

function SignIn() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {

            if (password == confirmPassword) {
                const res = await axios.put("/api/Pass", {
                    password,
                });

                if (res && res.ok) {
                    toast.success("Password Updated Successful!");
                    router.push('/Auth/SignIn');
                } else if (res && res.error) {
                    const errorMessage = JSON.parse(res.error)?.message || "Invalid Password.";
                    toast.error(errorMessage);
                } else {
                    toast.error("Password Updation Failed. Please try again.");
                }
            }
            else {
                toast.error("Passwords do not match.");
            }
        } catch (err) {
            toast.error("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
            <div className="flex flex-col items-center justify-center w-1/4 gap-10">
                <div className="flex flex-col items-start w-full gap-2">
                    <h1 className="text-6xl font-black">Nexify</h1>
                    <p>Please Update Your Password.</p>
                </div>
                <form onSubmit={handleSignIn} className="flex flex-col w-full gap-6">
                    <div className="flex flex-col gap-3">
                        <Label>Password <span className="text-red-500">*</span></Label>
                        <Input
                            type="password"
                            required={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label>Confirm Password <span className="text-red-500">*</span></Label>
                        <Input
                            type="password"
                            required={true}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit">Update Password</Button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;