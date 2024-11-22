"use client"

import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Link as LinkIcon } from 'lucide-react';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([
    {
      id: '1',
      companyName: 'Tech Corp',
      position: 'Senior Developer',
      description: 'Led a team of developers in building enterprise applications',
      techstack: [
        { id: '1', name: 'React' },
        { id: '2', name: 'TypeScript' },
        { id: '3', name: 'Node.js' }
      ],
      link: 'https://techcorp.com'
    }
  ]);

  const [editingExperience, setEditingExperience] = useState(null);
  const [isAddingExperience, setIsAddingExperience] = useState(false);

  const handleAddExperience = () => {
    setIsAddingExperience(true);
    setEditingExperience({
      id: Date.now().toString(),
      companyName: '',
      position: '',
      description: '',
      techstack: [],
    });
  };

  const handleSaveExperience = (experience) => {
    if (experiences.find(e => e.id === experience.id)) {
      setExperiences(experiences.map(e => e.id === experience.id ? experience : e));
    } else {
      setExperiences([...experiences, experience]);
    }
    setEditingExperience(null);
    setIsAddingExperience(false);
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter(e => e.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
        <button
          onClick={handleAddExperience}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      {editingExperience && (
        <div className="p-6 mb-6 rounded-lg bg-gray-50">
          <h3 className="mb-4 text-lg font-medium">
            {isAddingExperience ? 'Add New Experience' : 'Edit Experience'}
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Company Name"
              value={editingExperience.companyName}
              onChange={(e) => setEditingExperience({ ...editingExperience, companyName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Position"
              value={editingExperience.position}
              onChange={(e) => setEditingExperience({ ...editingExperience, position: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Description"
              value={editingExperience.description}
              onChange={(e) => setEditingExperience({ ...editingExperience, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
            />
            <input
              type="text"
              placeholder="Company Website"
              value={editingExperience.link}
              onChange={(e) => setEditingExperience({ ...editingExperience, link: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingExperience(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveExperience(editingExperience)}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="p-6 rounded-lg bg-gray-50"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-gray-900">{experience.companyName}</h3>
                  {experience.link && (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="font-medium text-blue-600">{experience.position}</p>
                <p className="mt-2 text-gray-600">{experience.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingExperience(experience)}
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteExperience(experience.id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.techstack.map((tech) => (
                <span
                  key={tech.id}
                  className="px-3 py-1 text-sm text-gray-700 bg-white rounded-full"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;