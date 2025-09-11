"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px;
`;

export const EventContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  max-width: 700px;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const EventHeader = styled.div`
  text-align: center;

  h1 {
    font-size: 40px;
    margin: 0;
    color: #212529;
  }
`;

export const EventBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EventDescription = styled.p`
  font-size: 1.2rem;
  color: #495057;
  line-height: 1.6;
  margin: 0;
`;

export const EventLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #868e96;

  span {
    font-size: 1.2rem;
  }
`;

