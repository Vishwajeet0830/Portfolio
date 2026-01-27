import React from 'react';
import { contactLinks, contactIntro } from '../data/mock';
import { Github, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
};

const ContactCard = ({ contact, darkMode }) => {
  const IconComponent = iconMap[contact.icon] || Mail;

  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/50'
      }`}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
          darkMode
            ? 'bg-gray-700/50 text-gray-300 group-hover:bg-gray-700'
            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
        }`}
      >
        <IconComponent className="w-7 h-7" />
      </div>

      {/* Name */}
      <h3
        className={`text-lg font-semibold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {contact.name}
      </h3>

      {/* Handle */}
      <p
        className={`text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        {contact.handle}
      </p>
    </a>
  );
};

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-800/30' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Contact
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base lg:text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {contactIntro}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((contact) => (
            <ContactCard key={contact.id} contact={contact} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
