export interface Skill {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'database' | 'tool';
  level: string;
  iconName: string;
  color: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  highlights: string[];
  badgeColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  category: string;
  badge?: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  skillsLearned: string[];
  highlight: string;
  image: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Nahid Khatoon",
    heroHeading: "Hi, I'm Nahid Khatoon",
    subtitle: "B.Tech Student | Full Stack Developer | Software Developer",
    introduction:
      "Passionate B.Tech student with an interest in web development and software development. I enjoy building practical and user-friendly applications using modern technologies.",
    phone: "+91 8235920982",
    email: "nahid.khatoon.dev@gmail.com",
    linkedin: "https://linkedin.com/in/nahid-khatoon",
    github: "https://github.com/nahidkhatoon",
    location: "Hyderabad, India / Darbhanga, Bihar",
    avatar: "/nahid-avatar.jpg",
    statusText: "Available for Internships & Full-time Roles",
    metrics: [
      { label: "Diploma CGPA", value: "9.03", sub: "MANUU Darbhanga" },
      { label: "10th Percentage", value: "88.4%", sub: "High School" },
      { label: "Projects Completed", value: "3+", sub: "Web & Software" },
      { label: "SIH Recognition", value: "Finalist", sub: "Rural Tech Innovation" },
    ],
  },

  about: {
    bioParagraph1:
      "I am an enthusiastic Computer Science engineering student currently pursuing my B.Tech degree at Maulana Azad National Urdu University (MANUU), Hyderabad. Having completed my Diploma with a top-ranking 9.03 CGPA, I bring a solid grounding in software engineering fundamentals, database schemas, and object-oriented programming.",
    bioParagraph2:
      "My development journey is driven by curiosity and the thrill of turning ideas into functional, clean, and responsive digital solutions. Whether developing full-scale management software like a College Portal or tackling nationwide connectivity challenges for Smart India Hackathon (SIH), I am committed to writing clean code, designing thoughtful user experiences, and continuously expanding my technical skill set.",
    keyHighlights: [
      {
        title: "Clean & Maintainable Code",
        description: "Adhering to structured programming, modular components, and industry coding standards.",
        icon: "Code",
      },
      {
        title: "Full Stack Aptitude",
        description: "Comfortable navigating from frontend responsive interfaces down to backend SQL databases.",
        icon: "Layers",
      },
      {
        title: "Rapid Problem Solver",
        description: "Strong foundation in C++ and Python data structures paired with competitive hackathon experience.",
        icon: "Cpu",
      },
      {
        title: "Collaborative Mindset",
        description: "Proactive communication, agile mindset, and passion for teamwork demonstrated through hackathons.",
        icon: "Users",
      },
    ],
  },

  skills: [
    {
      name: "HTML",
      category: "frontend",
      level: "Advanced",
      iconName: "FileCode",
      color: "from-orange-500 to-amber-600",
      description: "Semantic HTML5, Web Accessibility (a11y), SEO-friendly structure & DOM optimization.",
    },
    {
      name: "CSS",
      category: "frontend",
      level: "Advanced",
      iconName: "Palette",
      color: "from-blue-500 to-indigo-600",
      description: "Responsive Layouts, Flexbox, CSS Grid, Tailwind CSS, Smooth Animations & Modern UI Styling.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: "Proficient",
      iconName: "Terminal",
      color: "from-yellow-400 to-amber-500",
      description: "Modern ES6+, DOM manipulation, Asynchronous JavaScript (Promises/Async-Await), and Event-driven UI.",
    },
    {
      name: "Python",
      category: "core",
      level: "Proficient",
      iconName: "Code2",
      color: "from-emerald-400 to-teal-600",
      description: "Algorithmic Problem Solving, Scripting, Automation, Backend fundamentals & SIH Hackathon logic.",
    },
    {
      name: "C++",
      category: "core",
      level: "Proficient",
      iconName: "Binary",
      color: "from-sky-500 to-blue-700",
      description: "Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Memory Efficiency.",
    },
    {
      name: "SQL",
      category: "database",
      level: "Proficient",
      iconName: "Database",
      color: "from-purple-500 to-indigo-700",
      description: "Relational Database Design, Complex Queries, Table Normalization, Joins & Transaction integrity.",
    },
    {
      name: "PHP",
      category: "backend",
      level: "Proficient",
      iconName: "Server",
      color: "from-violet-500 to-purple-800",
      description: "Server-side scripting, Backend Web APIs, CRUD logic, Session Management & MySQL integration.",
    },
  ] as Skill[],

  additionalTools: [
    { name: "React.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "VS Code", category: "IDE" },
    { name: "MySQL / phpMyAdmin", category: "Database Tool" },
    { name: "REST APIs", category: "Architecture" },
    { name: "Object Oriented Design", category: "Concept" },
    { name: "Responsive Web Design", category: "UI/UX" },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Maulana Azad National Urdu University (MANUU)",
      location: "Hyderabad, Telangana",
      scoreLabel: "Current Status",
      scoreValue: "Pursuing Undergrad",
      period: "Present",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      highlights: [
        "Advanced studies in Data Structures & Algorithms, Operating Systems, and Software Engineering",
        "Engaged in university technical hackathons, SIH teams, and hands-on laboratory projects",
        "Focused on full-stack application development and scalable software practices",
      ],
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "MANUU Polytechnic",
      location: "Darbhanga, Bihar",
      scoreLabel: "Academic Score",
      scoreValue: "CGPA: 9.03 / 10.0",
      period: "Completed",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      highlights: [
        "Secured outstanding academic honors with a 9.03 cumulative grade point average",
        "Comprehensive training in C++, Object-Oriented Programming, Database Systems, and Web Basics",
        "Developed final year technical capstones and earned faculty merit commendations",
      ],
    },
    {
      degree: "Secondary School Certificate (10th Standard)",
      institution: "R N M Govt Girls +2 School",
      location: "Laheriasarai, Darbhanga, Bihar",
      scoreLabel: "Academic Score",
      scoreValue: "Percentage: 88.4%",
      period: "Completed",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      highlights: [
        "Achieved 88.4% with First Class Distinction across core subjects",
        "Demonstrated strong mathematical aptitude, analytical aptitude, and discipline",
        "Served as active student leader in school science exhibitions and cultural activities",
      ],
    },
  ] as EducationItem[],

  projects: [
    {
      id: "college-mgmt",
      title: "College Management System",
      shortDescription:
        "A centralized web portal to streamline student data, faculty course allocations, automated attendance tracking, and semester grading.",
      fullDescription:
        "The College Management System is a comprehensive web application designed to solve academic administrative overhead. It unifies faculty grading, student enrollment catalogs, and real-time attendance calculation into an intuitive responsive dashboard. Featuring secure session authentication, role-based interfaces for admins and students, and dynamic SQL queries for automated transcript and attendance summaries.",
      technologies: ["PHP", "SQL", "JavaScript", "HTML5", "CSS3"],
      image: "/project-college.jpg",
      category: "Full Stack Web Application",
      badge: "Academic Capstone",
      features: [
        "Role-Based Access: Dedicated portals for Administrators, Faculty, and Students",
        "Student & Course Catalog: Instant registration, course scheduling, and section enrollment",
        "Automated Attendance Tracker: Real-time calculation with warning thresholds for low attendance",
        "Gradebook Engine: Fast entry of exam marks with instant GPA and grade breakdown calculation",
        "Relational Database: Clean MySQL schema ensuring referential integrity across student records",
      ],
      githubUrl: "https://github.com/nahidkhatoon/college-management-system",
      liveUrl: "#",
    },
    {
      id: "restaurant-mgmt",
      title: "Restaurant Management System",
      shortDescription:
        "An interactive dining management and point-of-sale solution with digital table mapping, menu ordering, and automated invoice calculation.",
      fullDescription:
        "Designed to optimize turnaround times in dining establishments, this Restaurant Management System bridges table management, kitchen orders, and customer billing. It features a digital floor layout showing live table statuses (occupied, available, reserved), an interactive food menu catalog with instant search, and a robust billing engine that computes taxes, discounts, and prints clear itemized receipts.",
      technologies: ["Python", "PHP", "SQL", "JavaScript", "CSS3"],
      image: "/project-restaurant.jpg",
      category: "POS & Management Software",
      badge: "Operations Software",
      features: [
        "Visual Table Layout: Real-time color-coded indicators for vacant, occupied, and reserved tables",
        "Interactive Digital Menu: Categorized menu browsing (Starters, Mains, Desserts, Beverages)",
        "Order Processing Pipeline: Direct line from customer table order to kitchen status",
        "Automated Billing & Invoice: Automatic calculation of subtotal, applicable taxes, and receipt generation",
        "Sales Records: Historical SQL transaction storage for end-of-day revenue analytics",
      ],
      githubUrl: "https://github.com/nahidkhatoon/restaurant-management-system",
      liveUrl: "#",
    },
    {
      id: "sih-rural-network",
      title: "Rural Area Network & Language Barrier – SIH Project",
      shortDescription:
        "An innovative Smart India Hackathon solution addressing connectivity gaps and regional linguistic barriers through offline-first caching and localized UI.",
      fullDescription:
        "Engineered as a high-impact prototype for the prestigious Smart India Hackathon (SIH), this initiative addresses two critical obstacles to digital empowerment in remote regions: intermittent network coverage and regional language divides. The solution leverages low-bandwidth local caching, offline sync mechanisms, and an intuitive iconographic interface offering seamless regional localization in Urdu, Hindi, and English.",
      technologies: ["Python", "Web Technologies", "Offline Sync", "Multilingual APIs", "HTML5", "CSS3"],
      image: "/project-sih.jpg",
      category: "Smart India Hackathon (SIH)",
      badge: "National Hackathon Finalist",
      features: [
        "Offline-First Architecture: Service caching enabling access to essential resources without constant connectivity",
        "Multilingual Localization: Seamless dual-interface support across Hindi, Urdu, and English",
        "Low-Bandwidth Optimized: Lightweight web payloads engineered for unstable 2G/3G rural networks",
        "Voice & Visual Guidance: Integrated audio cues and visual iconography for non-tech-savvy users",
        "SIH National Problem Statement: Built following rigorous hackathon criteria addressing government digital access challenges",
      ],
      githubUrl: "https://github.com/nahidkhatoon/sih-rural-network-project",
      liveUrl: "#",
    },
  ] as ProjectItem[],

  certificates: [
    {
      id: "digitalpreneur-training",
      title: "Certificate of Trainings",
      issuer: "Digitalpreneur Private Limited",
      year: "July 03, 2025",
      badge: "Training Certificate",
      description:
        "Certificate of training completion awarded to Nahid Khatoon by Digitalpreneur Private Limited.",
      skillsLearned: [
        "Professional Training",
        "Skill Development",
        "Learning & Growth",
      ],
      highlight: "Training Completion",
      image: "/certificates/digitalpreneur.png",
    },

    {
      id: "sih-participation-2026",
      title: "Smart India Hackathon 2026 – Certificate of Participation",
      issuer:
        "Department of Computer Science & Information Technology, School of Technology, MANUU",
      year: "September 24, 2026",
      badge: "SIH 2026",
      description:
        "Certificate of participation in Internal Smart India Hackathon 2026.",
      skillsLearned: [
        "Innovation",
        "Problem Solving",
        "Teamwork",
        "Technical Development",
      ],
      highlight: "Certificate of Participation",
      image: "/certificates/sih-participation.png",
    },

    {
      id: "sih-appreciation-2026",
      title: "Smart India Hackathon 2026 – Certificate of Appreciation",
      issuer:
        "Department of Computer Science & Information Technology, School of Technology, MANUU",
      year: "September 24, 2026",
      badge: "SIH 2026",
      description:
        "Certificate of appreciation for volunteering and contributing with dedication, teamwork and valuable support during Internal Smart India Hackathon 2026.",
      skillsLearned: [
        "Teamwork",
        "Volunteering",
        "Collaboration",
        "Event Support",
      ],
      highlight: "Volunteer Appreciation",
      image: "/certificates/sih-appreciation.png",
    },

    {
      id: "startup-india-recognition",
      title: "Startup India – Certificate of Recognition",
      issuer:
        "Department for Promotion of Industry and Internal Trade, Government of India",
      year: "January 18, 2024",
      badge: "Additional Recognition",
      description:
        "Certificate of Recognition issued to CORIZO EDUTECH PRIVATE LIMITED as a recognized startup.",
      skillsLearned: [
        "Startup Recognition",
        "Entrepreneurship",
        "Innovation",
      ],
      highlight: "Organization Recognition",
      image: "/certificates/startup-india.png",
    },
  ] as CertificateItem[],

  contact: {
    fullName: "Nahid Khatoon",
    phone: "+91 8235920982",
    email: "nahid.khatoon.dev@gmail.com",
    linkedin: "https://linkedin.com/in/nahid-khatoon",
    github: "https://github.com/nahidkhatoon",
    location: "MANUU Hyderabad Campus, Telangana / Darbhanga, Bihar",
    availability: "Immediate / Summer Internships & Software Developer Roles",
    officeHours: "Monday – Saturday (9:00 AM – 7:00 PM IST)",
  },
};
