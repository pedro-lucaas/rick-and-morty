import styled from "styled-components";

export interface IFlexContainer {
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  background?: string;
  textAlign?: string;
};

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  background: ${(props) => props.background || "transparent"};
  text-align: ${(props) => props.textAlign || "left"};
`;

