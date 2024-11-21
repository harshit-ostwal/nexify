import LeftSidebar from '@/components/sidebar/left-sidebar'
import RightSidebar from '@/components/sidebar/right-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Bookmark, File, Heart, Image, Images, MessageSquare, NotebookTabs, Paperclip, Share2, ThumbsUp, Video } from 'lucide-react'
import React from 'react'

function page() {

  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        title: 'Senior Software Engineer at Tech Corp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Excited to announce that Ive just completed a major project using React and TypeScript! #webdevelopment #coding',
      likes: 234,
      comments: 45,
      time: '2h'
    },
    {
      id: 2,
      author: {
        name: 'Michael Chen',
        title: 'Product Manager at Innovation Labs',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Just published my thoughts on the future of AI in product development. Check out the link in comments!',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      likes: 567,
      comments: 89,
      time: '4h'
    },
    {
      id: 3,
      author: {
        name: 'Michael Chen',
        title: 'Product Manager at Innovation Labs',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Just published my thoughts on the future of AI in product development. Check out the link in comments!',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      likes: 567,
      comments: 89,
      time: '4h'
    },
    {
      id: 4,
      author: {
        name: 'Michael Chen',
        title: 'Product Manager at Innovation Labs',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Just published my thoughts on the future of AI in product development. Check out the link in comments!',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      likes: 567,
      comments: 89,
      time: '4h'
    },
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        title: 'Senior Software Engineer at Tech Corp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Excited to announce that Ive just completed a major project using React and TypeScript! #webdevelopment #coding',
      likes: 234,
      comments: 45,
      time: '2h'
    },
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        title: 'Senior Software Engineer at Tech Corp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Excited to announce that Ive just completed a major project using React and TypeScript! #webdevelopment #coding',
      likes: 234,
      comments: 45,
      time: '2h'
    },
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        title: 'Senior Software Engineer at Tech Corp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Excited to announce that Ive just completed a major project using React and TypeScript! #webdevelopment #coding',
      likes: 234,
      comments: 45,
      time: '2h'
    },
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        title: 'Senior Software Engineer at Tech Corp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      content: 'Excited to announce that Ive just completed a major project using React and TypeScript! #webdevelopment #coding',
      likes: 234,
      comments: 45,
      time: '2h'
    },
  ];

  return (
    <div className="flex">
      <LeftSidebar />

      <div className="flex flex-col items-center justify-center flex-1 w-full h-full max-w-2xl gap-10 mx-auto my-20">
        <div className="flex flex-col w-full h-full p-5 border rounded-md">
          <div className="flex flex-col items-center justify-between w-full gap-4">
            <div className="flex items-center justify-center w-full gap-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <Button variant={"ghost"} className="w-full border hover:border-black">Start a Post, Try Writing With An AI</Button>
            </div>
            <div className="flex justify-end w-full gap-4">
              <Button variant={"secondary"} className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <p className="text-sm">Video</p>
              </Button>
              <Button variant={"secondary"} className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                <p className="text-sm">Image</p>
              </Button>
              <Button variant={"secondary"} className="flex items-center gap-2">
                <NotebookTabs className="w-5 h-5" />
                <p className="text-sm">Article</p>
              </Button>
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
                  <p className="text-sm text-neutral-400">{data.time}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1>{data.content}</h1>
                {data.image ? <>
                  <img src={data?.image} className="rounded-md" />
                </> : null}
                <Separator className="w-full bg-neutral-300" />
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-neutral-400">
                    <Heart className="w-5 h-5" />
                    <p className="text-sm">{data.likes}</p>
                  </button>
                  <button className="flex items-center gap-2 text-neutral-400">
                    <MessageSquare className="w-5 h-5" />
                    <p className="text-sm">{data.comments}</p>
                  </button>
                  <button className="flex items-center gap-2 text-neutral-400">
                    <Bookmark className="w-5 h-5" />
                    <p className="text-sm">{data.comments}</p>
                  </button>
                  <button className="flex items-center gap-2 text-neutral-400">
                    <Share2 className="w-5 h-5" />
                    <p className="text-sm">Share</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RightSidebar />
    </div>
  )
}

export default page