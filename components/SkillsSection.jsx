"use client"
import React, { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';

const SkillsSection = ({ posts }) => {

  const [skills, setSkills] = useState([
    {
      id: '1',
      subject: 'React',
      fullMark: 100,
      A: 85
    },
    {
      id: '2',
      subject: 'Node.js',
      fullMark: 100,
      A: 75
    }
  ]);

  const [editingSkill, setEditingSkill] = useState({
    id: '',
    subject: '',
    fullMark: 0,
    A: 0
  });
  
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const handleAddSkill = () => {
    setIsAddingSkill(true);
    setEditingSkill({
      id: Date.now().toString(),
      subject: '',
      fullMark: 100,
      A: 0
    });
  };

  const handleSaveSkill = (skill) => {
    if (skills.find(s => s.id === skill.id)) {
      setSkills(skills.map(s => s.id === skill.id ? skill : s));
    } else {
      setSkills([...skills, skill]);
    }
    setEditingSkill(null);
    setIsAddingSkill(false);
  };

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
        <button
          onClick={handleAddSkill}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Skill
        </button>
      </div>

      {editingSkill && (
        <div className="p-6 mb-6 rounded-lg bg-gray-50">
          <h3 className="mb-4 text-lg font-medium">
            {isAddingSkill ? 'Add New Skill' : 'Edit Skill'}
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Skill Name"
              value={editingSkill.subject}
              onChange={(e) => setEditingSkill({ ...editingSkill, subject: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Proficiency Level (0-100)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={editingSkill.A}
                onChange={(e) => setEditingSkill({ ...editingSkill, A: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-sm text-right text-gray-600">{editingSkill.A}%</div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingSkill(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveSkill(editingSkill)}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-6 rounded-lg bg-gray-50"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{skill.subject}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingSkill(skill)}
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-semibold text-blue-600">
                    {skill.A}%
                  </span>
                </div>
              </div>
              <div className="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded">
                <div
                  style={{ width: `${skill.A}%` }}
                  className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;