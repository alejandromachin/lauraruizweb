import { Navigate, Route, Routes } from "react-router-dom";
import InfoCard from "./components/InfoCard/InfoCard";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";

import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";

function App() {
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
        <div className="dinamicContainer">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projectlist" element={<ProjectListPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
