import React from 'react';
import { projects, projectsIntro } from '../data/mock';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, darkMode, featured = false }) => {
  return (
    <div
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      } ${featured ? 'lg:col-span-1' : ''}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.inProgress && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-500/90 text-white">
              In Progress
            </span>
          )}
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.type === 'Work'
                ? 'bg-blue-500/90 text-white'
                : project.type === 'Freelancer'
                ? 'bg-green-500/90 text-white'
                : 'bg-purple-500/90 text-white'
            }`}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
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
    </div>
  );
};

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
