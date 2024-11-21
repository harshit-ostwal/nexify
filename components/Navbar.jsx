"use client"
import { Bell, Briefcase, Home, MessageSquare, Users2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'
import { useUser } from '@/hooks/useUserSession'

function Navbar() {

    const { session, handleSignOut } = useUser();

    const random = 12;

    return (
        <div className="sticky top-0 left-0 z-50 flex items-center justify-center w-full p-5 bg-white border-b shadow-sm">
            <div className="flex items-center justify-around flex-1">
                <div className="flex items-center gap-8">
                    <Link href={"/"} className="text-3xl font-black">Nexify</Link>
                </div>

                <button onClick={() => handleSignOut()}>
                    logout
                </button>

                <div className="flex items-center gap-6">
                    <div className="items-center justify-center hidden gap-8 md:flex">
                        {[
                            { icon: Home, label: 'Home', href: "/" },
                            { icon: Users2, label: 'My Network', href: "/MyNetwork" },
                            { icon: Briefcase, label: 'Jobs', href: "/Jobs" },
                            { icon: MessageSquare, label: 'Messaging', href: "/Messaging" },
                            { icon: Bell, label: 'Notifications', href: "/Notifications" },
                        ].map((item, index) => (
                            <Link key={index} className="flex flex-col items-center justify-center gap-1 text-sm leading-none duration-300 text-neutral-500 hover:text-black" href={item.href}>
                                <item.icon />
                                <p>{item.label}</p>
                            </Link>
                        ))}
                    </div>

                    <Separator orientation="vertical" className="w-[1px] h-8" />

                    <Link href={`/Dashboard/Profile/${random}`} className="flex items-center justify-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex-col hidden gap-1 text-sm leading-none xl:flex">
                            <p>{session?.data?.fullname}</p>
                            <p>{session?.data?.email}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar