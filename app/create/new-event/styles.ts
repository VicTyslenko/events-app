import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: fit-content;
  min-width: 700px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  & .back-button {
    position: absolute;
    left: -18rem;
    top: 0rem;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  min-height: 460px;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
`;

export const Content = styled.div``;
export const HeaderWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #292e33;
`;

export const Label = styled.span`
  &.admin {
    font-weight: 600;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: red;
`;

export const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapp = styled.div`
  display: flex;
  justify-content: center;
  gap: 21px;
`;
