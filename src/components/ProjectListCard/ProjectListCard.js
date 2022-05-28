import {
  ProjectListCardContainer,
  ProjectListCardImage,
} from "../../styles/ProjectListStyles";

const ProjectListCard = ({
  project: {
    name,
    data,
    client,
    director,
    producer,
    image,
    imageSize,
    backgroundColor,
  },
}) => {
  return (
    <ProjectListCardContainer backgroundColor={backgroundColor}>
      <div className="projectListCard__title">
        <h2>{name}</h2>
        <p>{data}</p>
      </div>
      <ProjectListCardImage
        backgroundImage={`images/${image}`}
      ></ProjectListCardImage>
      <ul className="projectListCard__info">
        <li>Client: {client}</li>
        <li>Director: {director}</li>
        <li>Producer: {producer}</li>
      </ul>
    </ProjectListCardContainer>
  );
};

export default ProjectListCard;
