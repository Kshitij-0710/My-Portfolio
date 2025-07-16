"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

import { motion } from "framer-motion";

interface ProjectProps {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, heading, imageUrl, techStack, liveDemoUrl } = project;

  // Determine if the link is external
  const isExternal = liveDemoUrl && liveDemoUrl.startsWith("http");
  const cardLink = isExternal ? liveDemoUrl : `/work/${id}`;
  const linkProps = isExternal ? { href: cardLink, target: "_blank", rel: "noopener noreferrer" } : { href: cardLink };

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
    >
      <Link {...linkProps} className="rounded-lg overflow-hidden block">
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={heading}
          className="hover:scale-110 transition-transform duration-700"
        />
      </Link>
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
        {project.description && (
          <p className="mt-2 text-base text-dark-200/80 dark:text-white/80">{project.description}</p>
        )}
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} />
          <Link
            {...linkProps}
            className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
          >
            <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
