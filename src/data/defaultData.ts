// ============================================================================
// Developer Portfolio - Static Default Dataset
// Auto-generated from Admin Portal
// ============================================================================
import { DeveloperProfile, Project, SkillCategory, ExperienceItem, TechItem, PortfolioSettings } from '../types';

export const initialProfile: DeveloperProfile = {
  "name": "Mithilesh A",
  "title": "AI Engineer | Generative AI | Machine Learning",
  "subTitle": "Designing scalable web applications, thoughtful interfaces, and reliable cloud services",
  "location": "India / Remote",
  "availability": "Available for AI Engineering Opportunities",
  "bio": "AI-focused engineer building intelligent systems across machine learning, deep learning, and Generative AI. I enjoy turning AI concepts into practical applications using LLMs, RAG, AI agents, and production-ready backend technologies.",
  "yearsOfExperience": 1,
  "githubUsername": "mithileshangu",
  "githubUrl": "https://github.com/mithileshangu",
  "linkedinUrl": "https://linkedin.com",
  "email": "mithilesh.angu@gmail.com",
  "websiteUrl": "https://github.com/mithileshangu",
  "avatarUrl": "/profile_avatar_1787910116265.jpg",
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
      "Python",
      "Machine Learning",
      "Collaborative Filtering",
      "Content-Based Filtering",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TMDB API",
      "JAVA",
      "Spring Boot"
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
      "primaryLanguage": "Python",
      "languageColor": "#3776AB",
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
    "id": "tech-1788861279670",
    "name": "REST API",
    "category": "Language"
  },
  {
    "id": "tech-1788861291538",
    "name": "aws",
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
      "Learned and built a full-stack web application using Java, Spring Boot, and Thymeleaf for dynamic server-side rendering.",
      "Gained hands-on experience in object-oriented programming by designing and developing features in a real-world project.",
      "Used Git for version control, performed unit testing with JUnit and Mockito, and worked with jQuery and Bootstrap.",
      "Implemented full CRUD operations using Spring Boot controllers and JPA/Hibernate integration to manage application data seamlessly.",
      "Designed and worked with PL/SQL procedures, functions, and queries, integrating them with the backend to handle data retrieval and business logic efficiently.",
      "Worked on Excel data processing and integrated it with REST APIs for smooth data exchange."
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
