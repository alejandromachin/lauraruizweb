import { Route, Routes } from "react-router-dom";
import InfoCard from "./components/InfoCard/InfoCard";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import ProjectList from "./pages/ProjectList/ProjectList";

function App() {
  return (
    <div>
      <Navigation />
      <InfoCard />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
    </div>
  );
}

export default App;
