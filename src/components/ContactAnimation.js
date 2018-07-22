import Lottie from 'react-lottie';
import React from 'react';
import animationData from '../../public/contact.json';
import { PopWrapper } from './StyledComponents';


const ContactAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  return (
    <PopWrapper>
      <Lottie options={defaultOptions} height={200} width={300} />
    </PopWrapper>
  );
};

export default ContactAnimation;
