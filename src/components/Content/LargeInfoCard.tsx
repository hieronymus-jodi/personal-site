import styled from 'styled-components';
import { ReactNode, useRef } from 'react';

import { COLOR, SCREEN_WIDTH } from '../../constants';
import { P as BaseP } from '../Text';
import FigureLogo from '../../images/figure-logo.png';

type LargeInfoCardProps = {
  /**
   * The text that appears in the h2 - Should be the company the experience was at
   */
  location: string;
  /**
   * The text that appears in the h3 - My title during the experience
   */
  role: string;
  /**
   * The text that appears below the header to provide context
   */
  description: ReactNode;
  /**
   * The icon that shows in the decorative bubble
   */
  icon: string;
};

const CardContent = styled.div`
  display: flex;
  align-items: center;
  background: ${COLOR.White};
  border-radius: 15px;
  box-shadow: 10px 10px ${COLOR.Pastel_Purple};

  padding: 3rem 2rem;
  color: ${COLOR.Dark_Purple};

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    flex-direction: column;
    padding: 2rem 3rem 2.5rem;
  }
`;

const DecorativeIcon = styled.div`
  margin-inline-end: 2rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    margin-block-end: 1.5rem;
  }
`;

const P = styled(BaseP)`
  margin-block-start: 0.8rem;
`;

const H3 = styled.h3`
  font-size: 2.6rem;

  span {
    display: block;
    margin-block-start: 0.4rem;
    font-size: 2rem;
    font-weight: normal;
  }
`;

function GetLogo(icon: string, windowSize: number) {
  const DesktopWidthNum = Number(
    SCREEN_WIDTH.Desktop.substring(0, SCREEN_WIDTH.Desktop.length - 2)
  ); // Removes 'px' at the end
  let baseSize = windowSize < DesktopWidthNum ? 1 : 1.5;
  switch (icon) {
    case 'figure':
      return (
        <img
          src={FigureLogo}
          width={80 * baseSize}
          alt="Logo for Figure Technologies"
        />
      );
  }
}

function LargeInfoCard({
  location,
  role,
  description,
  icon,
}: LargeInfoCardProps) {
  const windowSize = useRef(window.innerWidth);
  return (
    <CardContent>
      <DecorativeIcon>{GetLogo(icon, windowSize.current)}</DecorativeIcon>
      <div>
        <H3>
          {location}
          <span>{role}</span>
        </H3>
        <P>{description}</P>
      </div>
    </CardContent>
  );
}

export default LargeInfoCard;
