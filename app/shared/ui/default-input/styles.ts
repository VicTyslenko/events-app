import styled from "styled-components";

export const InputWrapp = styled.div`
  position: relative;
  width: fit-content;
  height: 25px;
  min-width: 200px;
  & input {
    background-color: white;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    color: black;
    padding: 0 4px;
    height: 100%;
    width: 100%;
  }

  & .search-icon {
    position: absolute;
    right: 6px;
    top: 6px;
  }
`;
