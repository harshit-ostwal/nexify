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
    skills: [{ name: "", percentage: "" }],
  });

  // Update profile data if posts are passed as a prop
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
        topSkill1: posts.topSkills && posts.topSkills[0] ? posts.topSkills[0] : "",
        topSkill2: posts.topSkills && posts.topSkills[1] ? posts.topSkills[1] : "",
        topSkill3: posts.topSkills && posts.topSkills[2] ? posts.topSkills[2] : "",
        skills: posts.skills || [{ name: "", percentage: "" }],
      });
    }
  }, [posts]);

  // Handle form submission to update profile
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
        topSkill1: profile.topSkill1,
        topSkill2: profile.topSkill2,
        topSkill3: profile.topSkill3,
        skills: profile.skills.map((skill) => ({
          name: skill.name,
          percentage: skill.percentage,
        })),
      });

      if (response.status === 200) {
        toast("Profile updated successfully!");
      } else {
        toast("Failed to update profile. Please try again.");
      }
    } catch (error) {
      toast("An error occurred while updating your profile.");
    }
  };

  // Handle changes to skills input
  const handleSkillChange = (index, event, field) => {
    const updatedSkills = [...profile.skills];
    updatedSkills[index][field] = event.target.value;
    setProfile({ ...profile, skills: updatedSkills });
  };

  // Add a new skill input field
  const addSkillField = () => {
    setProfile({ ...profile, skills: [...profile.skills, { name: "", percentage: "" }] });
  };

  // Remove a skill input field
  const removeSkillField = (index) => {
    const updatedSkills = profile.skills.filter((_, i) => i !== index);
    setProfile({ ...profile, skills: updatedSkills });
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">Personal Information</h2>
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
            <h3 className="mb-1 text-xl font-bold text-gray-900">{profile.fullname}</h3>
            <p className="text-gray-600">{profile.shortBio}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={profile.fullname}
              onChange={(e) => setProfile({ ...profile, fullname: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Roll Number Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Roll Number</label>
            <input
              type="text"
              value={profile.rollno}
              onChange={(e) => setProfile({ ...profile, rollno: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              value={profile.mobileNo}
              onChange={(e) => setProfile({ ...profile, mobileNo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Short Bio Input */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Short Bio</label>
            <input
              type="text"
              value={profile.shortBio}
              onChange={(e) => setProfile({ ...profile, shortBio: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* About Input */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">About</label>
            <textarea
              value={profile.about}
              onChange={(e) => setProfile({ ...profile, about: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Top Skills Inputs */}
          {["Top 1", "Top 2", "Top 3"].map((label, idx) => (
            <div key={idx} className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {label} Skills
              </label>
              <input
                type="text"
                value={profile[`topSkill${idx + 1}`]}
                onChange={(e) =>
                  setProfile({ ...profile, [`topSkill${idx + 1}`]: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}

          {/* Skills List Input Fields */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Skills</label>
            {profile.skills.map((skill, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, e, "name")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Skill Name"
                />
                <input
                  type="number"
                  value={skill.percentage}
                  onChange={(e) => handleSkillChange(index, e, "percentage")}
                  className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="%"
                  min={0}
                  max={100}
                />
                <button
                  type="button"
                  onClick={() => removeSkillField(index)}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkillField}
              className="px-4 py-2 mt-2 text-white bg-green-500 rounded-lg"
            >
              Add Skill
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSection;