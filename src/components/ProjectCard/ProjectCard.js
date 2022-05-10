import { ProjectCardContainer } from "../../styles/ProjectsStyles";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <img
        src={project.image}
        alt={project.name}
        className={project.imageSize}
      />
    </ProjectCardContainer>
  );
};

export default ProjectCard;
