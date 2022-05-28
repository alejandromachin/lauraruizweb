import { ProjectListContainer } from "../../styles/ProjectListStyles";
import ProjectListCard from "../ProjectListCard/ProjectListCard";

const ProjectList = ({ projects }) => {
  return (
    <ProjectListContainer>
      {projects?.map((project) => (
        <ProjectListCard key={project.name} project={project} />
      ))}
    </ProjectListContainer>
  );
};
export default ProjectList;
