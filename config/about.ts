export type AboutConfig = typeof aboutConfig;
export const aboutConfig = {
    skills : [
        "Python", "Java", "React", "Vue.js", "TypeScript/JavaScript", "C/C++", "AWS/GCP",
        "Docker", "Spring Boot", "MongoDB", "MySQL", "Redis", "Git", "Unit Testing",
        ".NET Core", "CI/CD", "WebSocket"
    ],
      
    workExperiences: [
        {
            title: "CS Research Assistant",
            company: "Union College",
            date: "Nov. 2024 -  Present",
            icon: "/union.jpg"
        },
        {
            title: "Technical Intern",
            company: "Aivres Systems",
            date: "Jun. 2024 - Aug. 2024",
            icon: "/aivres.jpg"
        },
        {
            title: "Software Engineering Intern",
            company: "Bank of Saipan",
            date: "May 2023 - Aug. 2024",
            icon: "/bos.png"
        },
    ],
    
    education : [
        {
            title: "Bachelor of Science in Computer Science",
            school: "Union College",
            date: "Sep. 2024 - June 2028",
            icon:"/union.jpg"
        },
        {
            title: "High School Diploma",
            school: "Marianas High School",
            date: "Aug. 2020 - May 2024",
            icon:"/mhs.png"
        }
    ],
    
    
    
    projects : [
    {
        title: "Weiqi.com",
        date: "Dec 2024 - Present",
        description:
        "Weiqi.com is an online Go platform (also known as Weiqi or Baduk) delivering a seamless experience for all skill levels, featuring real-time multiplayer, AI integration, and game analysis.",
        image:
        "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?q=80&w=2787&auto=format&fit=crop",
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
        "LangChain"
        ],
        link: "https://github.com/BinaryRuns/weiqi.com",
        website: "",
    },
    {
        title: "BudgetAI",
        date: "Dec 2024 - Present",
        description:
        "empower individuals to achieve financial wellness through intelligent, personalized guidance. By leveraging AI-driven insights, the app simplifies complex financial decisions, automates budgeting, and proactively identifies opportunities to save, invest, and reduce debt—all while keeping the technology invisible and user-centric.",
        image:
        "BudgetAi.png",
        technologies: [
        "Python",
        "Fast API",
        "Next.js",
        "Typescript",
        "Figma",
        "LLM",
        "LangChain",
        "PostgreSQL",
        "Docker",
        "Redis",
        "WebSocket",
        "Plaid API",
        ],
        link: "https://github.com/BinaryRuns/BudgetPilot",
        website: "",
        
    },
    ]   
};
