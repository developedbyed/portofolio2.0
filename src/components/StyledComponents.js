import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Youtube } from 'styled-icons/fa-brands/Youtube';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

export const IntroWrapper = styled.div`
    background-color: #368ECE;
    width: 100%;
`;

export const ProjectWrapper = IntroWrapper.extend`
  background-color: #2CB87D;
`;

export const ProjectTitle = styled.div`
  height: 30vh;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const ProjectList = styled.div`
  height: 70vh;
  display:flex;
  justify-content: space-around;
  width:100%;
`;

export const BoxStyle = styled.div`
  width:250px;
  height: 300px;
  background-color: white;
  box-shadow: 0px 3px 5px #606060;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
`;

export const BoxImg = styled.img`
  width:100%;
  height: auto;
`;

export const ContactWrapper = IntroWrapper.extend`
  background-color: #6440B2;
`;

export const ContactForm = styled.form`
  height:70vh;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`;

export const Input = styled.input`
  width:30%;
  background: none;
  border: none;
  color: #EFEFEF;
  font-size: 20px;
  border-bottom: 2px solid #EFEFEF;
`;

export const TextArea = styled.textarea`
  width: 30%;
  height: 100px;
`;

export const Label = styled.label`
  color: #EFEFEF;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  justify-content: flex-end;
  color:#EFEFEF;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

export const SocialWrapper = styled.div`
  height: 20vh;
  display: flex; 
  justify-content: center;
  align-items:center;

`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 0px;
  color: #EFEFEF;
`;
export const SubTitle = styled.h1`
  font-size: 25px;
`;
export const YoutubeLogo = styled(Youtube)`
  color:#EFEFEF;
  margin: 0px 20px;
  height:60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover{
    color:#E2E2E2;
    transform:translateY(-5px);
  }
`;

export const GithubLogo = styled(Github)`
  color:#EFEFEF;
  margin: 0px 20px;
  height:60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover{
    color:#E2E2E2;
    transform:translateY(-5px);
  }
`;

export const LinkedinLogo = styled(Linkedin)`
  color:#EFEFEF;
  margin: 0px 20px;
  height:60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover{
    color:#E2E2E2;
    transform:translateY(-5px);
  }
`;

export const NavImage = TitleWrapper.extend`
  height: 30vh;
  @media (max-width: 768px) {
    height:5vh;
  }
`;

export const NavLinks = styled.ul`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  list-style: none;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 50%;
  }
`;

export const NavWrapper = styled.div`
    height: 100vh;
    background-color: #EFEFEF;
    flex: 1;
    @media (max-width: 768px) {
    height:10vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
`;

export const Portrait = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  @media (max-width: 768px) {
    height:50px;
    width:50px;
  }
`;


export const AnimationWrapper = styled.div`
  height: 40vh;
  display:flex;
  align-items:flex-end;
  overflow:hidden;
`;
