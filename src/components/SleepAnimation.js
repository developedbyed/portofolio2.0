import Lottie from 'react-lottie';
import React from 'react';
import animationData from '../../public/sleep.json';
import { AnimationWrapper } from './StyledComponents';


const SleepAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  return (
    <AnimationWrapper>
      <Lottie options={defaultOptions} height={200} width={300} />
    </AnimationWrapper>
  );
};

export default SleepAnimation;
