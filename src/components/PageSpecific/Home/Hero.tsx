import React from 'react';
import styled from 'styled-components';
import { GiKiwiBird } from 'react-icons/gi';
import { COLOR, GRADIENT, SCREEN_WIDTH } from '../../../constants';
import { H1, P as BaseP } from '../../Text';

const HeroWrapper = styled.div`
  padding: 1rem 3rem;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  h1 {
    margin-block-start: 7rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
    padding: 5rem 12rem 3rem;
    h1 {
      margin-inline-start: 10rem;
    }
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    padding: 11rem 20rem 5rem;
    h1 {
      margin-inline-start: 0;
      max-width: 20ch;
    }
  }
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
  top: 8rem;
  z-index: -1;

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
    top: 9rem;
    left: 13rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    top: 12rem;
    left: 25vw;
    width: 40rem;
    height: 40rem;
  }
`;

const P = styled(BaseP)`
  margin-block-start: 7rem;
  margin-block-end: 3rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
    margin-block-start: 9rem;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    margin-block-start: 14rem;
    max-width: 60rem;
  }
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
        <b>responsive design</b> and <b>accessibility</b>. I'm very passionate about women in STEM.
      </P>
    </HeroWrapper>
  );
}

export default Hero;
