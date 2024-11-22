"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@/hooks/useUserSession';
import { useParams } from 'next/navigation';

function page() {

    // const [profile, setProfile] = useState({
    //     fullname: userProfile?.fullname,
    //     rollno: userProfile?.rollno,
    //     mobileNo: userProfile?.mobileno,git 
    //     email: userProfile?.email,
    //     avatar: userProfile?.avatar,
    //     shortBio: userProfile?.shortBio,
    //     about: userProfile?.about
    // });

    // const [userProfile, setUserProfile] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     const fetchUserProfile = async () => {
    //         const response = await axios.get(`/api/profile/${id}`);

    //         settopSkills(response.data.user.topSkills);
    //         setSkills(response.data.user.skills);

    //         return setUserProfile(response.data.user)
    //     };

    //     fetchUserProfile();
    // }, [id]);

    // console.log(userProfile);
    // const { session } = useUser();

    return (
        <div className="flex items-center justify-center w-full py-20">
            <div className="flex flex-col w-full h-full max-w-sm gap-10 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">

                <div className="flex flex-col gap-2">
                    <h1 className="mb-4 text-2xl font-bold">Profile Information</h1>

                    <div className="flex items-center justify-between gap-4 py-4">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-24 h-24">
                                <AvatarImage src={session?.user?.avatar} alt={session?.user?.fullname} />
                                <AvatarFallback>{session?.user?.fullname ? session.user.fullname[0] + session.user.fullname[1] : 'HJ'}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="font-medium">{session?.user?.fullname}</h1>
                                <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="flex items-center space-x-8">
                        <div className="relative group">
                            <img
                                src={userProfile.avatar}
                                alt={userProfile.fullname}
                                className="object-cover w-32 h-32 border-4 border-white rounded-full shadow-lg"
                            />
                        </div>

                        <div className="flex-1">
                            <h2 className="mb-1 text-2xl font-bold text-gray-900">{userProfile.fullname}</h2>
                            <p className="text-gray-600">{userProfile.shortBio}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={userProfile.fullname}
                                onChange={(e) => setProfile({ ...profile, fullname: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Roll Number
                            </label>
                            <input
                                type="text"
                                value={profile.rollno}
                                onChange={(e) => setProfile({ ...profile, rollno: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                value={profile.mobileNo}
                                onChange={(e) => setProfile({ ...profile, mobileNo: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Short Bio
                            </label>
                            <input
                                type="text"
                                value={profile.shortBio}
                                onChange={(e) => setProfile({ ...profile, shortBio: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                About
                            </label>
                            <textarea
                                value={profile.about}
                                onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>

            </div >
        </div >
    )
}

export default page