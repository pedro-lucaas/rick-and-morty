import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #f00;
  }
`;

export const CharacterDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin: 20px;

  @media (max-width: 768px) {
    scale: 0.8;
  }
`;

export interface IIcon {
  color: string;
}

export const Icon = styled.div<IIcon>`
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.color};
`;

export const Link = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #f00;
  }
`;