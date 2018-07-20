import React from 'react';
import {
  ProjectWrapper, ProjectTitle, Title, ProjectList,
} from './StyledComponents';
import swirl from '../../public/swirl-website.jpg';
import tap from '../../public/tap-music.jpg';
import weather from '../../public/weather-app.jpg';
import ProjectBox from './ProjectBox';
import SleepAnimation from './SleepAnimation';

const Projects = () => (
  <ProjectWrapper>
    <ProjectTitle>
      <Title> Projects </Title>
    </ProjectTitle>
    <ProjectList>
      <ProjectBox title="Swirl Website" image={swirl} text="Designed for a Photography program. This is the mockup version." />
      <ProjectBox title="Tap Music" image={tap} text="A web app for creating sick beats with some added visuals!" />
      <ProjectBox title="Weather App" image={weather} text="A geolocation based web app. Check it out in case you need an umbrella." />
    </ProjectList>
    <SleepAnimation />
  </ProjectWrapper>
);

export default Projects;
