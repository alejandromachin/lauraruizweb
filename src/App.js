import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import InfoCard from "./components/InfoCard/InfoCard";
import Navigation from "./components/Navigation/Navigation";
import projects from "./data/projects";
import Home from "./pages/Home/Home";

import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import { setProjectsActionCreator } from "./redux/projectsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProjectsActionCreator(projects));
  });

  return (
    <>
      <div className="container">
        {/* <div className="contact-menu">
          <ul>
            <li>INSTAGRAM</li>
            <li>EMAIL</li>
            <li>BARCELONA</li>
          </ul>
        </div> */}
        <div className="staticContainer">
          <Navigation />
          <InfoCard />
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projectlist" element={<ProjectListPage />} />
          <Route path="/projects/:project" element={<VideoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
