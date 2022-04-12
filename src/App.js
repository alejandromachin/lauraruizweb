import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/gallery" element={<ProjectGallery />} />
        <Route path="/list" element={<ProjectList />} />
      </Routes>
    </>
  );
}

export default App;
