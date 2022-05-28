const goToVideoPage = (projectName, navigate) => {
  const route = projectName?.split(" ").join("-");
  navigate(`/projects/${route}`);
};

export default goToVideoPage;
