import styled from 'styled-components';
import { COLOR, FONT, SCREEN_WIDTH } from '../../../constants';
import { LargeInfoCard } from '../../Content';

const ExperienceWrapper = styled.div`
  padding: 3rem 2rem;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
  background-color: ${COLOR.Dark_Purple};

  @media only screen and (min-width: ${SCREEN_WIDTH.Tablet}) {
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
  }
`;

const H2 = styled.h2`
  font-family: ${FONT.Script};
  font-size: 3.2rem;
  font-weight: normal;
  color: ${COLOR.White};
`;

function Experience() {
  return (
    <ExperienceWrapper>
      <H2>Experience</H2>
      <LargeInfoCard
        location="Figure"
        role="Software Engineering Intern - Core UI and Accessibility"
        description="this"
        icon="figure"
      />
    </ExperienceWrapper>
  );
}

export default Experience;
