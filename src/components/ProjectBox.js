import React from 'react';
import { BoxImg, BoxStyle } from './StyledComponents';


const ProjectBox = props => (
  <BoxStyle>
    <BoxImg src={props.image} alt="projects" />
    <h2>{props.title}</h2>
    <p style={{ textAlign: 'center', padding: '5px' }}>{props.text}</p>
  </BoxStyle>
);

export default ProjectBox;
