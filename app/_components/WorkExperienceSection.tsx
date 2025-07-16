import Link from "next/link";
import { workExperience } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";

// Adapter to map workExperience to ProjectCard's expected props
type WorkType = typeof workExperience[number];
const mapWorkToProjectCard = (work: WorkType, idx: number) => ({
  id: work.company.toLowerCase().replace(/\s+/g, "-"),
  heading: work.company,
  subheading: `${work.role} • ${work.location} • ${work.period}`,
  description: work.description,
  imageUrl: work.logo,
  techStack: work.techStack,
  liveDemoUrl: work.link || "#",
  sourceCodeUrl: "",
});

const WorkExperienceSection = () => {
  return (
    <div className="py-32" id="experience">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Work Experience
        </h2>
        <ShinyButton icon={<ChevronRight />}>
          <Link href="#contact">
            Contact Me
          </Link>
        </ShinyButton>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {workExperience.map((work, idx) => (
          <ProjectCard key={work.company + idx} project={mapWorkToProjectCard(work, idx)} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceSection; 