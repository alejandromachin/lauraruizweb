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
  width: 90%;
  height: 18%;
  background-color: ${(props) => `#${props.backgroundColor}`};
  display: flex;
  position: relative;

  .projectListCard {
    font-family: Helvetica, sans-serif;
    width: 100%;
    height: 100%;
    background-color: #d7c9e0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    border-top: 1px solid #f45c54;
    transition: 0.5s;
    position: relative;
  }
  .projectListCard__play {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .projectListCard:hover {
    border-top: 1px solid;
    opacity: 0;

    .projectListCard__play {
      opacity: 100;
    }
  }

  :after {
    position: relative;
  }
  :hover::after {
    opacity: 100;
  }

  .projectListCard__title {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    font-size: 10px;
    height: 100%;
    width: 25%;

    h2,
    h3 {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 0;
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
    width: 40%;
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
