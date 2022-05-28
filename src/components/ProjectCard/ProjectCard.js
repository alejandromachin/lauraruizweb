import { useNavigate } from "react-router-dom";
import { ProjectCardContainer } from "../../styles/ProjectsStyles";
import goToVideoPage from "../../utils/goToVideoPage";

const ProjectCard = ({
  project: {
    name,
    artist,
    data,
    client,
    director,
    producer,
    image,
    imageSize,
    backgroundColor,
  },
}) => {
  const navigate = useNavigate();

  return (
    <ProjectCardContainer
      backgroundColor={backgroundColor}
      onClick={() => goToVideoPage(name, navigate)}
    >
      <div className="projectCard__text">
        <ul>
          <li>{name}</li>
          {artist && <li>{artist}</li>}
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
