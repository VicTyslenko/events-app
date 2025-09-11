import styled from "styled-components";

export const InputWrapp = styled.div`
  position: relative;

  height: 30px;
  min-width: 220px;
  & input {
    background-color: white;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    color: black;
    padding: 0 8px;
    height: 100%;
    width: 100%;
  }

  & .search-icon {
    position: absolute;
    right: 6px;
    top: 6px;
  }
`;
