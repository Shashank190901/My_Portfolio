"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Employee Location Tracking App",
    description: "Employee Tracking Android app to efficiently monitor employee locations, schedules, and tasks. Features include real-time GPS tracking, attendance management, and reporting for enhanced productivity and workforce management. Secure data handling ensures confidentiality and compliance.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Shashank190901/ETrack",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Basic Banking System Website",
    description: "Basic Banking System Website with HTML, CSS, and JavaScript. Enable users to view their account balances, transfer funds, and manage transactions securely. Responsive design ensures seamless access across devices for convenient banking anytime, anywhere.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shashank190901/Basic_Banking_System-Sparks-Foundation-",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "To-Do List Web Application",
    description: "A user-friendly To-Do List web application using HTML, CSS, and JavaScript. Organize tasks, set priorities, and track progress effortlessly. Features include task categorization, reminders, and cross-platform accessibility for seamless task management anytime, anywhere.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shashank190901/OIBSIP/tree/master/ToDoList%20-Task%203",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Brain Tumor Detection Using ML",
    description: "MRI-based Brain Tumor Detection system using Machine Learning. Analyze MRI scans to accurately identify and classify tumors. Utilize advanced ML algorithms to assist radiologists in diagnosis, improving treatment planning and patient outcomes with enhanced precision and efficiency.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NextJs Portfolio Website",
    description: "Portfolio Website using Next.js and Tailwind CSS. Showcase your projects, skills, and experiences with elegant design and smooth navigation. Benefit from Next.js's SSR capabilities and Tailwind's utility-first approach for optimal performance and stunning visual presentation.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Illegal Fishing Prediction Using ML",
    description: "Machine Learning model for Illegal Fishing Prediction. Analyze historical fishing data and environmental factors to forecast potential illegal activities. Enhance maritime surveillance and enforcement efforts with proactive detection, safeguarding marine ecosystems and promoting sustainable fishing practices.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shashank190901/Illegal_Fishing_Prediction",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#cffafe] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;