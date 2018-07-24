import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import { Youtube } from 'styled-icons/fa-brands/Youtube';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

export const IntroWrapper = styled.div`
    background-color: #36698D;
    width: 100%;

`;

export const ProjectWrapper = IntroWrapper.extend`
  background-color: #3E8869;
  
  
`;

export const ProjectTitle = styled.div`
  height: 20vh;
  display: flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 768px) {
    height: 15vh;
  }
`;

export const ProjectList = styled.div`
  height: 50vh;
  display:flex;
  justify-content: space-around;
  align-items:flex-end;
  width:100%;

   
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    
  }
`;

export const BoxStyle = styled.div`
  width:300px;
  height: 300px;
  background-color: white;
  box-shadow: 0px 3px 5px #606060;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  justify-content:space-between;
  border-radius: 5px; 
  position: relative;
  &::after{
    content: "Visit Page";
    transition: opacity 0.3s;
    background-color: #3C4859;
    opacity: 0;
    position: absolute;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 150px;
    pointer-events: none;
  }
  &:hover::after{
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
   flex: 0 0 auto;
   &::after{
     display:none;
   }
   
  }
`;

export const BoxImg = styled.img`
  width:100%;
  border-radius: 5px; 
  height: auto;
`;

export const ContactWrapper = IntroWrapper.extend`
  background-color: #554872;
`;

export const ContactFormDiv = styled.div`
  height:80vh;
  display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
    height: 75vh;
  }
  

`;
export const ContactForm = styled.form`
  background-color: #EFEFEF;
  display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  width: 40%;
  height: 90%;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90%;
 
  }
`;


export const Input = styled.input`
  width:50%;
  background: none;
  border: none;
  color: black;
  font-size: 20px;
  border-bottom: 1px solid #554872;
  outline: none;
  &:focus{
    border-bottom: 2px solid #554872;
  }
`;

export const TextArea = styled.textarea`
  width: 70%;
  height: 100px;
  outline: none;
  border: 1px solid #554872;
  background-color: #EFEFEF;
  &:focus{
    border: 2px solid #554872;
  }
`;

export const FormButton = styled.button`
  border: 1px solid #554872;
  background:none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 3px;
  transition: all 0.3s ease-out;
  color: #554872;
  cursor: pointer;
  &:hover{
    color: #EFEFEF;
    background:#554872;
  }
`;

export const Label = styled.label`
  color: #554872;
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
  height: 30vh;
  display: flex; 
  justify-content: center;
  align-items:center;
  @media (max-width: 768px) {
   height: 20vh;
  }
`;

export const PopWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  pointer-events: none;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 0px;
  color: #EFEFEF;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const Title2 = styled.h2`
  font-size: 30px;
  margin: 0;
  color: #EFEFEF;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
export const SubTitle = styled.h1`
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
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
  height: 25vh;
  display:flex;
  justify-content:center;
  
  @media (max-width: 768px) {
    flex: 1;
    height: 100%;
    background-color: #3C4859;
  }
`;

export const NavLinks = styled.ul`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  list-style: none;
  background-color: #505F75;
  @media (max-width: 768px) {
    flex-direction: row;
    flex: 3;
    height: 100%;
    padding: 0px 20px;
    justify-content: space-between;
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
  height: 100%;
  width: 100%;
  
  @media (max-width: 768px) {
    height:80px;
    width:80px;
  }
`;


export const AnimationWrapper = styled.div`
  height: 30vh;
  display:flex;
  align-items:flex-end;
  overflow:hidden;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const FireWrapper = AnimationWrapper.extend`
  @media (max-width: 768px) {
    height: 25vh;
  }
`;
