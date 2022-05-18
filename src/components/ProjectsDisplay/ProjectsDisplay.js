import ProjectsContainer from "../../styles/ProjectsStyles";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsDisplay = ({ projects }) => {
  return (
    <ProjectsContainer>
      {projects?.map((project) => (
        <ProjectCard project={project} />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsDisplay;
