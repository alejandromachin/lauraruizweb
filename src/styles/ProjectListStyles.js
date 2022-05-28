import styled from "styled-components";

export const ProjectListCardContainer = styled.div`
  width: 90%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f45c54;
  .projectListCard__title {
    width: 30%;
    height: 100%;
  }
  .projectListCard__info {
    width: 30%;
    height: 100%;
    margin: 0;
    padding-left: 0;
    list-style-type: none;
  }
`;

export const ProjectListCardImage = styled.div`
  width: 18%;
  height: 80%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;
