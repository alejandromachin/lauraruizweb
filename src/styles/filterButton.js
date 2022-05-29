import styled from "styled-components";

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d7c9e0;
  gap: 10px;
  padding-left: 20px;
  margin-top: 20px;

  button {
    width: 100px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #d7c9e0;
  }
  button:hover {
    background-color: #d7c9d0;
  }
`;
export default FilterButtonContainer;
