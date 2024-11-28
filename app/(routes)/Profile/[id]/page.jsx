"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Share2, UserPlus } from 'lucide-react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { useParams } from 'next/navigation'

const SkillsData = [
    {
        subject: 'Frontend Developer',
        fullMark: 100,
        A: 100,
    },
    {
        subject: 'Backend Developer',
        fullMark: 100,
        A: 10,
    },
    {
        subject: 'MERN',
        fullMark: 100,
        A: 30,
    },
    {
        subject: 'Communication',
        fullMark: 100,
        A: 20,
    },
    {
        subject: 'Debator',
        fullMark: 100,
        A: 70,
    },
    {
        subject: 'Dancing',
        fullMark: 100,
        A: 95,
    },
    {
        subject: 'Writing',
        fullMark: 100,
        A: 100,
    },
    {
        subject: 'Dancing',
        fullMark: 100,
        A: 95,
    },
    {
        subject: 'Writing',
        fullMark: 100,
        A: 100,
    },
];

const ProjectsData = [
    {
        name: "MUN Website",
        description: "A responsive website for the Model United Nations event, with features for event registration, schedules, and committee information.",
        technologies: ["React", "Next.js"],
        link: "https://mun-event.com",
        github: "https://github.com/username/mun-website"
    },
    {
        name: "Reconnect Alumni Network",
        description: "An alumni networking platform called Reconnect, where alumni can stay in touch, share opportunities, and connect with students.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Express", "MySQL"],
        link: "https://reconnect.com",
        github: "https://github.com/username/reconnect"
    },
    {
        name: "Parth Studios Management System",
        description: "A custom-built management system for event and wedding photography services, designed for a client named Parth Studios.",
        technologies: ["Angular", "Node.js", "Express"],
        link: "https://parth-studios.com",
        github: "https://github.com/username/parth-studios-management"
    },
    {
        name: "HackWithIndia Platform",
        description: "An all-in-one platform to manage hackathons for the HackWithIndia organization, allowing participants to register, view challenges, and submit projects.",
        technologies: ["Vue.js", "Django", "PostgreSQL", "Express", "MySQL"],
        link: "https://hackwithindia.com",
        github: "https://github.com/username/hackwithindia-platform"
    },
    {
        name: "DG Vaishnav College Website",
        description: "A modern, user-friendly website for DG Vaishnav College, showcasing information on courses, admissions, and campus events.",
        technologies: ["React", "Next.js", "GraphQL", "Apollo", "Express"],
        link: "https://dgvaishnavcollege.edu",
        github: "https://github.com/username/dg-vaishnav-college-website"
    },
]

