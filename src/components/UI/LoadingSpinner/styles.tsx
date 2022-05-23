import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin-top: 50%;
    border-radius: 50%;
    border: 6px solid #272c52;
    border-color: #272c52 transparent #272c52 transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`;
