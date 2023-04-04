import styled from "styled-components";

export const BackgroundVideo = styled.video`
  position: fixed;
  left: 50%;
  top: 30%;
  width: 100vw;
  min-height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const IntroductorySection = styled.div`
  position: relative;
  display: block;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
`;

export const PrimaryWhiteButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff; 
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  letter-spacing: 3px;
  padding: 0 16px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 250px;
  transition: all 0.6s cubic-bezier(1, 0, 0.265, 1.0);
  
  &::before {
    transition: all 0.6s cubic-bezier(1, 0, 0.265, 1.0);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    backdrop-filter: blur(10px);
  }
  &::after {
    transition: all 0.6s cubic-bezier(1, 0, 0.265, 1.0);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    background-color: #fff;
  }

  &:hover {
    color: #000;
    &::before {
      opacity: 1;
    }
    &::after {
      width: 100%;
    }
  }
`;


export const MenuWrapper = styled.div`
  display: flex;
  background-color: #222;
  height: 20vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ccc;
  color: #111;
  height: 100%;
  min-height: 1024px;
`;

export const DefaultLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y:scroll;
`;