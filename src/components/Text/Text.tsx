import styled from 'styled-components';
import { COLOR, FONT, SCREEN_WIDTH } from '../../constants';

export const H1 = styled.h1`
  font-size: 3.6rem;
  color: ${COLOR.Dark_Purple};
  font-family: ${FONT.Script};
  text-align: center;
  font-weight: normal;

  b {
    font-family: inherit;
    font-size: inherit;
    font-style: italic;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    font-size: 4.8rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    font-size: 2.4rem;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${COLOR.Dark_Purple};

  span {
    font-size: inherit;
    font-family: ${FONT.Script};
  }

  b {
    font-size: inherit;
  }
`;
