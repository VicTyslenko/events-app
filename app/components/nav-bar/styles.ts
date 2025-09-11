import styled from "styled-components";

export const NavBarWrapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .date-button {
    background-color: transparent;
    border: 1px solid #d5d5d5;
    gap: 5px;
    align-items: normal;
  }
  & .date-picker {
    height: 30px;
    padding-top: 2px;
    padding-bottom: 0;
    font-size: 14px;
    color: #292e33;

    border-radius: 6px;
    border: 1px solid #d2d6db;
    background: #fff;
  }
`;

export const ButtonGroup = styled.div`
  height: 25px;
  border-radius: 10px;
  display: flex;
  gap: 6px;
  margin-right: 10px;
`;

export const FlexWrapp = styled.div`
  display: flex;
  gap: 3px;
`;
