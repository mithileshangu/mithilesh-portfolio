// ============================================================================
// Developer Portfolio - Static Default Dataset
// Auto-generated from Admin Portal
// ============================================================================
import { DeveloperProfile, Project, SkillCategory, ExperienceItem, TechItem, PortfolioSettings } from '../types';

export const initialProfile: DeveloperProfile = {
  "name": "Mithilesh A",
  "title": "Full Stack Software Engineer",
  "subTitle": "Designing scalable web applications, thoughtful interfaces, and reliable cloud services",
  "location": "India / Remote",
  "availability": "Available for opportunities & collaborations",
  "bio": "Software engineer focused on building clean, high-performance web applications and distributed architectures. Passionate about minimal design, intuitive user experiences, and robust engineering standards.",
  "yearsOfExperience": 1,
  "githubUsername": "mithileshangu",
  "githubUrl": "https://github.com/mithileshangu",
  "linkedinUrl": "https://www.linkedin.com/in/mithilesh-a-/",
  "email": "mithilesh.angu@gmail.com",
  "websiteUrl": "https://github.com/mithileshangu",
  "avatarUrl": "profile_avatar_1787910116265.jpg",
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
    "id": "proj-1788269494686",
    "title": "mithilesh-portfolio",
    "tagline": "Educational & Software Engineering Platform",
    "category": "Full Stack",
    "description": "Modern software application",
    "technologies": [
      "TypeScript"
    ],
    "imageUrl": "https://camo.githubusercontent.com/e83bd2c6d4d83ff71cf31961eb2b592a48053b1f9a2cd965810f9a57e319bb1f/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313535353036363933312d3433363564313462616238633f713d383026773d31323030266175746f3d666f726d6174266669743d63726f70",
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
    }
  },
  {
    "id": "proj-1788269326976",
    "title": "event-management-system",
    "tagline": "Educational & Software Engineering Platform",
    "category": "Full Stack",
    "description": "Modern software application",
    "technologies": [
      "JAVA",
      "Spring Boot",
      "Oracle Plsql",
      "REST Api's"
    ],
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJO71000fzDkL7Izl2IoC1g76xQZD_iLsumrgnNIWxA&s=10",
    "featured": true,
    "githubAttachment": {
      "repoName": "event-management-system",
      "repoOwner": "itsmib",
      "repoUrl": "https://github.com/itsmib/event-management-system",
      "stars": 1,
      "forks": 0,
      "primaryLanguage": "JAVA",
      "languageColor": "#ED8B00",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    }
  },
  {
    "id": "proj-1788268991843",
    "title": "Cinestream",
    "tagline": "CineStream movie browser with a hybrid MovieLens recommender",
    "category": "Full Stack",
    "description": "It combines:\n\nCollaborative filtering using real MovieLens user ratings\nContent-based filtering using movie genres and user tags\nTMDB for poster, backdrop, and overview data",
    "technologies": [
      "Java",
      "SpringBoot",
      "JavaScript",
      "python",
      "Machine Learning"
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
      "primaryLanguage": "Java",
      "languageColor": "#ED8B00",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    }
  },
  {
    "id": "proj-1787983520256",
    "title": "EduNavigator",
    "tagline": "🎓 TNEA college recommendation system built with Flask to help students find colleges based on cutoff, course, branch, city, fees, and college type.",
    "category": "Full Stack",
    "description": "🎓 TNEA college recommendation system built with Flask to help students find colleges based on cutoff, course, branch, city, fees, and college type.",
    "technologies": [
      "python",
      "flask",
      "machine learning"
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
      "primaryLanguage": "python",
      "languageColor": "#3776AB",
      "defaultBranch": "main",
      "lastCommitDate": "Recently"
    }
  }
];

export const initialTechStack: TechItem[] = [
  {
    "id": "tech-1787984191424",
    "name": "Java",
    "category": "Language"
  },
  {
    "id": "tech-1787984195367",
    "name": "python",
    "category": "Language"
  },
  {
    "id": "tech-1787984207488",
    "name": "Spring boot",
    "category": "Language"
  },
  {
    "id": "tech-1787984235837",
    "name": "RESTful APIs",
    "category": "Language"
  },
  {
    "id": "tech-1787984275497",
    "name": "Thymeleaf",
    "category": "Language"
  },
  {
    "id": "tech-1787984280595",
    "name": "HTML5",
    "category": "Language"
  },
  {
    "id": "tech-1787984285476",
    "name": "CSS3",
    "category": "Language"
  },
  {
    "id": "tech-1787984290395",
    "name": "Bootstrap",
    "category": "Language"
  },
  {
    "id": "tech-1787984301993",
    "name": "Oracle PL/SQL",
    "category": "Language"
  },
  {
    "id": "tech-1787984328488",
    "name": "mysql",
    "category": "Database"
  },
  {
    "id": "tech-1787984350821",
    "name": "aws",
    "category": "Cloud"
  },
  {
    "id": "tech-1787984387621",
    "name": "Tensorflow",
    "category": "Framework"
  },
  {
    "id": "tech-1787984396953",
    "name": "PyTorch",
    "category": "Framework"
  },
  {
    "id": "tech-1787984404343",
    "name": "OpenCV",
    "category": "Framework"
  },
  {
    "id": "tech-1787984411382",
    "name": "NLTK",
    "category": "Framework"
  },
  {
    "id": "tech-1787984421347",
    "name": "NumPy",
    "category": "Framework"
  },
  {
    "id": "tech-1787984429531",
    "name": "Pandas",
    "category": "Framework"
  },
  {
    "id": "tech-1787984437390",
    "name": "Matplotlib",
    "category": "Framework"
  },
  {
    "id": "tech-1787984446358",
    "name": "Git",
    "category": "Tool"
  },
  {
    "id": "tech-1787984463207",
    "name": "Postman",
    "category": "Tool"
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
    "period": "Apr 2024 – May 2024",
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
    "period": "2025-Present",
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
