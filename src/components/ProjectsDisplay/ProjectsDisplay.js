import { useState } from "react";
import ProjectsContainer from "../../styles/ProjectsStyles";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsDisplay = ({ projects }) => {
  //create a function to hide the menu when scrolling down

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (currentScrollY > 400) {
    }
    if (currentScrollY < 400) {
    }
  };

  return (
    <ProjectsContainer onScroll={onScroll}>
      {projects?.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsDisplay;
