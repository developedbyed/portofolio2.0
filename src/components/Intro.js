import React from 'react';
import {
  IntroWrapper, TitleWrapper, Title, SubTitle, GithubLogo, YoutubeLogo, LinkedinLogo, SocialWrapper,
} from './StyledComponents';
import LootieAnimation from './LootieAnimation';

const Intro = () => (
  <IntroWrapper>
    <TitleWrapper>
      <Title>Simo Edwin</Title>
      <SubTitle>Fullstack Developer</SubTitle>
    </TitleWrapper>
    <SocialWrapper>
      <GithubLogo />
      <YoutubeLogo />
      <LinkedinLogo />
    </SocialWrapper>
    <LootieAnimation />
  </IntroWrapper>
);


export default Intro;
