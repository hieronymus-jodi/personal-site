import React from 'react';
import styled from 'styled-components';
import { GiKiwiBird } from 'react-icons/gi';
import { COLOR, GRADIENT } from '../../../constants';
import { H1, P } from '../../Text';

const HeroWrapper = styled.div`
  padding: 0 2rem;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  border-radius: 100%;
  width: 25rem;
  height: 25rem;
  background: ${GRADIENT.Sunset};
  color: ${COLOR.White};
  opacity: 0.6;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 7rem;
  z-index: -1;
`;

function Hero() {
  return (
    <HeroWrapper>
      <Circle>
        <GiKiwiBird role="presentation" size="20rem" />
      </Circle>
      <H1>
        Creative, Organized, <b>Accessible</b>
      </H1>
      <P>
        <span>Hi!</span> I'm Jodi, a Computer Science undergraduate student
        graduating from the University of Nevada, Reno in May 2023. I am a{' '}
        <b>frontend software engineer</b> specializing in{' '}
        <b>responsive design</b> and <b>accessibility</b>.
      </P>
    </HeroWrapper>
  );
}

export default Hero;
