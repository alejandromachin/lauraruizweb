import styled from "styled-components";
import { largeImage, mediumImage, smallImage } from "./defaultStyles";

const ProjectsContainer = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;

  .smallImage {
    width: ${smallImage.width};
    height: ${smallImage.height};
  }
  .mediumImage {
    width: ${mediumImage.width};
    height: ${mediumImage.height};
  }
  .largeImage {
    width: ${largeImage.width};
    height: ${largeImage.height};
  }
`;

export const ProjectCardContainer = styled.div`
  /* .projectCard__text {
    display: flex;
  }
  .projectCard__text:hover {
    display: none;
  } */
`;

export default ProjectsContainer;
