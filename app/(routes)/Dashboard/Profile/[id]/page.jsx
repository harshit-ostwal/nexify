"use client"
import ExperienceSection from '@/components/ExperienceSection'
import ProfileSection from '@/components/ProfileSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {

    const [posts, setPosts] = useState([]);

    const fetchUserProfile = async () => {
        const response = await axios.get(`/api/updateProfile`);
        setPosts(response.data.user);

    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <div className="min-h-screen">
            <div className="px-4 py-8 mx-auto max-w-7xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Profile Settings</h1>

                <div className="space-y-8">
                    <ProfileSection posts={posts} />
                    <ProjectsSection posts={posts} />
                    <ExperienceSection posts={posts} />
                    <SkillsSection posts={posts} />
                </div>
            </div>
        </div>
    )
}

export default page