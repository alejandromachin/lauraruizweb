import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import ReactPlayer from "react-player";
import VideoContainer from "../../styles/videoStyles";

const VideoPage = () => {
  const params = useParams();
  const { project: projectName } = params;

  const { videoUrl } = projects.find(
    (project) => project.name.toLowerCase() === projectName.split("-").join(" ")
  );

  return (
    <VideoContainer>
      <ReactPlayer url={videoUrl} controls={true} width="100%" />
    </VideoContainer>
  );
};

export default VideoPage;
