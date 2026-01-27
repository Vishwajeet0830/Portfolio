// Mock data for portfolio website

export const personalInfo = {
  name: "Luiz Gustavo Alves",
  greeting: "Hi! I'm",
  title: "Software Developer",
  subtitle: "Software Developer with experience in creating scalable and modern applications",
  email: "contact@luizgustavoalves.dev",
  github: "luiz-gustavo-alves",
  linkedin: "luiz-gustavo-alves-dev",
  linkedinUrl: "https://www.linkedin.com/in/luiz-gustavo-alves-dev/?locale=en_US",
  githubUrl: "https://github.com/luiz-gustavo-alves"
};

export const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" }
];

export const services = [
  {
    id: 1,
    icon: "Code",
    title: "Frontend Development",
    description: "Building complete, modern and responsive user interfaces for all types of devices.",
    skills: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Shadcn", icon: null },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ]
  },
  {
    id: 2,
    icon: "Server",
    title: "Backend Development",
    description: "Creating secure, scalable and high performance servers, building APIs, database integrations, microservices, Cron-Jobs, Artificial Intelligence (AI).",
    skills: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    id: 3,
    icon: "Wrench",
    title: "Maintenance & Monitoring",
    description: "Bug fixes, tech support, application performance monitoring and development of new features that satisfy costumer needs.",
    skills: [
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" }
    ]
  },
  {
    id: 4,
    icon: "Flask",
    title: "Software Testing",
    description: "End to End & Unit Tests, building high rate requests scenarios (Stress Tests).",
    skills: [
      { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
      { name: "K6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg" },
      { name: "Cypress", icon: null },
      { name: "Supertest", icon: null },
      { name: "Faker", icon: null }
    ]
  },
  {
    id: 5,
    icon: "Globe",
    title: "Performance & Digital Presence",
    description: "Optimizing websites for speed and search engines visibility, SEO, marketing campaigns and leads capture.",
    skills: [
      { name: "Google Tag Manager", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      { name: "Google Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      { name: "Facebook Pixel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" },
      { name: "SEO", icon: null },
      { name: "Lighthouse", icon: null }
    ]
  },
  {
    id: 6,
    icon: "Router",
    title: "Web Hosting",
    description: "Hosting webistes, domain and subdomain configurations, creating business email.",
    skills: [
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
      { name: "HostGator", icon: null },
      { name: "Email", icon: null }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "CFMOTO Brazil | MotorSync",
    description: "Website for CFMOTO Brazil to showcase their Off-Road vehicles and dealers websites. I created the following user interfaces: HomePage, Type of Products, Product Categories, Product Page, Accessories Page, About Us, Tech Assist and Contact Page.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=60",
    link: "https://cfmoto.com.br/",
    type: "Work",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Shadcn", "NestJS", "Prisma"]
  },
  {
    id: 2,
    title: "Lawyer Website",
    description: "A professional, visually appealing and responsive lawyer website for all devices. Designed to optimize digital presence and showcase their services. Includes office, services, advocacy team, address and contact pages.",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&auto=format&fit=crop&q=60",
    link: "https://catarinaaraujoadvocacia.adv.br/",
    type: "Freelancer",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Shadcn", "Vercel"]
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Portfolio built with Next.js, Typescript, Tailwind and reusable UI components that can be used across the entire application. Includes animations, features such as: internationalization (i18n) for English and Portuguese languages, dark mode and quick access menu for mobile devices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    link: "https://luizgustavoalves.dev/",
    githubLink: "https://github.com/luiz-gustavo-alves/portfolio",
    type: "Personal",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Shadcn", "i18n", "Vercel"]
  },
  {
    id: 4,
    title: "College Dorms Search Engine",
    description: "Website to help students find nearby colleges using search components based on colleges, cities, and states that have nearby dorms. Includes features for customized search filters such as: distance, price, category (male, female, mixed dorms), and lifestyle habits.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
    link: null,
    type: "Personal",
    inProgress: true,
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Shadcn", "NestJS", "Prisma"]
  }
];

export const contactLinks = [
  {
    id: 1,
    name: "GitHub",
    handle: "luiz-gustavo-alves",
    url: "https://github.com/luiz-gustavo-alves",
    icon: "Github"
  },
  {
    id: 2,
    name: "LinkedIn",
    handle: "luiz-gustavo-alves-dev",
    url: "https://www.linkedin.com/in/luiz-gustavo-alves-dev/?locale=en_US",
    icon: "Linkedin"
  },
  {
    id: 3,
    name: "Email",
    handle: "contact@luizgustavoalves.dev",
    url: "mailto:contact@luizgustavoalves.dev",
    icon: "Mail"
  }
];

export const servicesIntro = "I offer services to create and provide maintenance for websites, optimize digital presence of your business and host your website with business email and custom domains";

export const projectsIntro = "Explore some of my recent work. Includes work projects, freelancer and personal projects.";

export const contactIntro = "Have a project idea or interested in my services? Contact me through these communication channels";
