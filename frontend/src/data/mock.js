// Portfolio data for Vishwajeet Niradi

export const personalInfo = {
  name: "Vishwajeet Niradi",
  greeting: "Hi! I'm",
  title: "AI / ML Engineer",
  subtitle: "AI Engineer specializing in LLM applications, RAG pipelines, production-grade AI workflows and data-driven solutions",
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
    role: "AI Engineer",
    period: "Jul 2025 – Feb 2026",
    type: "Full-time",
    description: [
      "Developed LLM-powered conversational AI solutions for the Treasury & Risk division using Azure OpenAI, improving response accuracy through prompt engineering and RAG pipelines",
      "Designed retrieval-augmented generation (RAG) architectures integrating Azure Cognitive Search and Cosmos DB for secure enterprise knowledge retrieval",
      "Developed scalable AI backend services on Microsoft Azure, leveraging Azure SDK, Azure Key Vault for secure secrets management, and Log Analytics for system monitoring",
      "Enhanced chatbot performance and reliability by refining prompt strategies, improving RAG retrieval pipelines, and implementing automated model evaluation workflows"
    ],
    skills: ["Azure OpenAI", "RAG", "LangChain", "Cosmos DB", "Azure Cognitive Search", "Python"]
  },
  {
    id: 2,
    company: "Sphara Consulting",
    location: "Piscataway, NJ",
    role: "AI / ML Engineer",
    period: "Jul 2024 - May 2025",
    type: "Full-time",
    description: [
      "Developed and deployed machine learning models using Python to support predictive analytics and enterprise decision-making",
      "Built scalable data pipelines and feature engineering workflows using Python and SQL to process large-scale structured and unstructured datasets",
      "Designed and implemented LLM-powered applications and Retrieval-Augmented Generation (RAG) pipelines to enhance enterprise search and knowledge retrieval systems",
      "Trained and optimized machine learning models using TensorFlow, PyTorch, and Scikit-learn, improving prediction accuracy and reducing inference latency"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "RAG", "SQL", "Machine Learning"]
  },
  {
    id: 3,
    company: "Accenture",
    location: "Bangalore, India",
    role: "Data Analyst",
    period: "Aug 2021 - Jul 2023",
    type: "Full-time",
    description: [
      "Developed marketing and product performance dashboards using Power BI and SQL, increasing data-driven insights for a major UK Oil & Gas client",
      "Improved reporting efficiency by migrating Excel reports to Power BI, increasing performance by 40%",
      "Delivered data analysis and insights to business stakeholders, supporting decision-making and improving operational performance",
      "Designed an HR analytics dashboard to track recruitment KPIs across 800+ candidates including interview status, offers, and onboarding metrics"
    ],
    skills: ["Power BI", "SQL", "Data Analysis", "Dashboard Development", "Excel"]
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
    title: "Customer Support Agent using OpenAI and AzureML",
    description: "Built an AI-powered customer support system using LLMs and Azure ML that automates ticket categorization, sentiment analysis, and response generation using RAG architecture with FAISS vector database.",
    image: null,
    link: null,
    githubLink: null,
    type: "Project",
    tags: ["GPT-4", "FAISS", "LangChain", "RAG", "Azure ML", "Streamlit"],
    details: {
      heroDescription: "An enterprise-grade customer support solution that leverages Large Language Models and Azure Machine Learning to automate ticket handling, sentiment analysis, and response generation using Retrieval-Augmented Generation (RAG) architecture.",
      duration: null,
      role: null,
      projectType: null,
      overview: "This project revolutionizes the customer support process by developing a system that uses LLMs for sentiment analysis, ticket categorization, and response generation. The solution ensures critical issues are prioritized and handled promptly while Azure ML provides the infrastructure for deploying, scaling, and managing AI models efficiently.",
      industryChallenge: "Traditional customer support systems face significant challenges with efficiently managing large influx of tickets, leading to delayed responses, misprioritization, inconsistent quality in customer service, and inability to scale. This results in increased operational costs and customer dissatisfaction, along with high costs associated with manual ticket handling.",
      architectureDescription: "The project utilizes a Retrieval-Augmented Generation (RAG) architecture combining retrieval-based and generation-based approaches. LLMs create embeddings from text data stored in FAISS vector database for efficient similarity search. The system retrieves relevant information based on queries and generates contextually appropriate responses.",
      architectureFlow: [
        "Customer Query",
        "OpenAI Embeddings",
        "FAISS Vector Search",
        "Context Retrieval",
        "GPT-4 Generation",
        "Response Output"
      ],
      techStack: [
        { name: "Python 3.10", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "GPT-4", category: "LLM", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
        { name: "FAISS", category: "Vector DB", icon: null },
        { name: "LangChain", category: "Framework", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
        { name: "Azure ML", category: "Cloud Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
        { name: "Streamlit", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
        { name: "Azure Blob", category: "Storage", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
        { name: "Pandas", category: "Data", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" }
      ],
      keyFeatures: [
        "Automated ticket categorization by urgency and subject matter using LLMs",
        "Sentiment analysis on customer support tickets for priority handling",
        "RAG-based response generation combining retrieval and generation approaches",
        "FAISS vector database for efficient similarity search and retrieval",
        "Response sampling mechanism to generate multiple candidates and select the best",
        "Feedback loop for continuous prompt improvement and response quality",
        "Modular code architecture for easy integration and maintenance",
        "Streamlit UI for showcasing AI assistant capabilities",
        "Scalable deployment on Azure ML with Azure App Service",
        "Cost-optimized API and compute resource management"
      ],
      metrics: [
        { value: "RAG", label: "Architecture" },
        { value: "GPT-4", label: "LLM Model" },
        { value: "FAISS", label: "Vector Store" },
        { value: "Azure", label: "Cloud Platform" }
      ],
      architectureImage: null,
      screenshots: []
    }
  },
  {
    id: 2,
    title: "Multi-Agent AI Productivity Assistant with AutoGen",
    description: "Built a multi-agent AI system using AutoGen framework that integrates Gmail, Google Calendar, weather forecasting, and web search into a unified conversational interface with Slack integration.",
    image: null,
    link: null,
    githubLink: null,
    type: "Project",
    tags: ["GPT-4o", "AutoGen", "FastAPI", "Tavily", "Slack", "Multi-Agent"],
    details: {
      heroDescription: "A production-grade multi-agent AI productivity assistant built with AutoGen framework, featuring specialized agents for email, calendar, weather, and web search. Integrated with Slack for seamless conversational automation of daily workflows.",
      duration: null,
      role: null,
      projectType: null,
      overview: "This project creates a centralized, intelligent automation layer to manage daily workflows efficiently. The multi-agent system integrates diverse services (Gmail, Google Calendar, weather forecasting, web search) into a cohesive interface, replacing manual effort and context-switching with smart, conversational automation.",
      industryChallenge: "Modern digital life involves using numerous tools (emails, calendars, weather apps, web browsers) which leads to fragmented workflows, wasted time, and decreased focus. The core issue is the lack of a unified system that can intelligently coordinate and automate tasks across these diverse tools.",
      architectureDescription: "The system uses a collaborative network of specialized AI agents orchestrated by AutoGen framework. Each agent handles specific tasks (email, calendar, weather, search) and communicates through MagenticOneGroupChat for intelligent coordination. FastAPI server handles real-time messaging with Slack integration.",
      architectureFlow: [
        "User Request (Slack)",
        "FastAPI Server",
        "AutoGen Orchestrator",
        "Specialized Agents",
        "API Integrations",
        "Response to User"
      ],
      techStack: [
        { name: "Python 3.12", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "GPT-4o", category: "LLM", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
        { name: "AutoGen", category: "Agent Framework", icon: null },
        { name: "FastAPI", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Slack SDK", category: "Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" },
        { name: "Tavily", category: "Search API", icon: null },
        { name: "Gmail API", category: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
        { name: "Calendar API", category: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }
      ],
      keyFeatures: [
        "Specialized agents for Email, Calendar, Weather, and Search functionalities",
        "MagenticOneGroupChat for intelligent agent coordination and task routing",
        "Gmail API integration with LangChain toolkit for email operations",
        "Google Calendar API for scheduling and event management",
        "Tavily Search API for web search and research capabilities",
        "OpenWeatherMap integration for meteorological data",
        "Conversational interface with natural language understanding",
        "Slack integration for familiar chat-like user experience",
        "FastAPI-based server for real-time messaging and webhook handling",
        "Context-aware conversation handling with agent selection logic"
      ],
      metrics: [
        { value: "4+", label: "Specialized Agents" },
        { value: "AutoGen", label: "Framework" },
        { value: "Real-time", label: "Messaging" },
        { value: "Slack", label: "Integration" }
      ],
      architectureImage: null,
      screenshots: []
    }
  },
  {
    id: 3,
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
    id: 4,
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
