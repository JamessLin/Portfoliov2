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
      date: "Sep 2024 - Jun 2027",
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
      title: "Peerfo",
      date: "Apr 2025 - Present",
      description:
        "Peerfo.com is an AI-driven interview preparation platform featuring peer-to-peer mode with resume-based question recommendations, you-vs-AI with a simulated recruiter, and you-vs-friend with link sharing. It includes AI feedback and resume check tools.",
      image: "",
      video: "/peerfo.mkv",
      technologies: [
        "TypeScript", "SQL", "Express.js", "React", "Node.js", "Supabase", "Tailwind CSS", "Git"
      ],
      link: "https://github.com/JamessLin/peerfo",
      website: "",
    },
    {
      title: "Weiqi.com",
      date: "Dec 2024 - Mar 2025",
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

  ],
};
