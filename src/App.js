import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import './GlobalStyle';
import { AnimatedSwitch } from 'react-router-transition';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => (
  <Wrapper>
    <Navbar />
    <StyledSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
      <Route path="/" exact component={Intro} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
      <Redirect to="/404" />
    </StyledSwitch>
  </Wrapper>

);
const Wrapper = styled.div`
display: flex;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledSwitch = styled(AnimatedSwitch)`
  flex:5;
`;

export default App;
