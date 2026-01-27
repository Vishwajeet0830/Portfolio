import React from 'react';
import { experiences, education } from '../data/mock';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const ExperienceCard = ({ exp, darkMode }) => {
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
        <div>
          <h3
            className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {exp.role}
          </h3>
          <p
            className={`text-base font-medium ${
              darkMode ? 'text-coral-400' : 'text-coral-600'
            }`}
            style={{ color: '#f47272' }}
          >
            {exp.company}
          </p>
        </div>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            exp.type === 'Full-time'
              ? darkMode
                ? 'bg-blue-900/50 text-blue-300'
                : 'bg-blue-100 text-blue-700'
              : darkMode
              ? 'bg-green-900/50 text-green-300'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {exp.type}
        </span>
      </div>

      {/* Meta */}
      <div className={`flex flex-wrap gap-4 mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          <span>{exp.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{exp.period}</span>
        </div>
      </div>

      {/* Description */}
      <ul className={`space-y-2 mb-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {exp.description.map((item, index) => (
          <li key={index} className="text-sm leading-relaxed flex items-start gap-2">
            <span className="text-coral-500 mt-1.5" style={{ color: '#f47272' }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill, index) => (
          <span
            key={index}
            className={`px-2.5 py-1 text-xs font-medium rounded-md ${
              darkMode
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const EducationCard = ({ edu, darkMode }) => {
  return (
    <div
      className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}
        >
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {edu.degree}
          </h3>
          <p
            className={`text-base font-medium mb-2`}
            style={{ color: '#f47272' }}
          >
            {edu.institution}
          </p>
          <div className={`flex flex-wrap gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{edu.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{edu.period}</span>
            </div>
            {edu.gpa && (
              <div className="flex items-center gap-1.5">
                <span className="font-medium">GPA: {edu.gpa}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Briefcase className="w-6 h-6" />
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Work Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} darkMode={darkMode} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
