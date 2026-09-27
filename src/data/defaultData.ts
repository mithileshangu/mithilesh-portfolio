// ============================================================================
// Developer Portfolio - Static Default Dataset
// Auto-generated from Admin Portal
// ============================================================================
import { DeveloperProfile, Project, SkillCategory, ExperienceItem, TechItem, PortfolioSettings } from '../types';

export const initialProfile: DeveloperProfile = {
  "name": "Mithilesh A",
  "title": "AI Engineer | Generative AI | Machine Learning | Java Backend Developer",
  "subTitle": "Designing scalable web applications, thoughtful interfaces, and reliable cloud services",
  "location": "India / Remote",
  "availability": "Available for AI Engineering/Backend Java Developer Opportunities",
  "bio": "AI-focused software engineer with experience building backend applications using Java, Spring Boot, REST APIs, and SQL, along with hands-on experience in Machine Learning and Generative AI. I enjoy building practical, reliable systems by combining backend engineering with technologies such as LLMs, RAG, and AI agents.",
  "yearsOfExperience": 1,
  "githubUsername": "mithileshangu",
  "githubUrl": "https://github.com/mithileshangu",
  "linkedinUrl": "https://linkedin.com",
  "email": "mithilesh.angu@gmail.com",
  "websiteUrl": "https://github.com/mithileshangu",
  "avatarUrl": "/src/assets/images/profile_avatar_1787910116265.jpg",
  "stats": {
    "totalProjects": 6,
    "yearsOfExperience": 3,
    "technologiesMastered": 14,
    "productionDeployments": 8,
    "githubStars": 120,
    "pullRequests": 85,
    "contributionsThisYear": 450
  }
};

