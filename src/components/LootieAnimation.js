import Lottie from 'react-lottie';
import React from 'react';
import animationData from '../../public/data.json';
import { AnimationWrapper } from './StyledComponents';


const LootieAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const style = {
    animation: 'runningFrames 2.5s forwards',
  };

  return (
    <AnimationWrapper>
      <Lottie options={defaultOptions} height={200} width={200} style={style} />
    </AnimationWrapper>
  );
};

export default LootieAnimation;
