import { useNavigate } from "react-router-dom";
import {
  ProjectListCardContainer,
  ProjectListCardImage,
} from "../../styles/ProjectListStyles";
import goToVideoPage from "../../utils/goToVideoPage";

const ProjectListCard = ({
  project: {
    name,
    artist,
    data,
    client,
    director,
    producer,
    image,
    backgroundColor,
  },
}) => {
  const navigate = useNavigate();

  return (
    <ProjectListCardContainer
      backgroundColor={backgroundColor}
      onClick={() => goToVideoPage(name, navigate)}
    >
      <div className="projectListCard__play">PLAY</div>
      <div className="projectListCard">
        <div className="projectListCard__title">
          <h2>{name}</h2>
          {artist && <h3>{artist}</h3>}
          <p>({data})</p>
        </div>
        <ProjectListCardImage
          backgroundImage={`images/${image}`}
        ></ProjectListCardImage>
        <ul className="projectListCard__info">
          <li>Client: {client}</li>
          <li>Director: {director}</li>
          <li>Producer: {producer}</li>
        </ul>
      </div>
    </ProjectListCardContainer>
  );
};

export default ProjectListCard;
