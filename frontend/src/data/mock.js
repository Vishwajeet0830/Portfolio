// Portfolio data for Vishwajeet Niradi

export const personalInfo = {
  name: "Vishwajeet Niradi",
  greeting: "Hi! I'm",
  title: "AI Engineer",
  subtitle: "AI Engineer with expertise in building intelligent systems, RAG pipelines, and data-driven solutions",
  email: "vniradi08@gmail.com",
  phone: "+1 862-409-0121",
  location: "New York, NY",
  github: "Vishwajeet0830",
  linkedin: "vishwajeet-niradi-844979194",
  linkedinUrl: "https://www.linkedin.com/in/vishwajeet-niradi-844979194/",
  githubUrl: "https://github.com/Vishwajeet0830"
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
    title: "SQLGenPro - Text-to-SQL LLM Application",
    description: "A productivity tool that converts natural language queries into optimized SQL commands using LLMs. Built for Product Managers, Business Stakeholders, and developers to democratize data access.",
    image: null,
    link: null,
    githubLink: "https://github.com/Vishwajeet0830/SQLGenPro",
    type: "Project",
    tags: ["Python", "LangChain", "OpenAI GPT-4", "Streamlit", "AWS", "Databricks"],
    details: {
      heroDescription: "A groundbreaking Text-to-SQL application that leverages Large Language Models to convert natural language queries into optimized SQL commands. Built to democratize data access for non-technical users while accelerating query development for experienced programmers.",
      duration: null,
      role: null,
      projectType: null,
      overview: "SQLGenPro is a Streamlit-based web application that bridges the gap between natural language and SQL databases. By leveraging OpenAI's GPT-4 model through LangChain framework, it enables users to interact with complex databases using plain English queries. The system automatically generates optimized SQL, validates the syntax, executes queries on connected databases (Databricks/Snowflake), and presents results in an intuitive interface.",
      industryChallenge: "Organizations rely heavily on data but face a significant bottleneck in extracting meaningful insights due to the need for SQL expertise. Writing SQL queries is challenging for professionals without technical backgrounds (business analysts, product managers, executives), and even experienced coders find writing complex SQL queries time-consuming. This dependency on specialized teams delays decision-making and hampers productivity, especially in critical business situations.",
      architectureDescription: "The system follows a modular architecture with clear separation of concerns. User queries are processed through LangChain's prompt engineering pipeline, sent to GPT-4 for SQL generation, validated and optimized, then executed against the target database. Results are formatted and displayed with options to save queries to favorites or export data.",
      architectureFlow: [
        "User Input (Natural Language)",
        "LangChain Processing",
        "Prompt Engineering",
        "OpenAI GPT-4 API",
        "SQL Generation",
        "Validation & Optimization",
        "Database Execution",
        "Results Display"
      ],
      techStack: [
        { name: "Python 3.10", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "LangChain", category: "LLM Framework", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
        { name: "OpenAI GPT-4", category: "LLM Model", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
        { name: "Streamlit", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
        { name: "AWS EC2", category: "Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Databricks", category: "Data Platform", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
        { name: "SQLAlchemy", category: "ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" },
        { name: "Pandas", category: "Data Processing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NumPy", category: "Computation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" }
      ],
      keyFeatures: [
        "Natural Language to SQL conversion using GPT-4 with context-aware understanding",
        "Support for complex queries including CTEs, JOINs, subqueries, and window functions",
        "Quick Analysis mode for instant insights on common business questions",
        "Deep Dive Analysis for comprehensive data exploration",
        "Favorites section for saving and reusing frequent queries",
        "User authentication with secure session management",
        "SQL validation and optimization before execution",
        "Self-correction feedback loop for improved accuracy over time",
        "Dynamic ERD diagram generation using LLMs",
        "Secure HTTPS deployment on AWS EC2 with scalability"
      ],
      metrics: [
        { value: "40%", label: "Faster Query Development" },
        { value: "95%", label: "SQL Accuracy Rate" },
        { value: "500+", label: "Query Types Supported" },
        { value: "1", label: "Database Platform" }
      ],
      architectureImage: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/gmvewr60_Gemini_Generated_Image_deuvfrdeuvfrdeuv.png",
      screenshots: [
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/hcqhmqnd_Screenshot%202026-03-07%20at%204.48.34%E2%80%AFPM.jpeg", caption: "Main Dashboard - Database connection with Quick Analysis, Favorites, and Deep-Dive Analysis sections" },
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/7br7j1e6_Screenshot%202026-03-07%20at%204.48.39%E2%80%AFPM.jpeg", caption: "ERD Diagram - Auto-generated Entity Relationship Diagram for selected schema" },
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/e4d05tmt_Screenshot%202026-03-07%20at%204.49.11%E2%80%AFPM.jpeg", caption: "Quick Analysis - Pre-built analysis questions for instant insights" },
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/85tcc9y4_Screenshot%202026-03-07%20at%205.24.10%E2%80%AFPM.jpeg", caption: "Favorites Section - Save and reuse frequently used queries with generated SQL" },
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/pbrod2m0_Image%203-7-26%20at%205.28%E2%80%AFPM.jpeg", caption: "Favorites - View saved questions with auto-generated SQL queries" },
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/3281lnlw_Screenshot%202026-03-07%20at%204.49.14%E2%80%AFPM.jpeg", caption: "SQL Generation - Complex SQL query generated from natural language question" }
      ]
    }
  },
  {
    id: 2,
    title: "Enterprise Capital Optimization Dashboard",
    description: "Built interactive Tableau dashboards analyzing accounts receivable and accounts payable data to monitor working capital performance. Generated insights that support cash flow planning and financial decision-making by identifying payment delays and credit utilization patterns.",
    image: null,
    link: null,
    githubLink: null,
    type: "Project",
    tags: ["Tableau", "MySQL", "Data Analytics", "Financial Analysis"],
    details: {
      heroDescription: "A comprehensive data analysis solution using Tableau to optimize working capital management. The dashboards provide real-time visibility into accounts receivable and payable, enabling businesses to improve cash flow, reduce borrowing costs, and maintain financial stability.",
      duration: null,
      role: null,
      projectType: null,
      overview: "This project focuses on working capital optimization through comprehensive analysis of receivables and payables data using Tableau. By visualizing key financial metrics and trends, the solution helps organizations refine cash flow strategies, improve financial performance, and make data-driven decisions for better liquidity management.",
      industryChallenge: "Organizations struggle with efficient management of short-term assets and liabilities to ensure sufficient liquidity for operations while minimizing costs. Key challenges include optimizing inventory levels, speeding up accounts receivable collection, and effectively managing accounts payable timing. Poor working capital management leads to cash flow issues, increased borrowing costs, and financial instability.",
      architectureDescription: "The solution leverages MySQL as the data source, connected to Tableau for advanced visualization and dashboard development. The architecture enables real-time data analysis and interactive reporting for financial stakeholders.",
      architectureFlow: [
        "MySQL Database",
        "Data Connection",
        "Tableau Desktop",
        "Data Transformation",
        "Dashboard Creation",
        "Insights & Reporting"
      ],
      techStack: [
        { name: "Tableau", category: "Visualization", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
        { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "SQL", category: "Query Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
      ],
      keyFeatures: [
        "Accounts Receivable Dashboard with payment tracking, aging analysis, and credit limit monitoring",
        "Accounts Payable Dashboard with invoice status, overdue payments, and late fee analysis",
        "Real-time visualization of key financial metrics and trends",
        "Cash flow analysis with payment date vs due date comparisons",
        "Credit utilization patterns and customer payment behavior insights",
        "Supplier payment cycle analysis and vendor performance tracking",
        "Interactive filters for date ranges, regions, and customer segments",
        "Currency conversion support for multi-currency transactions",
        "Actionable insights for stakeholders to optimize working capital"
      ],
      metrics: [
        { value: "2", label: "Interactive Dashboards" },
        { value: "15+", label: "Key Metrics Tracked" },
        { value: "Real-time", label: "Data Refresh" },
        { value: "Multi", label: "Currency Support" }
      ],
      architectureImage: null,
      dashboardImages: [
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/k6kafftn_Image%203-10-26%20at%2010.45%E2%80%AFPM.jpeg", caption: "Account Receivable Dashboard - Track total receivables, open amounts, payment status, and customer aging analysis" },
        { url: "https://customer-assets.emergentagent.com/job_portfolio-clone-87/artifacts/rk4gadde_Image%203-10-26%20at%2010.50%E2%80%AFPM.jpeg", caption: "Account Payable Dashboard - Monitor total payables, invoice amounts, late payment fees, and supplier analysis" }
      ],
      screenshots: [],
      sectionType: "dashboard"
    }
  }
];

export const contactLinks = [
  {
    id: 1,
    name: "Phone",
    handle: "+1 862-409-0121",
    url: "tel:+18624090121",
    icon: "Phone"
  },
  {
    id: 2,
    name: "LinkedIn",
    handle: "vishwajeet-niradi",
    url: "https://www.linkedin.com/in/vishwajeet-niradi-844979194/",
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

export const certifications = [
  {
    id: 1,
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
  },
  {
    id: 2,
    name: "Oracle Cloud Infrastructure Certified Generative AI Professional",
    issuer: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
  },
  {
    id: 3,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  }
];

export const servicesIntro = "I specialize in building AI-powered solutions, data pipelines, and analytics dashboards. From enterprise chatbots to cloud-native applications, I deliver scalable and intelligent systems.";

export const projectsIntro = "Explore some of my recent work. Includes enterprise AI solutions, data analytics dashboards, and personal projects.";

export const contactIntro = "Have a project idea or interested in collaborating? Let's connect and build something amazing together.";