export const initialProjects: Project[] = [
  {
    "id": "proj-1788875331562",
    "title": "Event Management System",
    "tagline": "Secure Event Management & Booking Platform",
    "category": "Full Stack",
    "description": "A full-stack event management platform that enables users to discover events, register for events, manage bookings, and receive notifications. Administrators can create and manage events, monitor registrations, and manage the overall event workflow through a secure application.",
    "technologies": [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Thymeleaf",
      "Oracle",
      "REST APIs",
      "Maven"
    ],
    "imageUrl": "https://raw.githubusercontent.com/mithileshangu/event-management-system/main/docs/screenshots/Admin.png",
    "featured": true,
    "githubAttachment": {
      "repoName": "event-management-system",
      "repoOwner": "mithileshangu",
      "repoUrl": "https://github.com/mithileshangu/event-management-system",
      "stars": 1,
      "forks": 0,
      "primaryLanguage": "Java",
      "languageColor": "#ED8B00",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    },
    "keyFeatures": [
      "Event Discovery and Registration",
      "Secure Admin and Booking Management"
    ]
  },
  {
    "id": "proj-1788873389429",
    "title": "Farmer Assistant",
    "tagline": "Multilingual AI Assistant for Farmers",
    "category": "AI & Data",
    "description": "A multilingual AI assistant designed to help farmers access practical agricultural information through conversational interaction. The application combines an LLM with selective web search to provide fresh information for time-sensitive questions such as market prices, weather, government schemes, and recent agricultural updates.",
    "technologies": [
      "Python",
      "Generative AI",
      "LLMs",
      "Groq",
      "Streamlit",
      "Web Search",
      "Phidata"
    ],
    "imageUrl": "https://raw.githubusercontent.com/mithileshangu/FarmerAssitant/refs/heads/main/docs/screenshots/history.png",
    "demoUrl": "https://farmer-assistantv1.streamlit.app/",
    "featured": true,
    "githubAttachment": {
      "repoName": "FarmerAssitant",
      "repoOwner": "mithileshangu",
      "repoUrl": "https://github.com/mithileshangu/FarmerAssitant",
      "stars": 1,
      "forks": 0,
      "primaryLanguage": "Python",
      "languageColor": "#3776AB",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    },
    "keyFeatures": [
      "Multilingual AI Conversations",
      "Fresh Agricultural Information through Web Search"
    ]
  },
  {
    "id": "proj-1788269494686",
    "title": "mithilesh-portfolio",
    "tagline": "Personal  Engineering Portfolio & Project Showcase",
    "category": "Full Stack",
    "description": "Modern software application",
    "technologies": [
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Vite",
      "Git"
    ],
    "imageUrl": "https://github.com/mithileshangu/mithilesh-portfolio/raw/main/src/assets/images/Home.png",
    "demoUrl": "https://mithilesh-portfolio-lyart.vercel.app/",
    "featured": true,
    "githubAttachment": {
      "repoName": "mithilesh-portfolio",
      "repoOwner": "mithileshangu",
      "repoUrl": "https://github.com/mithileshangu/mithilesh-portfolio",
      "stars": 1,
      "forks": 0,
      "primaryLanguage": "TypeScript",
      "languageColor": "#3178C6",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    },
    "keyFeatures": [
      "Responsive Personal Portfolio"
    ]
  },
  {
    "id": "proj-1788268991843",
    "title": "CineStream",
    "tagline": "Hybrid Movie Recommendation System",
    "category": "Full Stack",
    "description": "A movie recommendation platform that combines collaborative filtering with content-based recommendation techniques. The system analyzes user ratings along with movie genres and metadata to generate personalized recommendations and provide a Netflix-style movie discovery experience.",
    "technologies": [
      "JAVA",
      "Spring Boot",
      "Python",
      "Machine Learning",
      "Collaborative Filtering",
      "Content-Based Filtering",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TMDB API"
    ],
    "imageUrl": "https://raw.githubusercontent.com/mithileshangu/Cinestream/refs/heads/main/docs/screenshots/Home.png",
    "demoUrl": "https://moviestream-frontend.onrender.com/",
    "featured": true,
    "githubAttachment": {
      "repoName": "Cinestream",
      "repoOwner": "mithileshangu",
      "repoUrl": "https://github.com/mithileshangu/Cinestream",
      "stars": 1,
      "forks": 0,
      "primaryLanguage": "JAVA",
      "languageColor": "#ED8B00",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    },
    "keyFeatures": [
      "Hybrid Movie Recommendation",
      "Personalized Recommendations using Ratings and Movie Metadata"
    ]
  },
  {
    "id": "proj-1787983520256",
    "title": "EduNavigator",
    "tagline": "AI-Assisted College Recommendation Platform",
    "category": "Full Stack",
    "description": "An intelligent college counselling platform designed to help students explore and shortlist colleges based on their academic profile, preferences, branches, locations, and available admission information.",
    "technologies": [
      "Python",
      "Flask",
      "Machine Learning",
      "Pandas",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "imageUrl": "https://github.com/mithileshangu/EduNavigator/raw/main/docs/screenshots/Home.png",
    "demoUrl": "https://edunavigator-2v6g.onrender.com/",
    "featured": true,
    "githubAttachment": {
      "repoName": "EduNavigator",
      "repoOwner": "mithileshangu",
      "repoUrl": "https://github.com/mithileshangu/EduNavigator",
      "stars": 1,
      "forks": 0,
      "primaryLanguage": "Python",
      "languageColor": "#3776AB",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    },
    "keyFeatures": [
      "Personalized College Recommendations",
      "College and Branch Filtering"
    ]
  }
];

export const initialTechStack: TechItem[] = [
  {
    "id": "tech-1788860990352",
    "name": "python",
    "category": "Language"
  },
  {
    "id": "tech-1788861128531",
    "name": "Machine Learning",
    "category": "Language"
  },
  {
    "id": "tech-1788861136065",
    "name": "Deep Learning",
    "category": "Language"
  },
  {
    "id": "tech-1788861141904",
    "name": "LLMs",
    "category": "Language"
  },
  {
    "id": "tech-1788861147677",
    "name": "Generative AI",
    "category": "Language"
  },
  {
    "id": "tech-1788861158094",
    "name": "NLP",
    "category": "Language"
  },
  {
    "id": "tech-1788861167092",
    "name": "PyTorch",
    "category": "Language"
  },
  {
    "id": "tech-1788861173397",
    "name": "TensorFlow",
    "category": "Language"
  },
  {
    "id": "tech-1788861180016",
    "name": "Scikit-learn",
    "category": "Language"
  },
  {
    "id": "tech-1788861187477",
    "name": "OpenCV",
    "category": "Language"
  },
  {
    "id": "tech-1788861193439",
    "name": "NumPy",
    "category": "Language"
  },
  {
    "id": "tech-1788861206444",
    "name": "Pandas",
    "category": "Language"
  },
  {
    "id": "tech-1788861212857",
    "name": "FastAPI",
    "category": "Language"
  },
  {
    "id": "tech-1788861218668",
    "name": "Git",
    "category": "Language"
  },
  {
    "id": "tech-1788861226252",
    "name": "Java",
    "category": "Language"
  },
  {
    "id": "tech-1788861232632",
    "name": "Spring Boot",
    "category": "Language"
  },
  {
    "id": "tech-1788861253901",
    "name": "Postman",
    "category": "Language"
  },
  {
    "id": "tech-1788861291538",
    "name": "aws",
    "category": "Language"
  },
  {
    "id": "tech-1790515615997",
    "name": "REST API",
    "category": "Language",
    "logoUrl": "data:image/png;base64,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"
  },
  {
    "id": "tech-1790515658555",
    "name": "JUnit",
    "category": "Language",
    "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvGxc2Fmi0VXCbES7R3q3cGLawOb67oFxJ7wrqW6BQA&s"
  },
  {
    "id": "tech-1790515688134",
    "name": "Spring Data JPA / Hibernate",
    "category": "Language"
  }
];

export const initialSkillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages & Core Runetimes",
    "description": "Modern type-safe languages used across client, server, and systems architecture",
    "icon": "Code2",
    "skills": [
      {
        "name": "TypeScript",
        "level": "Expert",
        "percentage": 95,
        "yearsOfExperience": 5,
        "tags": [
          "React",
          "Node",
          "Strict Types",
          "Generics"
        ]
      },
      {
        "name": "Go (Golang)",
        "level": "Expert",
        "percentage": 90,
        "yearsOfExperience": 4,
        "tags": [
          "Concurrency",
          "gRPC",
          "Microservices",
          "Goroutines"
        ]
      },
      {
        "name": "Python",
        "level": "Advanced",
        "percentage": 88,
        "yearsOfExperience": 5,
        "tags": [
          "FastAPI",
          "Data Pipelines",
          "AsyncIO",
          "NumPy"
        ]
      },
      {
        "name": "JavaScript (ESNext)",
        "level": "Expert",
        "percentage": 95,
        "yearsOfExperience": 6,
        "tags": [
          "V8 Internals",
          "Async/Await",
          "DOM APIs"
        ]
      },
      {
        "name": "Rust",
        "level": "Proficient",
        "percentage": 76,
        "yearsOfExperience": 2,
        "tags": [
          "Ownership",
          "Memory Safety",
          "Tokio",
          "FFI"
        ]
      },
      {
        "name": "SQL",
        "level": "Advanced",
        "percentage": 92,
        "yearsOfExperience": 5,
        "tags": [
          "PostgreSQL",
          "Complex Joins",
          "Query Plans",
          "Indexing"
        ]
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend, APIs & Distributed Systems",
    "description": "Scalable service architectures, communication protocols, and business logic",
    "icon": "Server",
    "skills": [
      {
        "name": "Node.js / Express",
        "level": "Expert",
        "percentage": 94,
        "yearsOfExperience": 5,
        "tags": [
          "Event Loop",
          "Streams",
          "REST",
          "Middleware"
        ]
      },
      {
        "name": "Microservices Architecture",
        "level": "Expert",
        "percentage": 90,
        "yearsOfExperience": 4,
        "tags": [
          "Domain-Driven Design",
          "Service Mesh",
          "CQRS"
        ]
      },
      {
        "name": "gRPC & Protocol Buffers",
        "level": "Advanced",
        "percentage": 86,
        "yearsOfExperience": 3,
        "tags": [
          "HTTP/2",
          "Protobuf v3",
          "Streaming RPC"
        ]
      },
      {
        "name": "GraphQL & Apollo",
        "level": "Advanced",
        "percentage": 84,
        "yearsOfExperience": 3,
        "tags": [
          "Schema Stitching",
          "Resolvers",
          "DataLoaders"
        ]
      },
      {
        "name": "WebSockets & Event-Driven",
        "level": "Expert",
        "percentage": 92,
        "yearsOfExperience": 4,
        "tags": [
          "Pub/Sub",
          "Redis Streams",
          "CRDTs"
        ]
      },
      {
        "name": "Auth & Security (OAuth/JWT/PKCE)",
        "level": "Advanced",
        "percentage": 88,
        "yearsOfExperience": 4,
        "tags": [
          "OIDC",
          "WebAuthn",
          "RBAC",
          "OWASP"
        ]
      }
    ]
  },
  {
    "id": "frontend",
    "title": "Frontend Architecture & UI Engineering",
    "description": "Fast, accessible, and reactive user interfaces built for rich user workflows",
    "icon": "Layout",
    "skills": [
      {
        "name": "React 19 & Next.js",
        "level": "Expert",
        "percentage": 96,
        "yearsOfExperience": 5,
        "tags": [
          "Server Components",
          "Hooks",
          "State Management"
        ]
      },
      {
        "name": "Tailwind CSS",
        "level": "Expert",
        "percentage": 95,
        "yearsOfExperience": 4,
        "tags": [
          "Responsive Design",
          "Design Systems",
          "CSS Variables"
        ]
      },
      {
        "name": "State Management (Zustand / Redux)",
        "level": "Advanced",
        "percentage": 90,
        "yearsOfExperience": 4,
        "tags": [
          "Predictable State",
          "Immer",
          "Selectors"
        ]
      },
      {
        "name": "Performance Optimization",
        "level": "Advanced",
        "percentage": 92,
        "yearsOfExperience": 4,
        "tags": [
          "Core Web Vitals",
          "Code Splitting",
          "Memoization"
        ]
      },
      {
        "name": "Canvas & Real-Time UX",
        "level": "Proficient",
        "percentage": 82,
        "yearsOfExperience": 3,
        "tags": [
          "OffscreenCanvas",
          "Web Workers",
          "Vector Graphics"
        ]
      }
    ]
  },
  {
    "id": "devops",
    "title": "Cloud, DevOps & Infrastructure",
    "description": "Containerization, orchestration, automation, and reliable cloud deployments",
    "icon": "Cloud",
    "skills": [
      {
        "name": "Docker & Containerization",
        "level": "Expert",
        "percentage": 94,
        "yearsOfExperience": 5,
        "tags": [
          "Multi-Stage Builds",
          "Compose",
          "Image Optimization"
        ]
      },
      {
        "name": "Kubernetes (K8s)",
        "level": "Advanced",
        "percentage": 85,
        "yearsOfExperience": 3,
        "tags": [
          "Pods",
          "Services",
          "Ingress",
          "CRDs",
          "Helm"
        ]
      },
      {
        "name": "GitHub Actions & CI/CD",
        "level": "Expert",
        "percentage": 93,
        "yearsOfExperience": 4,
        "tags": [
          "Automated Testing",
          "Release Automation",
          "Artifacts"
        ]
      },
      {
        "name": "AWS & GCP Cloud Services",
        "level": "Advanced",
        "percentage": 88,
        "yearsOfExperience": 4,
        "tags": [
          "EC2/ECS",
          "Cloud Run",
          "S3",
          "IAM",
          "VPC"
        ]
      },
      {
        "name": "Observability & Monitoring",
        "level": "Advanced",
        "percentage": 86,
        "yearsOfExperience": 3,
        "tags": [
          "Prometheus",
          "Grafana",
          "OpenTelemetry"
        ]
      }
    ]
  },
  {
    "id": "databases",
    "title": "Databases & In-Memory Stores",
    "description": "Data modeling, distributed caches, and timeseries storage engines",
    "icon": "Database",
    "skills": [
      {
        "name": "PostgreSQL",
        "level": "Expert",
        "percentage": 94,
        "yearsOfExperience": 5,
        "tags": [
          "ACID",
          "JSONB",
          "Partitioning",
          "Connection Pools"
        ]
      },
      {
        "name": "Redis",
        "level": "Expert",
        "percentage": 92,
        "yearsOfExperience": 4,
        "tags": [
          "In-Memory Caching",
          "Pub/Sub",
          "Transactions",
          "Locks"
        ]
      },
      {
        "name": "Apache Kafka",
        "level": "Advanced",
        "percentage": 82,
        "yearsOfExperience": 3,
        "tags": [
          "Partitioning",
          "Event Sourcing",
          "Consumer Lag"
        ]
      },
      {
        "name": "MongoDB & NoSQL",
        "level": "Advanced",
        "percentage": 86,
        "yearsOfExperience": 4,
        "tags": [
          "Document Model",
          "Aggregation Pipelines",
          "Sharding"
        ]
      }
    ]
  }
];

export const initialExperience: ExperienceItem[] = [
  {
    "id": "exp-1787983846140",
    "role": "Machine Learning Intern",
    "company": "Squad Cube Solutions",
    "location": "Remote",
    "period": "April 2024 – May 2024",
    "type": "Full-time",
    "highlights": [
      "Engineered a content-based filtering recommendation system for scholarships and courses, increasing user engagement by 15% and improving recommendation accuracy.",
      "Conducted in-depth exploratory data analysis and refined large datasets using pandas, achieving a 30% improvement in data quality for analysis, reporting, and model building.",
      "Contributed to the development of a CNN-based fire detection model, enhancing model accuracy by 10% and reducing false positive rates through data cleaning and feature extraction."
    ],
    "technologies": [
      "Machine Learning",
      "AI",
      "Data Analysis"
    ]
  },
  {
    "id": "exp-1787984099153",
    "role": "Programmer Analyst",
    "company": "Cognizant",
    "location": "Bangalore(Hybrid)",
    "period": "July 2025-Present",
    "type": "Full-time",
    "highlights": [
      "Delivered backend enhancements across 6+ Agile sprints using Java, Spring Boot, Spring Data JPA, Hibernate, Oracle PL/SQL, and REST APIs, implementing application features and business workflows.",
      "Analyzed and resolved 20+ change requests and production issues, tracing application behavior across backend, database, and API layers to identify root causes and implement fixes.",
      "Resolved 30+ application defects involving business logic, data processing, database operations, and API workflows, contributing to application stability and reliable production releases.",
      "Implemented end-to-end CRUD workflows using Spring Boot, JPA/Hibernate, and Oracle, covering controller, service, persistence, validation, and database integration layers.",
      "Developed and optimized PL/SQL procedures, functions, and queries for application data retrieval and business logic, working with Oracle database components.",
      "Maintained automated unit-test coverage using JUnit and Mockito and followed Git-based development practices for code changes, reviews, testing, and sprint delivery.",
      "Delivered 95%+ of assigned sprint tasks within planned timelines, collaborating with cross-functional team members to analyze requirements, implement changes, test solutions, and resolve defects"
    ],
    "technologies": [
      "Software Engineering"
    ]
  }
];

export const initialPortfolioSettings: PortfolioSettings = {
  "showTechnicalCompetencies": false,
  "showExperience": true,
  "showAdminButtonInNav": false
};
