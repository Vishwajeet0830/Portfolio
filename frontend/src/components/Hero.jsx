import React from 'react';
import { personalInfo } from '../data/mock';
import { ExternalLink, Mail } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative" style={{ marginTop: '-5%' }}>
          {/* Outer circle - largest */}
          <div
            className="rounded-full transition-all duration-1000"
            style={{
              width: '680px',
              height: '680px',
              background: darkMode
                ? 'rgba(244, 114, 114, 0.12)'
                : 'rgba(252, 190, 190, 0.55)',
            }}
          />
          {/* Middle circle */}
          <div
            className="absolute rounded-full transition-all duration-1000"
            style={{
              width: '480px',
              height: '480px',
              background: darkMode
                ? 'rgba(244, 114, 114, 0.2)'
                : 'rgba(248, 158, 158, 0.65)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Inner circle - smallest */}
          <div
            className="absolute rounded-full transition-all duration-1000"
            style={{
              width: '280px',
              height: '280px',
              background: darkMode
                ? 'rgba(244, 114, 114, 0.35)'
                : 'rgba(244, 114, 114, 0.7)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {personalInfo.greeting} {personalInfo.name}
        </h1>
        <p
          className={`text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('#projects')}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
              darkMode
                ? 'border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600'
                : 'border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400'
            }`}
          >
            Projects
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
              darkMode
                ? 'border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600'
                : 'border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400'
            }`}
          >
            Contact
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
