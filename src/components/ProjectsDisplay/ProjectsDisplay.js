import { useDispatch } from "react-redux";
import {
  hideMenuActionCreator,
  showMenuActionCreator,
} from "../../redux/menuSlice";
import ProjectsContainer from "../../styles/ProjectsStyles";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsDisplay = ({ projects }) => {
  const dispatch = useDispatch();

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (currentScrollY > 400) {
      dispatch(hideMenuActionCreator());
    }
    if (currentScrollY < 400) {
      dispatch(showMenuActionCreator());
    }
  };

  return (
    <ProjectsContainer onScroll={onScroll}>
      {projects?.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsDisplay;
