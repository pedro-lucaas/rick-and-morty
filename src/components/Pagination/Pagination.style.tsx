import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none; 
  cursor: pointer;
  color: #000;
  font-size: 1.5rem;
  transition: 0.2s;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill : #000;
  }
`;

export const Page = styled.button<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${({ isSelected }) => isSelected ? '#fff' : '#222'};
  background-color: ${({ isSelected }) => isSelected ? '#222' : 'transparent'};
  border-radius: 0.5rem;
  box-shadow: ${({ isSelected }) => isSelected ? '0 0 5px 0 rgba(0, 0, 0, 0.5)' : 'none'}; 
  transition: 0.2s;

  &:hover {
    scale: 0.95;
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const Skeleton = styled.div<{ isLoaded: boolean }>`
  opacity: ${({ isLoaded }) => isLoaded ? 1 : 0};
  transition: 0.2s;
`;

//
