import styled from 'styled-components';
import { COLOR, FONT } from '../../constants';

export const H1 = styled.h1`
  font-size: 3.6rem;
  color: ${COLOR.Dark_Purple};
  font-family: ${FONT.Script};
  text-align: center;
  font-weight: normal;
  margin-block-start: 7rem;

  b {
    font-family: inherit;
    font-size: inherit;
    font-style: italic;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
`;

export const P = styled.p`
  font-size: 1.6rem;
  color: ${COLOR.Dark_Purple};
  margin-block-start: 7rem;
  margin-block-end: 2rem;

  span {
    font-size: inherit;
    font-family: ${FONT.Script};
  }

  b {
    font-size: inherit;
  }
`;
