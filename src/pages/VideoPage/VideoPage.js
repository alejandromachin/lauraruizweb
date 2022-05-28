import { useParams } from "react-router-dom";
import projects from "../../data/projects";

const VideoPage = () => {
  const params = useParams();
  const { project: projectName } = params;

  const prueba = projects.find(
    (project) => project.name.toLowerCase() === projectName.split("-").join(" ")
  );

  console.log(prueba);
  return (
    <div>
      <h1>Video Page</h1>
      <img src={prueba.videoUrl} alt={prueba.name} />
    </div>
  );
};

export default VideoPage;
