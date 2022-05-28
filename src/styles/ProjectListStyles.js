import styled from "styled-components";

export const ProjectListCardContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  .projectListCard__title {
  }
`;

export const ProjectListCardImage = styled.div`
  width: 18%;
  height: 80%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
`;
