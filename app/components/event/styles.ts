import styled from "styled-components";

export const EventWrapp = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const ContentWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FlexWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h2`
  color: #222;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin: 0;
`;
