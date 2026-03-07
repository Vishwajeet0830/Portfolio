import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Briefcase, CheckCircle, Zap, Code, Server, Brain, Layers, Target, Monitor } from 'lucide-react';

const ProjectDetail = ({ project, darkMode, onBack }) => {
  if (!project || !project.details) return null;
  const { details } = project;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Back Button */}
      <div className="fixed top-20 left-6 z-40">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            darkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className={`pt-32 pb-16 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="hover:underline cursor-pointer" onClick={onBack}>Projects</span>
            <span>/</span>
            <span style={{ color: '#f47272' }}>{project.title}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.type === 'Work'
                ? darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                : darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'
            }`}>
              {project.type}
            </span>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'
            }`}>
              AI/LLM
            </span>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              darkMode ? 'bg-amber-900/50 text-amber-300' : 'bg-amber-100 text-amber-700'
            }`}>
              Full Stack
            </span>
          </div>

          {/* Title */}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h1>

          {/* Description */}
          <p className={`text-lg leading-relaxed mb-8 max-w-3xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {details.heroDescription || project.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            {details.duration && (
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Calendar className="w-5 h-5" />
                <span>{details.duration}</span>
              </div>
            )}
            {details.role && (
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <User className="w-5 h-5" />
                <span>{details.role}</span>
              </div>
            )}
            {details.projectType && (
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Briefcase className="w-5 h-5" />
                <span>{details.projectType}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-white text-gray-900 hover:bg-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                }`}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
                  darkMode
                    ? 'border-gray-600 text-white hover:bg-gray-800'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 1. Project Overview */}
      <section className={`py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`flex items-center gap-3 text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
              <Layers className="w-5 h-5 text-white" />
            </div>
            Project Overview
          </h2>
          <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {details.overview}
          </p>

          {/* Industry Challenge */}
          {details.industryChallenge && (
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Industry Challenge
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {details.industryChallenge}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 2. System Architecture */}
      <section className={`py-16 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`flex items-center gap-3 text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
              <Server className="w-5 h-5 text-white" />
            </div>
            System Architecture
          </h2>
          
          {details.architectureDescription && (
            <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {details.architectureDescription}
            </p>
          )}

          {/* Architecture Image */}
          {details.architectureImage && (
            <div className={`rounded-xl overflow-hidden border mb-8 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <img
                src={details.architectureImage}
                alt="System Architecture"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Architecture Flow */}
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Data Flow
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {details.architectureFlow.map((step, index) => (
                <React.Fragment key={index}>
                  <div className={`px-4 py-3 rounded-lg text-center ${
                    darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-700'
                  } shadow-sm border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {index < details.architectureFlow.length - 1 && (
                    <div className={`text-2xl ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Application Demo */}
      {details.screenshots && details.screenshots.length > 0 && (
        <section className={`py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`flex items-center gap-3 text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <Monitor className="w-5 h-5 text-white" />
              </div>
              Application Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption || `Screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                  {screenshot.caption && (
                    <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {screenshot.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Key Features */}
      <section className={`py-16 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`flex items-center gap-3 text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 shrink-0" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack */}
      <section className={`py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`flex items-center gap-3 text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
              <Code className="w-5 h-5 text-white" />
            </div>
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {details.techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                {tech.icon ? (
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                ) : (
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <Code className="w-5 h-5" />
                  </div>
                )}
                <div className="text-center">
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tech.name}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      {details.metrics && (
        <section className={`py-16 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className={`flex items-center gap-3 text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#f47272' }}>
                <Target className="w-5 h-5 text-white" />
              </div>
              Performance Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {details.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <p className="text-3xl font-bold mb-2" style={{ color: '#f47272' }}>{metric.value}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className={`py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
              darkMode
                ? 'bg-white text-gray-900 hover:bg-gray-200'
                : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
