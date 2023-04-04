import styled from "styled-components";

export const SideFilterContainer = styled.div`
  position: relative;
`;

export const SideFilterWrapper = styled.div < { show: boolean } >`
  width: 300px;
  padding: 10px;
  background: linear-gradient(230deg, #487 0%, #478 100%);
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 3;

  button {
    width: 100%;
    padding: 3px;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    top: 0; 
    opacity: ${({ show }) => (show ? "1" : "0")};
    left: ${({ show }) => (show ? "0" : "-300px")};

    transition: all 0.3s ease-in-out;

  }
`;

export const ShowHideButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: -45px;
  left: 0;
  padding: 5px 20px;
  border: none;
  border-radius: 30px;
  background: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  animation: all 0.3s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }


`;
