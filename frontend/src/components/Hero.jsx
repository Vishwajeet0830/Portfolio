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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none">
        <div className="relative">
          {/* Outer circle */}
          <div
            className="absolute rounded-full animate-pulse"
            style={{
              width: '700px',
              height: '700px',
              background: darkMode
                ? 'radial-gradient(circle, rgba(244, 114, 114, 0.15) 0%, rgba(244, 114, 114, 0.05) 100%)'
                : 'rgba(252, 182, 182, 0.5)',
              top: '-350px',
              left: '-350px',
            }}
          />
          {/* Middle circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: '500px',
              height: '500px',
              background: darkMode
                ? 'radial-gradient(circle, rgba(244, 114, 114, 0.25) 0%, rgba(244, 114, 114, 0.1) 100%)'
                : 'rgba(249, 150, 150, 0.6)',
              top: '-250px',
              left: '-250px',
            }}
          />
          {/* Inner circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: '300px',
              height: '300px',
              background: darkMode
                ? 'radial-gradient(circle, rgba(244, 114, 114, 0.4) 0%, rgba(244, 114, 114, 0.2) 100%)'
                : 'rgba(244, 114, 114, 0.7)',
              top: '-150px',
              left: '-150px',
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
