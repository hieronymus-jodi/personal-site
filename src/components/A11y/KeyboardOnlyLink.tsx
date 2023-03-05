import styled from "styled-components";
import { COLOR } from "../../constants";

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