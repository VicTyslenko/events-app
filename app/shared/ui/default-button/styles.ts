import styled from "styled-components";
type Props = {
  $active?: boolean;
};
export const Button = styled.button<Props>`
  background-color: ${({ $active }) => ($active ? "red" : "#f3e6f2")};
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: 30px;
  border: none;
`;
