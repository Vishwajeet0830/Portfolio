import React from 'react';
import { projects, projectsIntro } from '../data/mock';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div
      className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}
        >
          <Folder className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Type Badge */}
      <div className="mb-3">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            project.type === 'Work'
              ? darkMode
                ? 'bg-blue-900/50 text-blue-300'
                : 'bg-blue-100 text-blue-700'
              : project.type === 'Freelancer'
              ? darkMode
                ? 'bg-green-900/50 text-green-300'
                : 'bg-green-100 text-green-700'
              : darkMode
              ? 'bg-purple-900/50 text-purple-300'
              : 'bg-purple-100 text-purple-700'
          }`}
        >
          {project.type}
        </span>
        {project.inProgress && (
          <span className="ml-2 px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
            In Progress
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-semibold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-5 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2.5 py-1 text-xs font-medium rounded-md ${
              darkMode
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-800/30' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base lg:text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {projectsIntro}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
