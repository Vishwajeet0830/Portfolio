import React from 'react';
import { certifications } from '../data/mock';
import { Award } from 'lucide-react';

const CertificationCard = ({ cert, darkMode }) => {
  return (
    <div
      className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
            darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
          }`}
        >
          {cert.icon ? (
            <img src={cert.icon} alt={cert.issuer} className="w-8 h-8" />
          ) : (
            <Award className={`w-7 h-7 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold mb-1 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {cert.name}
          </h3>
          <p
            className={`text-sm font-medium`}
            style={{ color: '#f47272' }}
          >
            {cert.issuer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Certifications = ({ darkMode }) => {
  return (
    <section
      id="certifications"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Award className="w-6 h-6" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
