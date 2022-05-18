import ProjectsDisplay from "../../components/ProjectsDisplay/ProjectsDisplay";
import projects from "../../data/projects";

const Home = () => {
  return <ProjectsDisplay projects={projects} />;
};
export default Home;
