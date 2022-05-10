import { ProjectCardContainer } from "../../styles/ProjectsStyles";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <img
        src={project.image}
        alt={project.name}
        className={project.imageSize}
      />
      <div className="projectCard__text">
        <p>hola</p>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
