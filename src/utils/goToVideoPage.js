const goToVideoPage = (projectName, navigate) => {
  const route = projectName?.split(" ").join("-").toLowerCase();
  navigate(`/projects/${route}`);
};

export default goToVideoPage;
