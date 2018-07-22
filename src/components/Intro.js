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
      <a href="https://github.com/devedwin" target="_blank"><GithubLogo /> </a>
      <a href="https://www.youtube.com/c/DevEd" target="_blank"><YoutubeLogo /> </a>
      <a href="https://www.linkedin.com/in/simo-edwin-57a25714b/" target="_blank"><LinkedinLogo /></a>
    </SocialWrapper>
    <LootieAnimation />
  </IntroWrapper>
);


export default Intro;
