import styled from "styled-components";

type Props = {
  $active?: boolean;
};

export const Button = styled.button<Props>`
  background-color: ${({ $active }) => ($active ? "#e63946" : "#e5e4fc")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  cursor: pointer;
  padding: 8px 16px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: background-color 0.2s ease, color 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#d62839" : "#dcdaf9")};
  }
`;
