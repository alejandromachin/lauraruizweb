import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectList from "../../components/ProjectList/ProjectList";

import { showMenuActionCreator } from "../../redux/menuSlice";

const ProjectListPage = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMenuActionCreator());
  });
  return <ProjectList projects={projects} />;
};
export default ProjectListPage;
