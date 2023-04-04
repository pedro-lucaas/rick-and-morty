import styled from "styled-components";

export interface ITitle {
  color?: string;
};

export const Title = styled.h1<ITitle>`
  font-size: 38px;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ color }) => color || "#222"};
  margin: 2rem;
  padding: 0;
  letter-spacing: 0.1em;
`;