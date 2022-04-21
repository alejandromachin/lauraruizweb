// import { Preload, Scroll, ScrollControls } from "@react-three/drei";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import ProjectsDisplay from "../../components/ProjectsDisplay/ProjectsDisplay";
// import ProjectsDisplay2 from "../../components/ProjectsDisplay2/ProjectsDisplay2";
import ProjectsDisplay3 from "../../components/ProjectsDisplay3/ProjectsDisplay3";

const Home = () => {
  return (
    <>
      {/* <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <ProjectsDisplay />;
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas> */}
      <ProjectsDisplay3 />
    </>
  );
};
export default Home;
