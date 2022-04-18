import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Image } from "@react-three/drei";

const ProjectsDisplay = () => {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[5].material.zoom =
      1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });

  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[5, 2.5, 1]}
        url="/images/12_octubre.webp"
      />

      <Image
        className="projectDisplay__image"
        position={[2, 0, 1]}
        scale={3}
        url="images/colacao.webp"
      />
      <Image
        className="projectDisplay__image"
        position={[-2.3, -2, 2]}
        scale={[2, 1, 0]}
        url="/images/digues_el_que_penses.webp"
      />
      <Image
        className="projectDisplay__image"
        position={[0, -2.5, 3]}
        scale={[2, 1, 1]}
        url="/images/el_verano_que_merecemos.webp"
      />
      <Image
        className="projectDisplay__image"
        position={[0.75, -4, 3.5]}
        scale={[1.5, 1, 0]}
        url="/images/fotocasa.webp"
      />
      <Image
        position={[0, -6, 2.5]}
        scale={[3, 1.5, 1]}
        url="/images/injubilables.webp"
      />
      <Image
        className="projectDisplay__image"
        position={[0, -8, 0]}
        scale={[width, height / 2, 1]}
        url="/images/light_free.webp"
      />
      <Image
        position={[2, -12, 0]}
        scale={[5, height / 2, 1]}
        url="/images/mo_aitana.webp"
      />
      <Image
        className="projectDisplay__image"
        position={[0, -height * 3, 0]}
        scale={[width, height / 2, 1]}
        url="/images/live_more_now.webp"
      />
    </group>
  );
};

export default ProjectsDisplay;
