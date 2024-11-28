"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { useUser } from "@/hooks/useUserSession";
import Link from "next/link";

function LeftSidebar() {
  const [user, setUsers] = useState([]);
  const [postCount, setPostCount] = useState(0);

  const { handleSignOut } = useUser();

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/user");
      setUsers(response.data.user); // Set the users array
      setPostCount(response.data.data); // Set the post count
    } catch (error) {
      console.error("Error fetching user data or post count:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="fixed left-0 top-auto flex-col hidden h-screen gap-2 p-4 border-r shadow-xl xl:flex w-80">
      <div>
        {/* User Info */}
        <Link href={`/Profile/${user.id}`} className="p-4 rounded-md hover:bg-neutral-100">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt={user.fullname}
              className="object-cover w-24 h-24 mb-4 border rounded-full"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {user.fullname}
            </h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.mobileno}</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-700 text-md">Short Bio:</h4>
            <p className="text-sm text-gray-600">{user.shortBio || "N/A"}</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-700 text-md">Top Skills:</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {user.topSkills && user.topSkills.length > 0 ? (
                user.topSkills.map((skill, index) => <li key={index}>{skill}</li>)
              ) : (
                <p>No skills added</p>
              )}
            </ul>
          </div>
        </Link>

        <Separator className="bg-neutral-200" />

        {/* Post Count */}
        <div className="p-4 mt-4 ">
          <h3 className="text-lg font-bold text-gray-700">Your Posts</h3>
          <p className="text-2xl font-semibold text-blue-600">{postCount}</p>
          <p className="text-sm text-gray-500">Total posts</p>
        </div>
      </div>

      {/* Logout Button */}
      <button onClick={handleSignOut} className="w-full px-4 py-2 text-white bg-red-500 rounded-md h-fit hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}

export default LeftSidebar;