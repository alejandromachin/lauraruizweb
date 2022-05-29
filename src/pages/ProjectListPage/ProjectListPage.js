import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectList from "../../components/ProjectList/ProjectList";
import projects from "../../data/projects";
import { showMenuActionCreator } from "../../redux/menuSlice";

const ProjectListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMenuActionCreator());
  });
  return <ProjectList projects={projects} />;
};
export default ProjectListPage;
