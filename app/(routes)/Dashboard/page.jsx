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
import { Heart, MessageSquare, Share2, ThumbsUp, File, Paperclip } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'

function page() {

  const [posts, setPosts] = useState([]);

  const fetchUserProfile = async () => {
    const response = await axios.get(`/api/posts`);
    const formattedPosts = response.data.formattedPosts.map((post) => ({
      ...post,
      liked: post.likes || false,
      applied: post.applied || false,
    }));
    setPosts(formattedPosts);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleApply = async (postId) => {
    try {
      // Optimistically update the UI
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, applied: true } : post
        )
      );

      // Make the API call
      await axios.post(`/api/jobApply`, { postId });

      toast.success("Job application submitted successfully!");
    } catch (error) {
      // Rollback the UI in case of an error
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, applied: false } : post
        )
      );

      if (error.response?.status === 400) {
        toast.error("You have already applied for this job.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  const [commentData, setCommentData] = useState({ postId: '', postType: '', message: '' });

  const handleComment = (postId, postType) => {
    setCommentData({ postId, postType, message: '' });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const { postId, postType, message } = commentData;

    if (!message.trim()) {
      toast.error("Comment message is required");
      return;
    }

    try {
      await axios.post(`/api/posts/comment`, { postId, postType, message });
      fetchUserProfile();
      toast.success("Comment posted successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    content: "",
    joiningDate: "",
    location: "",
    role: "",
    salary: "",
    imageUrl: "",
  });

  const [formData2, setFormData2] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  const [formData1, setFormData1] = useState({
    title: "",
    content: "",
    submissionDate: "",
    techStack: "",
    imageUrl: "",
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
      // Optimistically update the UI
      setLikedPosts((prev) => ({
        ...prev,
        [postId]: !prev[postId],
      }));

      // Call the API
      await axios.post(`/api/posts/like`, { postId, postType });

      // Re-fetch posts to update the like count
      fetchUserProfile();
    } catch (error) {
      console.error("Error liking post:", error);
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

  const [likedPosts, setLikedPosts] = useState({});

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
                  <Button className="w-full border hover:border-black">
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
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="image-url" className="text-right w-fit">
                        Image URL
                      </Label>
                      <Input
                        id="image-url"
                        name="imageUrl"
                        placeholder="Enter the URL of the image"
                        value={formData2.imageUrl}
                        onChange={handleChange2}
                        className="col-span-3"
                      />
                    </div>
                    <DialogClose asChild>
                      <Button type="submit" onSubmit={handleNormal}>Post</Button>
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full border hover:border-black">
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
                  <form onSubmit={handleProject} className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="post-title" className="text-right w-fit">
                        Title
                      </Label>
                      <Input
                        id="job-title"
                        placeholder="Enter the project title"
                        name="title"
                        value={formData1.title}
                        onChange={handleChange1}
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
                        value={formData1.techStack}
                        onChange={handleChange1}
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
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="image-url" className="text-right w-fit">
                        Image URL
                      </Label>
                      <Input
                        id="image-url"
                        name="imageUrl"
                        placeholder="Enter the URL of the image"
                        value={formData1.imageUrl}
                        onChange={handleChange1}
                        className="col-span-3"
                      />
                    </div>
                    <DialogClose asChild>
                      <Button type="submit" onSubmit={handleProject}>Post</Button>
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full border hover:border-black">
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
                  <form onSubmit={handleJob} className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="job-title" className="text-right w-fit">
                        Title
                      </Label>
                      <Input
                        id="job-title"
                        placeholder="Enter the job title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
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
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="image-url" className="text-right w-fit">
                        Image URL
                      </Label>
                      <Input
                        id="image-url"
                        name="imageUrl"
                        placeholder="Enter the URL of the image"
                        value={formData.imageUrl}
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
                  className="object-cover w-16 h-16 rounded-full"
                  src={data.author.avatar}
                  alt={data.author.name}
                />
                <div className="flex flex-col gap-1 leading-none">
                  <h1 className="text-lg font-medium">{data.author.name}</h1>
                  <p className="text-neutral-800">{data.author.title}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {
                  data.type === 1 && (
                    <h1>{data.content}</h1>
                  )
                }
                {data.type === 3 && (
                  <div className="flex flex-col gap-2">
                    <h1>Job Title: <span className="font-medium">{data.company}</span></h1>
                    <h1>Job Joining Date: <span className="font-medium">{data.joiningDate}</span></h1>
                    <h1>Job Role: <span className="font-medium">{data.role}</span></h1>
                    <h1>Job Salary: <span className="font-medium">{data.salary}</span></h1>
                    <h1>Job Location: <span className="font-medium">{data.location}</span></h1>
                  </div>
                )}
                {data.type === 2 && (
                  <div className="flex flex-col gap-2">
                    <h1>Project Title: <span className="font-medium">{data.title}</span></h1>
                    <h1>Project Content: <span className="font-medium">{data.content}</span></h1>
                    <h1>Project TechStack: <span className="font-medium">{data.techStack}</span></h1>
                    <h1>Project Submission Date: <span className="font-medium">{data.submissionDate}</span></h1>
                  </div>
                )}
                {data.imageUrl && (
                  <img src={data.imageUrl} className="object-cover rounded-md" />
                )}
                <Separator className="w-full bg-neutral-300" />
                <div className="flex items-center justify-between">
                  {data.type === 1 && (
                    <>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => handleLike(data.id, "NormalPost")}
                      >
                        <Heart color={likedPosts[data.id] ? "none" : "#14213D"} fill={likedPosts[data.id] ? "red" : "none"} className={`w-5 h-5 `} />
                        <p className="text-sm">{data.likes}</p>
                      </button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="flex items-center gap-2 text-[#14213D]"
                            onClick={() => handleComment(data.id, "NormalPost")}
                          >
                            <MessageSquare className="w-5 h-5" />
                            <p className="text-sm">{data.comments.length} Comments</p>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl">
                          <DialogHeader>
                            <DialogTitle>Post a Comment</DialogTitle>
                            <DialogDescription>
                              Share your thoughts on this post.
                            </DialogDescription>
                          </DialogHeader>

                          {/* Display Comments */}
                          <div className="py-4 space-y-4 overflow-y-auto h-96">
                            {data.comments && data.comments.length > 0 ? (
                              data.comments.map((comment) => (
                                <div key={comment.id} className="p-4 border-b">
                                  <p className="text-sm font-semibold">{comment.user?.fullname || 'Anonymous'}</p>
                                  <p className="text-sm">{comment.message}</p>
                                  <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                                </div>
                              ))
                            ) : (
                              <p>No comments yet. Be the first to share your thoughts!</p>
                            )}
                          </div>

                          {/* Comment Input Section */}
                          <form onSubmit={handleCommentSubmit} className="grid gap-4 py-4">
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="comment-message" className="text-right w-fit">
                                Your Comment
                              </Label>
                              <Input
                                id="comment-message"
                                placeholder="Write your comment..."
                                name="message"
                                value={commentData.message}
                                onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
                                className="col-span-3"
                              />
                            </div>

                            <DialogClose asChild>
                              <Button type="submit">Post Comment</Button>
                            </DialogClose>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <button className="flex items-center gap-2 text-[#14213D]">
                        <Share2 className="w-5 h-5" />
                        <p className="text-sm">Share</p>
                      </button>
                    </>
                  )}
                  {data.type === 3 && (
                    <>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => handleLike(data.id, "JobPost")}
                      >
                        <Heart color={likedPosts[data.id] ? "none" : "#14213D"} fill={likedPosts[data.id] ? "red" : "none"} className={`w-5 h-5 `} />
                        <p className="text-sm">{data.likes}</p>
                      </button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="flex items-center gap-2 text-[#14213D]"
                            onClick={() => handleComment(data.id, "JobPost")}
                          >
                            <MessageSquare className="w-5 h-5" />
                            <p className="text-sm">{data.comments.length} Comments</p>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl">
                          <DialogHeader>
                            <DialogTitle>Post a Comment</DialogTitle>
                            <DialogDescription>
                              Share your thoughts on this post.
                            </DialogDescription>
                          </DialogHeader>

                          {/* Display Comments */}
                          <div className="py-4 space-y-4 overflow-y-auto h-96">
                            {data.comments && data.comments.length > 0 ? (
                              data.comments.map((comment) => (
                                <div key={comment.id} className="p-4 border-b">
                                  <p className="text-sm font-semibold">{comment.user?.fullname || 'Anonymous'}</p>
                                  <p className="text-sm">{comment.message}</p>
                                  <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                                </div>
                              ))
                            ) : (
                              <p>No comments yet. Be the first to share your thoughts!</p>
                            )}
                          </div>

                          {/* Comment Input Section */}
                          <form onSubmit={handleCommentSubmit} className="grid gap-4 py-4">
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="comment-message" className="text-right w-fit">
                                Your Comment
                              </Label>
                              <Input
                                id="comment-message"
                                placeholder="Write your comment..."
                                name="message"
                                value={commentData.message}
                                onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
                                className="col-span-3"
                              />
                            </div>

                            <DialogClose asChild>
                              <Button type="submit">Post Comment</Button>
                            </DialogClose>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => handleApply(data.id)} // Trigger handleApply
                      >
                        <File className={`w-5 h-5 ${data.applied ? "text-green-500" : "text-[#14213D]"}`} />
                        <p className="text-sm">{data.applied ? 'Applied' : 'Apply'}</p> {/* Toggle text based on applied state */}
                      </button>
                      <button className="flex items-center gap-2 text-[#14213D]">
                        <Share2 className="w-5 h-5" />
                        <p className="text-sm">Share</p>
                      </button>
                    </>
                  )}
                  {data.type === 2 && (
                    <>
                      <button
                        className="flex items-center gap-2"
                        onClick={() => handleLike(data.id, "ProjectPost")}
                      >
                        <Heart color={likedPosts[data.id] ? "none" : "#14213D"} fill={likedPosts[data.id] ? "red" : "none"} className={`w-5 h-5 `} />
                        <p className="text-sm">{data.likes}</p>
                      </button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="flex items-center gap-2 text-[#14213D]"
                            onClick={() => handleComment(data.id, "ProjectPost")}
                          >
                            <MessageSquare className="w-5 h-5" />
                            <p className="text-sm">{data.comments.length} Comments</p>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl">
                          <DialogHeader>
                            <DialogTitle>Post a Comment</DialogTitle>
                            <DialogDescription>
                              Share your thoughts on this post.
                            </DialogDescription>
                          </DialogHeader>

                          {/* Display Comments */}
                          <div className="py-4 space-y-4 overflow-y-auto h-96">
                            {data.comments && data.comments.length > 0 ? (
                              data.comments.map((comment) => (
                                <div key={comment.id} className="p-4 border-b">
                                  <p className="text-sm font-semibold">{comment.user?.fullname || 'Anonymous'}</p>
                                  <p className="text-sm">{comment.message}</p>
                                  <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                                </div>
                              ))
                            ) : (
                              <p>No comments yet. Be the first to share your thoughts!</p>
                            )}
                          </div>

                          {/* Comment Input Section */}
                          <form onSubmit={handleCommentSubmit} className="grid gap-4 py-4">
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="comment-message" className="text-right w-fit">
                                Your Comment
                              </Label>
                              <Input
                                id="comment-message"
                                placeholder="Write your comment..."
                                name="message"
                                value={commentData.message}
                                onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
                                className="col-span-3"
                              />
                            </div>

                            <DialogClose asChild>
                              <Button type="submit">Post Comment</Button>
                            </DialogClose>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <button className="flex items-center gap-2 text-[#14213D]">
                        <Paperclip className="w-5 h-5" />
                        <p className="text-sm">Collab</p>
                      </button>
                      <button className="flex items-center gap-2 text-[#14213D]">
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