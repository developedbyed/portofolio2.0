import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NavImage, NavLinks, NavWrapper, Portrait,
} from './StyledComponents';
import portrait from '../../public/logo.svg';


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
  color:white;
  text-decoration:none;
  font-size:18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }

`;

export default Navbar;
