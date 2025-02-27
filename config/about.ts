export type AboutConfig = typeof aboutConfig;
export const aboutConfig = {
  skills: [
    "Python",
    "C/C++",
    "Java",
    "TypeScript/JavaScript",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Next.js",
    "React Native",
    "Spring Boot",
    "Django",
    "Flask",
    "FastAPI",
    "gRPC",
    "Redis",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "WebSocket",
    "Firebase",
    "Bazel",
    "Jira",
    "Git",
    "Docker",
    "AWS / GCP",
    "CI/CD",
    "Linux",
    "Testing / Unit Testing",
    "Agile Development",
    "Problem Solving",
  ],

  workExperiences: [
    {
      title: "CS Research Assistant",
      company: "Union College",
      date: "Nov 2024 -  Present",
      icon: "/union.jpg",
      location: "Schenectady, NY",
    },
    {
      title: "Technical Intern",
      company: "Aivres Systems",
      date: "Jun 2024 - Aug 2024",
      icon: "/aivres.jpg",
      location: "San Francisco Bay Area, CA",
    },
    {
      title: "Software Engineering Intern",
      company: "Bank of Saipan",
      date: "May 2023 - Aug 2024",
      icon: "/bos.png",
      location: "Saipan, MP",
    },
  ],

  education: [
    {
      title: "Bachelor of Science in Computer Science",
      school: "Union College",
      date: "Sep 2024 - Jun 2028",
      icon: "/union.jpg",
      location: "Schenectady, NY",
    },
    {
      title: "High School Diploma",
      school: "Marianas High School",
      date: "Aug 2020 - May 2024",
      icon: "/mhs.png",
      location: "Saipan, MP",
    },
  ],

  projects: [
    {
      title: "Weiqi.com",
      date: "Dec 2024 - Present",
      description:
        "Weiqi.com is an online Go platform (also known as Weiqi or Baduk) delivering a seamless experience for all skill levels, featuring real-time multiplayer, AI integration, and game analysis.",
      image:
        "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?q=80&w=2787&auto=format&fit=crop",
      video: "/weiqi.mp4",
      technologies: [
        "TypeScript",
        "Java",
        "Spring Boot",
        "WebSocket",
        "Docker",
        "Redis",
        "Tailwind CSS",
        "PostgreSQL",
        "OAuth",
        "JWT",
        "Figma",
        "Next.js",
      ],
      link: "https://github.com/BinaryRuns/weiqi.com",
      website: "",
    },
    {
      title: "BudgetAI",
      date: "Feb 2024 - Present",
      description:
        "empower individuals to achieve financial wellness through intelligent, personalized guidance. By leveraging AI-driven insights, the app simplifies complex financial decisions, automates budgeting, and proactively identifies opportunities to save, invest, and reduce debt—all while keeping the technology invisible and user-centric.",
      image: "BudgetAi.png",
      video: "/Budget.mp4",
      technologies: [
        "Python",
        "Fast API",
        "Next.js",
        "Typescript",
        "Figma",
        "PostgreSQL",
        "Docker",
        "Redis",
        "WebSocket",
        "Plaid API",
      ],
      link: "https://github.com/BinaryRuns/BudgetPilot",
      website: "",
    },
  ],
};
