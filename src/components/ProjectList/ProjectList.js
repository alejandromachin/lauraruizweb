import ProjectListCard from "../ProjectListCard/ProjectListCard";

const ProjectList = ({ projects }) => {
  return projects?.map((project) => (
    <ProjectListCard key={project.name} project={project} />
  ));
};
export default ProjectList;
