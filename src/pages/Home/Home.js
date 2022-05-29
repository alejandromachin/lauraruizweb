import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectsDisplay from "../../components/ProjectsDisplay/ProjectsDisplay";
import projects from "../../data/projects";
import { showMenuActionCreator } from "../../redux/menuSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMenuActionCreator());
  });
  return <ProjectsDisplay projects={projects} />;
};
export default Home;
