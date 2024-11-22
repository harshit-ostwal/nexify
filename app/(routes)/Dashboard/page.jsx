"use client"
import LeftSidebar from '@/components/sidebar/left-sidebar'
import RightSidebar from '@/components/sidebar/right-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, MessageSquare, Share2, Image as ImageIcon, NotebookTabs, ThumbsUp, File, Paperclip } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function page() {

  const [posts, setPosts] = useState([]);

  const fetchUserProfile = async () => {
    const response = await axios.get(`/api/posts`);
    setPosts(response.data.formattedPosts);

  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    content: "",
    joiningDate: "",
    location: "",
    role: "",
    salary: ""
  });

  const [formData2, setFormData2] = useState({
    title: "",
    content: "",
  });

  const [formData1, setFormData1] = useState({
    title: "",
    content: "",
    submissionDate: "",
    techStack: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value,
    });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  const handleLike = async (postId, postType) => {
    try {
      const res = await axios.post(`/api/posts/like`, { postId, postType });
      fetchUserProfile(); // Re-fetch posts to update like count
      console.log(res);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  // Handle comment action
  const handleComment = async (postId, postType) => {
    try {
      const res = await axios.post(`/api/posts/comment`, { postId, postType });
      fetchUserProfile(); // Re-fetch posts to update comment count
      console.log(res);

    } catch (error) {
      console.error("Error commenting on post:", error);
    }
  };

  const handleNormal = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/api/profile/post`, formData2);
      console.log(res);

      fetchUserProfile();
    } catch (error) {
      console.error("Error posting post:", error);
    }
  }

  const handleProject = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/profile/project`, formData1);
      fetchUserProfile();
    } catch (error) {
      console.error("Error posting project:", error);
    }
  }

  const handleJob = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/profile/job`, formData);
      fetchUserProfile();
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };


  return (
    <div className="flex">
      <LeftSidebar />

      <div className="flex flex-col items-center justify-center flex-1 w-full h-full max-w-2xl gap-10 mx-auto my-20">
        <div className="flex flex-col w-full h-full p-5 border rounded-md">
          <div className="flex flex-col items-center justify-between w-full gap-4">
            <div className="flex items-center justify-center w-full gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="w-full border hover:border-black">
                    Start a Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Create Post</DialogTitle>
                    <DialogDescription>
                      Share your thoughts with your friends. Click post when you're ready.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleNormal} className="grid gap-4 py-4">
                    {/* Title Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="post-title" className="text-right w-fit">
                        Title
                      </Label>
                      <Input
                        name="title"
                        id="post-title"
                        placeholder="Enter the title of your post"
                        className="col-span-3"
                        value={formData2.title} // Bind the value to formData
                        onChange={handleChange2}
                      />
                    </div>
                    {/* Content Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="post-content" className="text-right w-fit">
                        Content
                      </Label>
                      <textarea
                        id="post-content"
                        name="content"
                        placeholder="Write something amazing..."
                        className="col-span-3 p-2 border rounded"
                        rows={4}
                        value={formData2.content}
                        onChange={handleChange2}
                      ></textarea>
                    </div>
                    <DialogClose asChild>
                      <Button type="submit" onSubmit={handleNormal}>Post</Button>
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="w-full border hover:border-black">
                    Post a Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Create Project Post</DialogTitle>
                    <DialogDescription>
                      Share your project details. Click post when you're ready.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleProject} className="grid gap-4 py-4">                    {/* Title Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="post-title" className="text-right w-fit">
                        Title
                      </Label>
                      <Input
                        id="job-title"
                        placeholder="Enter the project title"
                        name="title"
                        value={formData1.title} // Bind the value to formData
                        onChange={handleChange1} // Ensure handleChange updates the formData
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="tech-stack" className="text-right w-fit">
                        Tech Stack
                      </Label>
                      <Input
                        id="tech-stack"
                        placeholder="Enter the project TechStack"
                        name="techStack"
                        value={formData1.techStack} // Bind the value to formData
                        onChange={handleChange1} // Ensure handleChange updates the formData
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="submission-date" className="text-right w-fit">
                        Submission Date
                      </Label>
                      <Input
                        name="submissionDate"
                        id="submission-date"
                        type="date"
                        className="col-span-3"
                        value={formData1.submissionDate}
                        onChange={handleChange1}
                      />
                    </div>
                    {/* Content Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="post-content" className="text-right w-fit">
                        Content
                      </Label>
                      <textarea
                        id="post-content"
                        name="content"
                        placeholder="Write something amazing..."
                        className="col-span-3 p-2 border rounded"
                        rows={4}
                        value={formData1.content}
                        onChange={handleChange1}
                      ></textarea>
                    </div>
                    <DialogClose asChild>
                      <Button type="submit" onSubmit={handleProject}>Post</Button>
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="w-full border hover:border-black">
                    Post a Job
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Create Job Post</DialogTitle>
                    <DialogDescription>
                      Share job details. Click post when you're ready.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleJob} className="grid gap-4 py-4">                    {/* Job Title Field */}
                    {/* Company Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="job-title" className="text-right w-fit">
                        Title
                      </Label>
                      <Input
                        id="job-title"
                        placeholder="Enter the job title"
                        name="title"
                        value={formData.title} // Bind the value to formData
                        onChange={handleChange} // Ensure handleChange updates the formData
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="company-name" className="text-right w-fit">
                        Company
                      </Label>
                      <Input
                        name="company"
                        id="company-name"
                        placeholder="Enter the company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="post-content" className="text-right w-fit">
                        Content
                      </Label>
                      <textarea
                        name="content"
                        id="post-content"
                        placeholder="Write something amazing..."
                        className="col-span-3 p-2 border rounded"
                        rows={4}
                        value={formData.content}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    {/* Joining Date Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="joining-date" className="text-right w-fit">
                        Joining Date
                      </Label>
                      <Input
                        name="joiningDate"
                        id="joining-date"
                        type="date"
                        className="col-span-3"
                        value={formData.joiningDate}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Location Field */}
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="job-location" className="text-right w-fit">
                        Location
                      </Label>
                      <Input
                        name="location"
                        id="job-location"
                        placeholder="Enter the job location"
                        className="col-span-3"
                        value={formData.location}
                        onChange={handleChange}
                      />

                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="job-role" className="text-right w-fit">
                        Role
                      </Label>
                      <Input
                        name="role"
                        id="job-role"
                        placeholder="Enter the job role"
                        className="col-span-3"
                        value={formData.role}
                        onChange={handleChange}
                      />

                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="job-salary" className="text-right w-fit">
                        Salary
                      </Label>
                      <Input
                        name="salary"
                        id="job-salary"
                        placeholder="Enter the Job Salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="col-span-3"
                      />
                    </div>
                    <DialogClose asChild>
                      <Button type="submit" onSubmit={handleJob}>Post</Button>
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>

            </div>
          </div>
        </div>


        <div className="flex flex-col w-full h-full border-t border-x">
          {posts.map((data, index) => (
            <div key={index} className="flex flex-col justify-between w-full gap-4 p-5 border-b">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={data.author.avatar}
                  alt={data.author.name}
                />
                <div className="flex flex-col gap-1 leading-none">
                  <h1 className="text-lg font-medium">{data.author.name}</h1>
                  <p className="text-neutral-800">{data.author.title}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1>{data.content}</h1>
                {data.type === 3 && (
                  <div className="flex flex-col gap-2">
                    <h1>Job Title: <span className="font-medium">{data.company}</span></h1>
                    <h1>Job Joining Date: <span className="font-medium">{data.joiningDate}</span></h1>
                    <h1>Job Role: <span className="font-medium">{data.role}</span></h1>
                    <h1>Job Salary: <span className="font-medium">{data.salary}</span></h1>
                    <h1>Job Location: <span className="font-medium">{data.location}</span></h1>
                  </div>
                )}
                {data.image && (
                  <img src={data.image} className="rounded-md" />
                )}
                <Separator className="w-full bg-neutral-300" />
                <div className="flex items-center justify-between">
                  {data.type === 1 && (
                    <>
                      <button
                        className="flex items-center gap-2 text-neutral-400"
                        onClick={() => handleLike(data.id, "NormalPost")}
                      >
                        <Heart className="w-5 h-5" />
                        <p className="text-sm">{data.likes}</p>
                      </button>
                      <button
                        className="flex items-center gap-2 text-neutral-400"
                        onClick={() => handleComment(data.id, "NormalPost")}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <p className="text-sm">{data.comments}</p>
                      </button>
                      <button className="flex items-center gap-2 text-neutral-400">
                        <Share2 className="w-5 h-5" />
                        <p className="text-sm">Share</p>
                      </button>
                    </>
                  )}
                  {data.type === 3 && (
                    <>
                      <button
                        className="flex items-center gap-2 text-neutral-400"
                        onClick={() => handleLike(data.id, "JobPost")}
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <p className="text-sm">{data.likes}</p>
                      </button>
                      <button
                        className="flex items-center gap-2 text-neutral-400"
                        onClick={() => handleComment(data.id, "JobPost")}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <p className="text-sm">{data.comments}</p>
                      </button>
                      <button className="flex items-center gap-2 text-neutral-400">
                        <File className="w-5 h-5" />
                        <p className="text-sm">Apply</p>
                      </button>
                      <button className="flex items-center gap-2 text-neutral-400">
                        <Share2 className="w-5 h-5" />
                        <p className="text-sm">Share</p>
                      </button>
                    </>
                  )}
                  {data.type === 2 && (
                    <>
                      <button
                        className="flex items-center gap-2 text-neutral-400"
                        onClick={() => handleLike(data.id, "ProjectPost")}
                      >
                        <Heart className="w-5 h-5" />
                        <p className="text-sm">{data.likes}</p>
                      </button>
                      <button
                        className="flex items-center gap-2 text-neutral-400"
                        onClick={() => handleComment(data.id, "ProjectPost")}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <p className="text-sm">{data.comments}</p>
                      </button>
                      <button className="flex items-center gap-2 text-neutral-400">
                        <Paperclip className="w-5 h-5" />
                        <p className="text-sm">Collab</p>
                      </button>
                      <button className="flex items-center gap-2 text-neutral-400">
                        <Share2 className="w-5 h-5" />
                        <p className="text-sm">Share</p>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RightSidebar />
    </div >
  )
}

export default page