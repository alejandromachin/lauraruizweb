import styled from "styled-components";
import { largeImage, mediumImage, smallImage } from "./defaultStyles";

const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 10px;
  padding-bottom: 30px;

  ::-webkit-scrollbar {
    display: none;
  }

  .smallImage {
    transition: 1s;

    width: ${smallImage.width};
    /* height: ${smallImage.height}; */
  }
  .mediumImage {
    transition: 1s;

    width: ${mediumImage.width};
    /* height: ${mediumImage.height}; */
  }
  .largeImage {
    transition: 1s;

    width: ${largeImage.width};
    /* height: ${largeImage.height}; */
  }
  .largeImage:hover,
  .smallImage:hover,
  .mediumImage:hover {
    opacity: 0%;
  }
`;

export const ProjectCardContainer = styled.div`
  position: relative;
  background-color: ${(props) => `#${props.backgroundColor}`};
  display: flex;
  border-radius: 20px;

  /* .projectCard__text {
    display: flex;
  }
  .projectCard__text:hover {
    display: none;
  } */
  img {
    border-radius: 20px;
    transform-style: preserve-3d;
  }
  .projectCard__text {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 100%;
    transition: 0.5s;
    ul {
      font-size: 10px;
    }
  }
  .projectCard__text:hover {
  }
`;

export default ProjectsContainer;
