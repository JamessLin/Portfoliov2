"use client";

import { Card, Snippet, Chip } from "@heroui/react";
import { Avatar } from "@heroui/avatar";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

import { aboutConfig } from "@/config/about";
import { GithubIcon } from "@/components/icons";

// TODO: Use Chip from HeroUI for other things, didnt know it existed
export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex-1">
            <Chip
              className="mb-4"
              color="primary"
              startContent={<FaLocationDot />}
              variant="flat"
            >
              Schenectady, New York
            </Chip>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              hi, I&apos;m <span className="text-primary">James Lin</span>
            </h1>
            <p className="text-lg mb-6">
              a CS student at Union College, excited about how AI and tech will
              shape our future.
            </p>

            <Snippet color="primary">linj3@union.edu</Snippet>
          </div>

          <div
            className="relative w-32 h-32 md:w-48 md:h-48"
            style={{ perspective: "1000px" }}
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              className="w-full h-full relative cursor-pointer"
              initial={false}
              style={{
                transformStyle: "preserve-3d",
                width: "100%",
                height: "100%",
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Front side */}
              <div
                className="absolute w-full h-full rounded-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Avatar className="w-full h-full" src="/avatar.png" />
              </div>

              {/* Back side */}
              <div
                className="absolute w-full h-full rounded-full"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Avatar className="w-full h-full" src="/Me.jpg" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className=" text-muted-foreground">
            I&apos;ve worked on full-stack applications, real-time systems, and
            AI-powered tools that streamline processes and solve complex
            challenges. I thrive on transferring intricate problems into elegant
            solutions, and I&apos;m excited about leveraging my skills to shape
            a smarter, more connected future. I&apos;m always eager to explore
            emerging technologies and push the boundaries of what&apos;s
            possible in the tech world.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>

          {aboutConfig.workExperiences.map((experience) => (
            <div key={experience.date} className="mb-4">
              <div className="flex items-center gap-2">
                {/* Icon Circle Container */}
                <div className="relative flex shrink-0 overflow-hidden rounded-full border size-12 bg-muted-background dark:bg-foreground">
                  {experience.icon && (
                    <img
                      alt={experience.company}
                      className="aspect-square h-full w-full object-contain"
                      src={experience.icon || "/placeholder.svg"}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        {experience.company}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {experience.title}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-sm text-muted-foreground block">
                        {experience.date}
                      </span>
                      <span className="text-sm text-muted-foreground block">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Education</h2>

          {aboutConfig.education.map((school) => (
            <div key={school.date} className="justify-between mb-4">
              <div key={school.date} className="flex items-center gap-2">
                <div className="relative flex shrink-0 overflow-hidden rounded-full border size-12 bg-muted-background dark:bg-foreground">
                  {school.icon && (
                    <img
                      alt={school.school}
                      className="aspect-square h-full w-full object-contain"
                      src={school.icon}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 ">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">
                        {school.school}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {school.title}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {school.date}
                    </span>
                  </div>
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
              <Snippet
                key={skill}
                hideCopyButton
                hideSymbol
                className="rounded-md"
                color="default"
              >
                {skill}
              </Snippet>
            ))}
          </div>
        </section>

        {/* Projects Section */}

        <section className="mb-16" id="projects">
          <div className="text-center mb-10">
            <Chip color="primary" variant="flat">
              <span className="inline-flex items-center gap-2 p-1">
                My Project
              </span>
            </Chip>
            <h2 className="text-vprimary text-4xl md:text-5xl font-bold mt-4">
              check out my latest work
            </h2>
            <p className="text-muted-foreground mt-2">
              I&apos;ve worked on a variety of projects. Here are some of my
              favorite ongoing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {aboutConfig.projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden group flex flex-col"
              >
                <a className="block" href={project.link}>
                  <div className="aspect-video relative overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
                      src={project.video}
                    />
                  </div>
                </a>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <div className="flex justify-between items-start ">
                      <a className="block" href={project.link}>
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
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
                          key={tech}
                          hideCopyButton
                          hideSymbol
                          className="text-xs text-vprimary bg-secondary bg-opacity-10 px-2 py-1 rounded-md"
                          color="default"
                        >
                          {tech}
                        </Snippet>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-1">
                    <a
                      className="bg-vprimary text-secondary flex items-center px-2 py-1 text-xs rounded-md transition-colors"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubIcon className="mr-1" /> Source Code
                    </a>
                    {project.website && (
                      <a
                        className="bg-secondary text-white flex items-center px-2 py-1 text-xs rounded-md transition-colors"
                        href={project.website}
                        rel="noopener noreferrer"
                        target="_blank"
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
