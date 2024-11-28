"use client";
import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const ProfileSection = ({ posts }) => {
  const [profile, setProfile] = useState({
    fullname: "",
    rollno: "",
    mobileNo: "",
    email: "",
    avatar: "",
    shortBio: "",
    about: "",
    topSkill1: "",
    topSkill2: "",
    topSkill3: "",
  });

  useEffect(() => {
    if (posts) {
      setProfile({
        fullname: posts.fullname || "",
        rollno: posts.rollno || "",
        mobileNo: posts.mobileNo || "",
        email: posts.email || "",
        avatar: posts.avatar || "",
        shortBio: posts.shortBio || "",
        about: posts.about || "",
        topSkill1: profile.topSkills1 || "",
        topSkill2: profile.topSkills2 || "",
        topSkill3: profile.topSkills3 || "",
      });
    }
  }, [posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/updateProfile", {
        fullname: profile.fullname,
        rollno: profile.rollno,
        mobileNo: profile.mobileNo,
        email: profile.email,
        shortBio: profile.shortBio,
        about: profile.about,
        topSkill1: profile.topSkills1,
        topSkill2: profile.topSkills2,
        topSkill3: profile.topSkills3,
      });

      if (response.status === 200) {
        console.log("Profile updated successfully:", response.data);
        toast("Profile updated successfully!");
      } else {
        console.error("Failed to update profile:", response.data);
        toast("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast("An error occurred while updating your profile.");
    }
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Personal Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-8">
          <div className="relative group">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.fullname || "User Avatar"}
                className="object-cover w-32 h-32 border-4 border-white rounded-full shadow-lg"
              />
            ) : (
              <div className="flex items-center justify-center w-32 h-32 bg-gray-200 border-4 border-white rounded-full shadow-lg">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black rounded-full opacity-0 cursor-pointer bg-opacity-40 group-hover:opacity-100">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-1 text-xl font-bold text-gray-900">
              {profile.fullname}
            </h3>
            <p className="text-gray-600">{profile.shortBio}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={profile.fullname}
              onChange={(e) =>
                setProfile({ ...profile, fullname: e.target.value })
              }
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
              onChange={(e) =>
                setProfile({ ...profile, rollno: e.target.value })
              }
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
              onChange={(e) =>
                setProfile({ ...profile, mobileNo: e.target.value })
              }
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
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
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
              onChange={(e) =>
                setProfile({ ...profile, shortBio: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              About
            </label>
            <textarea
              value={profile.about}
              onChange={(e) =>
                setProfile({ ...profile, about: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Top 1 Skills
            </label>
            <input
              type="text"
              value={profile.topSkill1}
              onChange={(e) =>
                setProfile({ ...profile, topSkill1: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Top 2 Skills
            </label>
            <input
              type="text"
              value={profile.topSkill2}
              onChange={(e) =>
                setProfile({ ...profile, topSkill2: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Top 3 Skills
            </label>
            <input
              type="text"
              value={profile.topSkill3}
              onChange={(e) =>
                setProfile({ ...profile, topSkill3: e.target.value })
              }
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
    </div>
  );
};

export default ProfileSection;