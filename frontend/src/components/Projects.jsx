import React from 'react';
import { projects, projectsIntro } from '../data/mock';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectDetailModal = ({ project, darkMode, onClose }) => {
  if (!project || !project.details) return null;

  const { details } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg z-10 transition-colors ${
            darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className={`p-8 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Brain className="w-7 h-7" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  project.type === 'Work'
                    ? darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                    : darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  {project.type}
                </span>
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Problem Statement */}
          <section>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <Layers className="w-4 h-4 text-white" />
              </div>
              Problem Statement
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {details.problemStatement}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              Solution
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {details.solution}
            </p>
          </section>

          {/* Architecture */}
          <section>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <Server className="w-4 h-4 text-white" />
              </div>
              Architecture & Flow
            </h3>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                {details.architectureFlow.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'} shadow-sm`}>
                      {step}
                    </div>
                    {index < details.architectureFlow.length - 1 && (
                      <ArrowRight className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <Code className="w-4 h-4 text-white" />
              </div>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {details.techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  {tech.icon ? (
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  ) : (
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <Code className="w-3 h-3" />
                    </div>
                  )}
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tech.name}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <Database className="w-4 h-4 text-white" />
              </div>
              Key Features
            </h3>
            <ul className="space-y-2">
              {details.keyFeatures.map((feature, index) => (
                <li key={index} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* GitHub Link */}
          {project.githubLink && (
            <div className="pt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-white text-gray-900 hover:bg-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                }`}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, darkMode, onClick }) => {
  const hasDetails = project.details;
  
  return (
    <div
      className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        hasDetails ? 'cursor-pointer' : ''
      } ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      }`}
      onClick={() => hasDetails && onClick(project)}
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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
      <div className="mb-3 flex items-center gap-2">
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
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            darkMode ? 'bg-amber-900/50 text-amber-300' : 'bg-amber-100 text-amber-700'
          }`}>
            In Progress
          </span>
        )}
        {hasDetails && (
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
          }`}>
            Click for details
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

const Projects = ({ darkMode, onProjectSelect }) => {
  const handleProjectClick = (project) => {
    if (project.details) {
      onProjectSelect(project);
    }
  };

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
            <ProjectCard 
              key={project.id} 
              project={project} 
              darkMode={darkMode} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
