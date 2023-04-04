import React from 'react';

import { Menu } from './components/Menu';
import { BackgroundVideo, PrimaryWhiteButton, IntroductorySection, ContentWrapper, MenuWrapper } from './DefaultLayout.style';

import desktopVideo from '../../assets/ram-desktop-video.mp4';
import logo from '../../assets/ram-logo.png';

export interface IDefaultLayout {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  const body = React.useRef<HTMLDivElement>(null);

  const handleScrollToBody = () => {
    body.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return <div>
    <IntroductorySection>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={desktopVideo} type="video/mp4" />
      </BackgroundVideo>

      <PrimaryWhiteButton onClick={handleScrollToBody}>
        Ver Personagens
      </PrimaryWhiteButton>
    </IntroductorySection>
    <div ref={body}>
      <MenuWrapper>
        <img src={logo} alt="logo" width="250px" />
        <Menu />
      </MenuWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </div>
  </div >;
}

export default DefaultLayout;