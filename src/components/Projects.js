import React from 'react';
import {
  ProjectWrapper, ProjectTitle, Title2, ProjectList,
} from './StyledComponents';
import swirl from '../../public/swirl-website.jpg';
import tap from '../../public/tap-music.jpg';
import weather from '../../public/weather-app.jpg';
import ProjectBox from './ProjectBox';
import SleepAnimation from './SleepAnimation';

const Projects = () => (
  <ProjectWrapper>
    <ProjectTitle>
      <Title2> Projects </Title2>
    </ProjectTitle>
    <ProjectList>
      <ProjectBox visit="https://devedwin.github.io/Swirl-Website/" title="Swirl Website" image={swirl} text="Designed for a Photography program. This is the mockup version." />
      <ProjectBox visit="https://devedwin.github.io/tap-music/" title="Tap Music" image={tap} text="A web app for creating sick beats with some added visuals!" />
      <ProjectBox visit="https://devedwin.github.io/weather-app/" title="Weather App" image={weather} text="A geolocation based web app. Check it out in case you need an umbrella." />
    </ProjectList>
    <SleepAnimation />
  </ProjectWrapper>
);

export default Projects;
