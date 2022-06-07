import styled from "styled-components";

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  gap: 10px;
  padding-left: 20px;
  margin-top: 20px;
  z-index: 1000;
  .current {
    color: #000;
    border: 1px solid #000;
    background-color: #a88dba;
  }

  button,
  button:active {
    z-index: 1000;
    font-size: 10px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
    border: 0.5px solid #000;
    border-radius: 5px;
    background-color: #d7c9e0;
    transition: 0.4s;
    padding: 10px;
  }
  :hover > button:not(:hover) {
    opacity: 0.2;
    transition: 0.4s;
  }
`;
export default FilterButtonContainer;
