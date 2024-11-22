"use client"
import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Github, Link as LinkIcon } from 'lucide-react';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      techstack: [
        { id: '1', name: 'React' },
        { id: '2', name: 'Node.js' },
        { id: '3', name: 'MongoDB' }
      ],
      github: 'https://github.com/example/project',
      link: 'https://example.com'
    }
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const handleAddProject = () => {
    setIsAddingProject(true);
    setEditingProject({
      id: Date.now().toString(),
      name: '',
      description: '',
      techstack: [],
    });
  };

  const handleSaveProject = (project) => {
    if (projects.find(p => p.id === project.id)) {
      setProjects(projects.map(p => p.id === project.id ? project : p));
    } else {
      setProjects([...projects, project]);
    }
    setEditingProject(null);
    setIsAddingProject(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
        <button
          onClick={handleAddProject}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {editingProject && (
        <div className="p-6 mb-6 rounded-lg bg-gray-50">
          <h3 className="mb-4 text-lg font-medium">
            {isAddingProject ? 'Add New Project' : 'Edit Project'}
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Project Name"
              value={editingProject.name}
              onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Project Description"
              value={editingProject.description}
              onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={editingProject.github}
              onChange={(e) => setEditingProject({ ...editingProject, github: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Live Project URL"
              value={editingProject.link}
              onChange={(e) => setEditingProject({ ...editingProject, link: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingProject(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveProject(editingProject)}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-lg bg-gray-50"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                <p className="mt-1 text-gray-600">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProject(project)}
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techstack.map((tech) => (
                <span
                  key={tech.id}
                  className="px-3 py-1 text-sm text-gray-700 bg-white rounded-full"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;