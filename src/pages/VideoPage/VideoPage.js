import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const params = useParams();
  const { project: projectName } = params;

  const { videoUrl } = projects.find(
    (project) => project.name.toLowerCase() === projectName.split("-").join(" ")
  );

  return (
    <div>
      <ReactPlayer url={videoUrl} controls={true} width="100%" />
    </div>
  );
};

export default VideoPage;
