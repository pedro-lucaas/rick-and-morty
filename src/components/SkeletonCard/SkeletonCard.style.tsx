import styled, { keyframes } from "styled-components";

export const SkeletonPulse = keyframes`
  0% {
    background-color: #bbb;
  }
  50% {
    background-color: #aaa;
  }
  100% {
    background-color: #bbb;
  }
`;

export const SkeletonCardImage = styled.div`
  background-color: #ccc;
  height: 300px;
  width: 100%;
  animation: ${SkeletonPulse} 1s infinite;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  flex-basis: 300px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  max-width: 300px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const SkeletonText = styled.div`
  height: 10px;
  width: 80%;
  background-color: #ccc;
  margin: 10px 0;
  animation: ${SkeletonPulse} 3s infinite;
  border-radius: 5px;
`;

export const SkeletonIcon = styled.div`
  height: 30px;
  width: 30px;
  background-color: #ccc;
  margin-bottom: 10px;
  animation: ${SkeletonPulse} 2s infinite;
  border-radius: 50%;
`;


