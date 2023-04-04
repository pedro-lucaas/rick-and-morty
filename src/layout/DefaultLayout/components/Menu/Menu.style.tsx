import styled from "styled-components";

export type MenuBodyProps = {
  isOpen: boolean;
};
export const MenuBody = styled.div<MenuBodyProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
  top: 0;
  bottom: ${(props) => (props.isOpen ? 0 : "100%")};  
  right: 0;
  left: ${(props) => (props.isOpen ? 0 : "100%")};
  color: #fff;  
  background-color: #000000c7;
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 2;
  margin-left: 0;
  transition: all 0.5s ease-in-out;

  @media (min-width: 1200px) {
    padding-left: calc((100vw - 1200px) / 2);
    padding-right: calc((100vw - 1200px) / 2);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
`;

export const MenuCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }

  svg {
    font-size: 2rem;
  }
`;


export type MenuItemProps = {
  isCurrent: boolean;
};
export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${(props) => props.isCurrent ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }  
`;