import { Route, Routes } from "react-router-dom";
import InfoCard from "./components/InfoCard/InfoCard";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import ProjectList from "./pages/ProjectList/ProjectList";

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
            <Route path="/home" element={<Home />} />
            <Route path="/projectlist" element={<ProjectList />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
