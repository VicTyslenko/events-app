import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
inset:0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalInner = styled.div`
  color: red;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
