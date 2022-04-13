import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ProjectsDisplay from "../../components/ProjectsDisplay/ProjectsDisplay";

const Home = () => {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <ProjectsDisplay />;
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </>
  );
};
export default Home;
