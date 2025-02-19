"use client";

import { Badge, Card, Button, Snippet } from "@heroui/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { aboutConfig } from "@/config/about";
import { GithubIcon } from "@/components/icons";




export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              hi, I&apos;m <span className="text-primary">James Lin</span>
            </h1>
            <p className="text-lg mb-6">
              a CS student at Union College, excited about how AI and tech will shape our future.
            </p>
            <div className="flex gap-2">
              <Button variant="solid" className="flex items-center">
                <Link href="mailto:your.email@example.com" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </Button>
              <Button variant="solid" className="flex items-center">
                <Link href="/resume.pdf" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>

          <div 
            className="relative w-32 h-32 md:w-48 md:h-48" 
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="w-full h-full relative cursor-pointer"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ 
                transformStyle: "preserve-3d",
                width: "100%",
                height: "100%"
              }}
            >
              {/* Front side */}
              <div 
                className="absolute w-full h-full rounded-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Avatar src="/avatar.png" className="w-full h-full" />
              </div>

              {/* Back side */}
              <div 
                className="absolute w-full h-full rounded-full"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Avatar src="/me.jpg" className="w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className=" text-muted-foreground">
            I&apos;ve worked on full-stack applications, real-time systems, and AI-powered tools that
            streamline processes and solve complex challenges. I thrive on transferring intricate
            problems into elegant solutions, and I&apos;m excited about leveraging my skills to shape a smarter,
            more connected future. I&apos;m always eager to explore emerging technologies and push the
            boundaries of what&apos;s possible in the tech world.
          </p>
        </section>


        {/* Work Experience Section */}
        <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>

          {aboutConfig.workExperiences.map((experience) => (
            <div key = {experience.date} className="justify-between mb-4">
              <div key={experience.date} className="flex items-center gap-2">
                {/* Icon Circle Container */}
                <div className="relative flex shrink-0 overflow-hidden rounded-full border size-12 bg-muted-background dark:bg-foreground">
                  {experience.icon && 
                    <img
                      src={experience.icon}
                      alt={experience.company}
                      className="aspect-square h-full w-full object-contain"
                    />
                  }
                </div>

                {/* Content */}
                <div className="flex-1 ">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{experience.company}</h3>
                    <span className="text-md text-muted-foreground">
                      {experience.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {experience.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
  
        </section>

        
        {/* Education Section */}
        <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Education</h2>

          {aboutConfig.education.map((school) => (
            <div key = {school.date} className="justify-between mb-4">
              
              <div key={school.date} className="flex items-center gap-2">
                <div className="relative flex shrink-0 overflow-hidden rounded-full border size-12 bg-muted-background dark:bg-foreground">
                  {school.icon && 
                    <img
                      src={school.icon}
                      alt={school.school}
                      className="aspect-square h-full w-full object-contain"
                    />
                  }
                </div>

                {/* Content */}
                <div className="flex-1 ">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{school.school}</h3>
                    <span className="text-md text-muted-foreground">
                      {school.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {school.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
  
        </section>



        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {aboutConfig.skills.map((skill) => (
              <Snippet hideSymbol hideCopyButton key={skill} color="default">
                {skill}
              </Snippet>
            ))}
          </div>
        </section>



      {/* Projects Section */}

      <section id="projects" className="mb-16">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full px-4 py-1 text-sm font-medium bg-primary text-primary-foreground">
            My Projects
          </span>
          <h2 className="text-primary text-4xl md:text-5xl font-bold mt-4">
            Check out my latest work
          </h2>
          <p className="text-muted-foreground mt-2">
            I&apos;ve worked on a variety of projects. Here are a few of my favorites.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {aboutConfig.projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group flex flex-col">
            <a href={project.link} className="block">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </a>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-2">
                <div className="flex justify-between items-start ">
                  <a href={project.link} className="block">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </a>
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2 ">
                  {project.technologies.map((tech) => (
                    <Snippet
                      hideSymbol
                      hideCopyButton
                      key={tech}
                      color="default"
                      className="text-xs text-primary bg-secondary bg-opacity-10 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </Snippet>
                  ))}
                </div>
              </div>
           
              <div className="mt-auto flex gap-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-secondary flex items-center px-2 py-1 text-xs rounded-md hover:bg-gray-800 transition-colors"
                >
                  <GithubIcon className="mr-1" /> Source Code
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white flex items-center px-2 py-1 text-xs rounded-md hover:bg-gray-800 transition-colors"
                  >
                    <Globe className="mr-1" /> Website
                  </a>
                )}
              </div>
            </div>
          </Card>
       
          ))}
        </div>
      </section>


    </div>
  </main>
  );
}
