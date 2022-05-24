const ProjectList = ({ projects }) => {
  return projects?.map((project) => <ProjectListCard project={project} />);
};
export default ProjectList;
