import styled from "styled-components";

export const ProjectListContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  justify-content: flex-end;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 40px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectListCardContainer = styled.div`
  font-family: Helvetica, sans-serif;
  width: 90%;
  height: 18%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f45c54;
  padding-left: 20px;

  .projectListCard__title {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    font-size: 10px;
    height: 100%;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 200;
      font-size: 12px;
    }
    p {
      font-family: Times, serif;
      font-style: italic;
      margin-top: 0;
    }
  }
  .projectListCard__info {
    font-size: 12px;
    width: 30%;
    height: 100%;
    margin: 0;
    padding-top: 20px;
    padding-left: 0;
    list-style-type: none;
  }
`;

export const ProjectListCardImage = styled.div`
  width: 20%;
  height: 80%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;
