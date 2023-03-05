import styled, { css } from 'styled-components';
import { COLOR } from '../../constants';

// Hides elements visually so that they can still be accessed with screen readers
// CSS from Bootstrap
export const HiddenCss = css`
  position: absolute;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;

export const KeyboardOnlyLink = styled.a`
  background-color: ${COLOR.White};
  color: ${COLOR.Dark_Purple};
  font-size: 2rem;
  position: absolute;
  top: 5rem;
  left: 2rem;
  pointer-events: none;
  opacity: 0;
  z-index: 100;
  :focus {
    opacity: 1;
  }
`;
