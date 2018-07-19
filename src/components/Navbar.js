import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NavImage, NavLinks, NavWrapper, Portrait,
} from './StyledComponents';
import portrait from '../../public/face_optimized.jpg';


const Navbar = () => (
  <NavWrapper>
    <NavImage>
      <Portrait src={portrait} alt="portrait" />
    </NavImage>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavLinks>
  </NavWrapper>
);

const NavLink = styled(Link)`
  color:black;
  text-decoration:none;
  font-size:18px;
`;

export default Navbar;