const ExperienceData = [
    {
        jobTitle: "CTO",
        company: "HackWithIndia",
        duration: "May 2022 - Present",
        responsibilities: [
            "Leading the technical team in developing platforms for hackathons and coding events.",
            "Overseeing end-to-end software development, including design, deployment, and maintenance.",
            "Collaborating with stakeholders to align technology solutions with business goals."
        ],
        technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
        document: "https://hackwithindia.live"
    },
    {
        jobTitle: "React.js Developer Intern",
        company: "Parth Studios",
        duration: "Jan 2023 - Apr 2023",
        responsibilities: [
            "Developed and maintained the front end of an event management system for wedding photography services.",
            "Optimized components for maximum performance and scalability across different devices.",
            "Collaborated with the backend team to integrate RESTful APIs."
        ],
        technologies: ["React.js", "Redux", "Node.js", "Express", "MongoDB"],
        document: "https://hackwithindia.live"
    },
    {
        jobTitle: "Freelance Web Developer",
        company: "Self-Employed",
        duration: "Jun 2021 - Dec 2022",
        responsibilities: [
            "Built and delivered custom websites for various clients, including small businesses and non-profits.",
            "Worked on responsive web design, ensuring compatibility across multiple devices.",
            "Managed project timelines, requirements gathering, and client communications."
        ],
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Bootstrap"],
        document: "https://hackwithindia.live"
    },
    {
        jobTitle: "Frontend Developer",
        company: "DG Vaishnav College",
        duration: "Oct 2023 - Present",
        responsibilities: [
            "Developing a modern, user-friendly website for the college, focusing on accessibility and user experience.",
            "Implementing a modular design system to streamline updates and enhance consistency across the site.",
            "Collaborating with college staff to ensure accurate and up-to-date information is presented."
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
        document: "https://hackwithindia.live"
    },
    {
        jobTitle: "Project Lead",
        company: "Model United Nations (MUN) Website Development",
        duration: "Mar 2023 - May 2023",
        responsibilities: [
            "Led the development of the official website for the MUN event, facilitating event registration and information access.",
            "Coordinated with a team of designers and developers to ensure on-time delivery.",
            "Implemented features like real-time event updates and participant management."
        ],
        technologies: ["React", "Firebase", "Tailwind CSS"],
        document: "https://hackwithindia.live"
    },
];


function page() {

    const [userProfile, setUserProfile] = useState([]);
    const [topskills, settopSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await axios.get(`/api/profile/${id}`);

            settopSkills(response.data.user.topSkills);
            setSkills(response.data.user.skills);

            return setUserProfile(response.data.user)
        };

        fetchUserProfile();
    }, [id]);

    console.log(skills);

    const [seeMore, setSeeMore] = useState(false);

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen gap-20">
            <div className="flex items-center justify-center w-full bg-[#14213D] h-80">
                <div className="flex flex-col items-center justify-between w-full md:flex-row lg:w-2/3">
                    <div className="flex gap-10">
                        <div className="relative w-40 h-40">
                            <img src={userProfile?.avatar} alt={userProfile?.fullname} className="object-cover w-full h-full border-8 border-white rounded-full" fetchPriority="high" loading="eager" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-bold text-white">{userProfile?.fullname}</h1>
                            <div className="flex gap-2">
                                <div className="flex gap-2">
                                    {topskills.map((data) => (
                                        <span key={data} className="px-2 py-1 border rounded-md text-amber-500 border-amber-500">{data}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="max-w-md text-sm text-white">{userProfile?.shortBio}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Link href="" className="px-6 py-3 font-medium bg-white rounded-md"><UserPlus /></Link>
                            <Link href="" className="px-6 py-3 font-medium bg-white rounded-md"><Share2 /></Link>
                        </div>
                        <Link href="" className="px-6 py-3 font-medium text-center text-white border rounded-md border-amber-500">Follow</Link>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="flex flex-col items-end w-11/12 gap-10 p-10 rounded-md lg:w-2/3 bg-neutral-50">
                <h1 className="w-full text-2xl font-medium text-start">About</h1>
                <div className="flex flex-col items-end gap-4">
                    <p className={`${!seeMore && "line-clamp-4 text-ellipsis"}`}>{userProfile.about || "No information available"}</p>
                    <div onClick={handleSeeMore} className="flex justify-end cursor-pointer w-fit">
                        <h1 className="text-amber-500">{!seeMore ? "Show More" : "Show Less"}</h1>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col w-11/12 gap-20 p-10 rounded-md lg:w-2/3 bg-neutral-50">
                <div className="flex flex-col gap-10">
                    <h1 className="w-full text-2xl font-medium text-start">Skills</h1>
                    <div className="flex gap-2">
                        {SkillsData.map((data, index) => (
                            <h1 key={index} className="bg-[#14213D] text-white text-nowrap px-3 py-2 rounded-full w-fit">{data.subject}</h1>
                        ))}
                    </div>
                </div>
                <div className="w-full h-[30vw]">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SkillsData}>
                            <PolarGrid stroke="#999" />
                            <PolarAngleAxis dataKey="subject" />
                            <Radar name="Mike" dataKey="A" stroke="#14213D" fill="#14213D" fillOpacity={0.3} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Projects */}
            <div className="flex flex-col w-11/12 gap-20 p-10 rounded-md lg:w-2/3 bg-neutral-50">
                <div className="flex flex-col gap-10">
                    <h1 className="w-full text-2xl font-medium text-start">Projects / Research Work</h1>
                    <div className="grid items-center grid-cols-2 gap-4 w-fit">
                        {ProjectsData.map((data, index) => (
                            <div key={index} className="flex flex-col gap-10 h-full p-5 max-w-xl rounded-md outline outline-1 outline-black/40 hover:outline-black after:outline-black/40 hover:after:outline-black relative hover:text-black transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out font-medium text-lg after:bottom-[-100%] after:left-0 after:absolute even:after:bg-gradient-to-tr even:from-white even:via-blue-200 even:to-white odd:after:bg-gradient-to-tr odd:from-white odd:via-red-200 odd:to-white  after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:bottom-0">
                                <div className="relative z-10 flex flex-col gap-2">
                                    <h1 className="text-xl font-medium">{data.name}</h1>
                                    <h1 className="text-neutral-500 line-clamp-2 w-[90%] text-ellipsis">{data.description}</h1>
                                </div>
                                <div className="relative z-10 flex items-start justify-between gap-2">
                                    <div className="grid items-center grid-cols-3 gap-2 w-fit">
                                        {data.technologies.map((tech, index) => (
                                            <h1 key={index} className="bg-[#14213D] text-sm text-white text-nowrap px-3 py-2 rounded-full w-full text-center">{tech}</h1>
                                        ))}
                                    </div>
                                    <div className="relative z-10 flex gap-2">
                                        <Link href={data.github} target="_blank" className="p-3 rounded-md bg-amber-200"><Github /></Link>
                                        <Link href={data.link} target="_blank" className="p-3 rounded-md bg-amber-200"><ExternalLink /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col w-11/12 gap-20 p-10 rounded-md lg:w-2/3 bg-neutral-50">
                <div className="flex flex-col gap-6">
                    <h1 className="w-full text-2xl font-medium text-start">Experience</h1>
                    {ExperienceData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-4 p-4 rounded-md outline outline-1 outline-black/40 hover:outline-black after:outline-black/40 hover:after:outline-black relative hover:text-black transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out font-medium text-lg after:top-[-100%] after:left-[0%] after:absolute even:after:bg-gradient-to-tr even:from-white even:via-amber-200 even:to-white odd:after:bg-gradient-to-tr odd:from-white odd:via-purple-200 odd:to-white after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:top-0">
                            <div className="relative z-10 flex items-center justify-between">
                                <h1 className="text-xl font-medium">{data.jobTitle}, <span className="text-sm text-neutral-500">{data.company}</span></h1>
                                <h1>{data.duration}</h1>
                            </div>
                            <div className="relative z-10 flex flex-col gap-6">
                                <ul className="list-disc list-inside indent-4">
                                    {data.responsibilities.map((res, index) => (
                                        <li className="w-[90%] text-ellipsis" key={index}>{res}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {data.technologies.map((tech, index) => (
                                            <h1 key={index} className="bg-[#14213D] text-sm text-white text-nowrap px-3 py-2 rounded-full w-fit">{tech}</h1>
                                        ))}
                                    </div>
                                    <Link href={data.document} target="_blank" className="p-3 rounded-md bg-amber-200"><ExternalLink /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-96">

            </div>
        </div>
    )
}

export default page