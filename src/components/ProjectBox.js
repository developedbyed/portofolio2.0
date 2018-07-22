import React from 'react';
import { BoxImg, BoxStyle } from './StyledComponents';


const ProjectBox = props => (
  <BoxStyle>
    <a href={props.visit}><BoxImg src={props.image} alt="projects" /> </a>
    <h4>{props.title}</h4>
    <p style={{ textAlign: 'center', padding: '5px', fontSize: '16px' }}>{props.text}</p>
  </BoxStyle>
);

export default ProjectBox;
