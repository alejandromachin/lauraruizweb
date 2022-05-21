import { ProjectCardContainer } from "../../styles/ProjectsStyles";

const ProjectCard = ({
  project: { name, data, client, director, producer, image, imageSize },
}) => {
  return (
    <ProjectCardContainer>
      <div className="projectCard__text">
        <ul>
          <li>{name}</li>
          <li>{data}</li>
          <li>Client: {client}</li>
          <li>Director: {director}</li>
          <li>Producer: {producer}</li>
          <li>PLAY</li>
        </ul>
      </div>
      <img src={`images/${image}`} alt={name} className={`${imageSize}Image`} />
    </ProjectCardContainer>
  );
};

export default ProjectCard;
