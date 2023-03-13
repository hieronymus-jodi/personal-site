import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import { COLOR, GRADIENT, SCREEN_WIDTH } from '../../../constants';
import { H1 as BaseH1, P as BaseP } from '../../Text';

const ExperienceWrapper = styled.div`
  padding: 1.5rem 3.5rem;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
  background-color: ${COLOR.Dark_Purple};

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
    padding: 5rem 5rem 3rem;
    flex-flow: row;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    padding: 11rem 15rem 5rem;
  }
`;

const Circle = styled.div`
  border-radius: 100%;
  min-width: 25rem;
  max-width: 25rem;
  min-height: 25rem;
  max-height: 25rem;
  background: ${GRADIENT.Sunset};
  color: ${COLOR.Dark_Purple};
  opacity: 0.6;

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

const H1 = styled(BaseH1)`
  color: ${COLOR.White};
`;

const P = styled(BaseP)`
  color: ${COLOR.White};
`;

function Experience() {
  return (
    <ExperienceWrapper>
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
    </ExperienceWrapper>
  );
}

export default Experience;
