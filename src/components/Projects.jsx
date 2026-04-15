import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#2c2b48",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={project.name}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={project.image}
            alt={project.name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{project.name}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {project.description}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {project.tags.map((tag, index) => (
          <li
            key={`project-tag-${index}`}
            className={`text-white-100 text-[14px] pl-1 tracking-wider ${tag.color}`}
          >
            #{tag.name}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={() => window.open(project.source_code_link, "_blank")}
        className="mt-4 py-2 px-4 bg-tertiary rounded-xl text-white outline-none w-fit font-bold shadow-md shadow-primary"
      >
        View Code
      </button>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
            Projects.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// export default Projects
export default SectionWrapper(Projects, "projects");