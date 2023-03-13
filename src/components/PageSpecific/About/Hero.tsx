import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import { COLOR, SCREEN_WIDTH } from '../../../constants';
import { H1, P } from '../../Text';

const HeroWrapper = styled.div`
  padding: 2rem 3.5rem;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
    padding: 3rem 5rem;
    flex-flow: row;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    padding: 5rem 15rem;
  }
`;

const Circle = styled.div`
  border-radius: 100%;
  min-width: 25rem;
  max-width: 25rem;
  min-height: 25rem;
  max-height: 25rem;
  background: ${COLOR.Dark_Purple};
  color: ${COLOR.White};

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    min-width: 30rem;
    max-width: 30rem;
    min-height: 30rem;
    max-height: 30rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    gap: 2.5rem;
  }
`;

function Hero() {
  return (
    <HeroWrapper>
      <Circle>
        <FaGraduationCap role="presentation" size="20rem" />
      </Circle>
      <TextWrapper>
        <H1>About Me</H1>
        <P>
          <span>Hi!</span> I'm Jodi, a Computer Science undergraduate student
          graduating from the University of Nevada, Reno in May 2023. I am a{' '}
          <b>frontend software engineer</b> specializing in{' '}
          <b>responsive design</b> and <b>accessibility</b>. I'm very passionate
          about women in STEM.
        </P>
      </TextWrapper>
    </HeroWrapper>
  );
}

export default Hero;
