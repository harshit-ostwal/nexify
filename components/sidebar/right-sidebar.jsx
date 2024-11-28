"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "../ui/button";

function RightSidebar() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data.user);
    } catch (error) {
      toast.error("Error fetching users" + error)
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="fixed right-0 top-auto hidden min-h-screen overflow-y-auto border-l shadow-xl xl:flex w-80">
      <div className="flex flex-col w-full gap-5 p-5">
        {/* Sidebar Header */}
        <h2 className="text-lg font-bold text-gray-700">Suggested Connections</h2>
        <p className="text-sm text-gray-500">
          Expand your network by connecting with these users.
        </p>

        {/* Users List */}
        <ScrollArea className="w-full h-[980px]">

          {users.map((data, index) => (
            <Link
              href={`/Profile/${data.id}`}
              className="flex flex-col items-center justify-between w-full gap-4 p-4 mt-5 bg-white border rounded-md shadow-sm border-neutral-300"
              key={index}
            >
              <div className="flex flex-col items-center justify-center w-full gap-4" >
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={data.avatar}
                  alt={data.fullname}
                />
                <div className="flex flex-col items-center w-full gap-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.fullname}
                  </h3>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-sm text-gray-500">{data.email}</p>
                    <p className="text-sm text-gray-500">{data.mobileno}</p>
                  </div>
                  <div className="w-full mt-4">
                    <h4 className="font-semibold text-gray-700 text-md">Short Bio:</h4>
                    <p className="text-sm text-gray-600">{data.shortBio || "N/A"}</p>
                  </div>
                </div>
              </div>
              <Button className="w-full px-4 py-2 text-sm font-medium">
                Follow
              </Button>
            </Link>
          ))}
        </ScrollArea>

        {/* Footer Text */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Discover more people and grow your professional network.
          </p>
        </div>
      </div>
    </div >
  );
}

export default RightSidebar;