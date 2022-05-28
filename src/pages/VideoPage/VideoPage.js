import { useParams } from "react-router-dom";

const VideoPage = () => {
  const params = useParams();
  const { project } = params;
  console.log(project);
  return (
    <div>
      <h1>Video Page</h1>
    </div>
  );
};

export default VideoPage;
