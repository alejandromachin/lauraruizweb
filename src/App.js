import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import ProjectList from "./pages/ProjectList/ProjectList";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
    </>
  );
}

export default App;
