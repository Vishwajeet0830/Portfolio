import React from 'react';
import { services, servicesIntro } from '../data/mock';
import { Code, Server, Wrench, FlaskConical, Globe, Router, Asterisk, Brain, Database, Cloud, BarChart3, Search } from 'lucide-react';

const iconMap = {
  Code: Code,
  Server: Server,
  Wrench: Wrench,
  Flask: FlaskConical,
  Globe: Globe,
  Router: Router,
  Brain: Brain,
  Database: Database,
  Cloud: Cloud,
  BarChart3: BarChart3,
  Search: Search,
};

const ServiceCard = ({ service, darkMode }) => {
  const IconComponent = iconMap[service.icon] || Code;

  return (
    <div
      className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
          darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'
        }`}
      >
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-semibold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-5 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {service.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {service.skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-1.5 text-xs ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {skill.icon ? (
              <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
            ) : (
              <Asterisk className="w-3 h-3" />
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = ({ darkMode }) => {
  return (
    <section
      id="about"
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
            Services & Skills
          </h2>
          <p
            className={`max-w-3xl mx-auto text-base lg:text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {servicesIntro}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
