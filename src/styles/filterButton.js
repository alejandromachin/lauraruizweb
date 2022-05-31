import styled from "styled-components";

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d7c9e0;
  gap: 10px;
  padding-left: 20px;
  margin-top: 20px;

  .current {
    color: #000;
    border: 1px solid #000;
    background-color: #a88dba;
  }

  button {
    display: flex;
    flex-direction: row;
    width: 100px;
    border: 0.5px solid #000;
    border-radius: 5px;
    background-color: #d7c9e0;
  }
  :hover > button:not(:hover) {
    opacity: 0.5;
  }
`;
export default FilterButtonContainer;
