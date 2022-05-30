import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideMenuActionCreator,
  showMenuActionCreator,
} from "../../redux/menuSlice";
import ProjectsContainer from "../../styles/ProjectsStyles";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsDisplay = ({ projects }) => {
  const projectsFilter = useSelector((state) => state.projectsFilter.filter);
  const { projects: allProjects } = useSelector((state) => state.projects);

  const dispatch = useDispatch();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (projectsFilter !== "all") {
      const filteredProjects = projects.filter(
        (project) => project.category === projectsFilter
      );
      setFilteredProjects(filteredProjects);
    } else {
      setFilteredProjects(allProjects);
    }
  }, [allProjects, projects, projectsFilter]);

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
      {filteredProjects?.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsDisplay;
