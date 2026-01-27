// Portfolio data for Vishwajeet Niradi

export const personalInfo = {
  name: "Vishwajeet Niradi",
  greeting: "Hi! I'm",
  title: "AI Engineer",
  subtitle: "AI Engineer with expertise in building intelligent systems, RAG pipelines, and data-driven solutions",
  email: "vniradi08@gmail.com",
  phone: "+1 862-409-0121",
  location: "New York, NY",
  github: "vishwajeet-niradi",
  linkedin: "vishwajeet-niradi",
  linkedinUrl: "https://www.linkedin.com/in/vishwajeet-niradi",
  githubUrl: "https://github.com/vishwajeet-niradi"
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
    icon: "Brain",
    title: "AI & LLM Development",
    description: "Building intelligent chatbots, RAG pipelines, and AI agents using cutting-edge frameworks for enterprise solutions.",
    skills: [
      { name: "LangChain", icon: null },
      { name: "LangGraph", icon: null },
      { name: "RAG", icon: null },
      { name: "Prompt Engineering", icon: null },
      { name: "Fine Tuning", icon: null },
      { name: "Crew AI", icon: null },
      { name: "MCP", icon: null }
    ]
  },
  {
    id: 2,
    icon: "Cloud",
    title: "Cloud Solutions",
    description: "Deploying scalable cloud-native services on Azure and AWS with secure secret management and monitoring.",
    skills: [
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Azure OpenAI", icon: null },
      { name: "Key Vault", icon: null },
      { name: "Log Analytics", icon: null }
    ]
  },
  {
    id: 3,
    icon: "BarChart3",
    title: "Data Analytics & BI",
    description: "Creating insightful dashboards and reports using Power BI and Tableau for data-driven decision making.",
    skills: [
      { name: "Power BI", icon: null },
      { name: "Tableau", icon: null },
      { name: "Excel", icon: null },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" }
    ]
  },
  {
    id: 4,
    icon: "Code",
    title: "Programming & Development",
    description: "Building robust backend workflows, web scrapers, and automation scripts for various applications.",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "BeautifulSoup", icon: null }
    ]
  },
  {
    id: 5,
    icon: "Search",
    title: "Search & Retrieval",
    description: "Implementing hybrid search pipelines with vector embeddings and text indices for accurate information retrieval.",
    skills: [
      { name: "Cognitive Search", icon: null },
      { name: "VoyageAI", icon: null },
      { name: "Vector DB", icon: null },
      { name: "Embeddings", icon: null },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    company: "FIS",
    location: "New York City, NY",
    role: "AI / Data Engineer",
    period: "Jun 2025 - Present",
    type: "Full-time",
    description: [
      "Supporting an AI-powered chatbot initiative for Treasury & Risk division, focusing on prompt engineering, RAG pipelines, and response optimization",
      "Building backend workflows leveraging Azure SDK and cloud-native services including Key Vault and Log Analytics",
      "Implementing agentic frameworks (LangChain, LangGraph) integrated with Azure OpenAI, Cognitive Search, and Cosmos DB"
    ],
    skills: ["LangChain", "LangGraph", "Azure OpenAI", "RAG", "Python", "Cosmos DB"]
  },
  {
    id: 2,
    company: "Sphara Consulting",
    location: "Greenwich, CT",
    role: "Data Analyst Intern",
    period: "Jul 2024 - Dec 2024",
    type: "Internship",
    description: [
      "Increased speed and performance of Excel reports by 40% by restructuring them in Power BI",
      "Developed web scraper scripts using Python (BeautifulSoup, Selenium) and stored data in SQL database",
      "Established automation on 5+ websites as per client's requirements"
    ],
    skills: ["Power BI", "Python", "SQL", "Selenium", "Web Scraping"]
  },
  {
    id: 3,
    company: "Accenture",
    location: "Bangalore, India",
    role: "Data Analyst",
    period: "Aug 2021 - Jul 2023",
    type: "Full-time",
    description: [
      "Developed Marketing and Product performance dashboards using Power BI and SQL, yielding 20% increase in data-driven insights",
      "Communicated complex analysis to non-technical stakeholders, improving performance by 25% in agile environment",
      "Designed HR dashboard tracking KPIs for 800+ profiles as part of client recruitment initiative"
    ],
    skills: ["Power BI", "SQL", "Data Analysis", "Dashboard Development", "Agile"]
  }
];

export const education = [
  {
    id: 1,
    institution: "Montclair State University",
    location: "New Jersey",
    degree: "Master of Science in Data Science",
    gpa: "4.0",
    period: "Aug 2023 - Jun 2025"
  },
  {
    id: 2,
    institution: "SDM College of Engineering & Technology",
    location: "Karnataka, India",
    degree: "Bachelor of Technology in Computer Science",
    gpa: null,
    period: "Sept 2017 - Jul 2021"
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Chatbot for Treasury Knowledge Management",
    description: "Engineered an enterprise-grade RAG-based assistant to streamline access to internal treasury and risk documents. Deployed agentic frameworks for multi-step reasoning, enabling autonomous retrieval, interpretation, and summarization of business insights.",
    image: null,
    link: null,
    type: "Work",
    tags: ["RAG", "LangChain", "Azure OpenAI", "Cosmos DB", "Log Analytics"]
  },
  {
    id: 2,
    title: "RAG-Based Assistant for Supply Chain Insights",
    description: "Developed a domain-specific agent leveraging RAG and MongoDB to answer natural language queries on contracts, inventory, and shipment data. Designed hybrid search pipeline with VoyageAI embeddings for accurate retrieval.",
    image: null,
    link: null,
    type: "Personal",
    tags: ["RAG", "MongoDB", "VoyageAI", "NLP", "Python"]
  },
  {
    id: 3,
    title: "Marketing & Product Performance Dashboard",
    description: "Built comprehensive Power BI dashboards for UK's largest Oil and Gas corporations, yielding 20% increase in data-driven insights for marketing and product teams.",
    image: null,
    link: null,
    type: "Work",
    tags: ["Power BI", "SQL", "Data Analytics", "Dashboard", "KPIs"]
  },
  {
    id: 4,
    title: "HR Recruitment Analytics Dashboard",
    description: "Designed an HR dashboard to track recruitment KPIs including candidates interviewed, selected, accepted offers, and joined - managing data for 800+ profiles.",
    image: null,
    link: null,
    type: "Work",
    tags: ["Power BI", "HR Analytics", "KPI Tracking", "Data Visualization"]
  }
];

export const contactLinks = [
  {
    id: 1,
    name: "GitHub",
    handle: "vishwajeet-niradi",
    url: "https://github.com/vishwajeet-niradi",
    icon: "Github"
  },
  {
    id: 2,
    name: "LinkedIn",
    handle: "vishwajeet-niradi",
    url: "https://www.linkedin.com/in/vishwajeet-niradi",
    icon: "Linkedin"
  },
  {
    id: 3,
    name: "Email",
    handle: "vniradi08@gmail.com",
    url: "mailto:vniradi08@gmail.com",
    icon: "Mail"
  }
];

export const servicesIntro = "I specialize in building AI-powered solutions, data pipelines, and analytics dashboards. From enterprise chatbots to cloud-native applications, I deliver scalable and intelligent systems.";

export const projectsIntro = "Explore some of my recent work. Includes enterprise AI solutions, data analytics dashboards, and personal projects.";

export const contactIntro = "Have a project idea or interested in collaborating? Let's connect and build something amazing together.";
