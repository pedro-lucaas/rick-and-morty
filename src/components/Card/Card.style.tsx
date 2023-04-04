import styled from "styled-components";
import { LazyImage } from "../LazyImage";

export const CardImage = styled(LazyImage)`
  height: 300px;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
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

export const Text = styled.p`
  font-size: 1rem;
  padding: 10px;
`;

export const Icon = styled.div<{ color: string }>`
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.color};
`;