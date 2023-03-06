import styled from 'styled-components';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineCode, HiOutlineDocumentText } from 'react-icons/hi';
import { RiQuillPenLine } from 'react-icons/ri';

import { COLOR, SCREEN_WIDTH } from '../../constants';
import { H2, P as BaseP } from '../Text';
import { useRef, useState } from 'react';

type ArrowLinkCardProps = {
  /**
   * The text that appears in the h2 - Should be name of page
   */
  heading: string;
  /**
   * The text that appears below the header to provide context
   */
  description: string;
  /**
   * URL the link should direct to
   */
  href: string;
  /**
   * The icon that shows in the decorative bubble
   */
  icon: string;
};

const LinksCardWrapper = styled.a`
  background: ${COLOR.White};
  border: none;
  border-radius: 15px;
  box-shadow: 10px 10px ${COLOR.Pastel_Blue};
  text-decoration: none;
`;

const LinksCardContent = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;

  padding: 3rem 2rem;
  color: ${COLOR.Dark_Purple};
  opacity: 0.7;
  transition: 0.4s;

  :hover {
    opacity: 1;
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    flex-direction: column;
    padding: 2rem 3rem 2.5rem;
  }
`;

const DecorativeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 8rem;
  max-height: 8rem;
  min-width: 8rem;
  max-width: 8rem;
  background: ${COLOR.Pastel_Purple};
  color: ${COLOR.White};
  border-radius: 100%;
  margin-inline-end: 2rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    min-height: 12rem;
    max-height: 12rem;
    min-width: 12rem;
    max-width: 12rem;
    margin-inline-end: 0;
    margin-block-end: 1.5rem;
  }
`;

const P = styled(BaseP)`
  margin-block-start: 2rem;
`;

const ArrowWrapper = styled.div`
  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    align-self: end;
  }
`;

function GetIcon(icon: string, windowSize: number) {
  const DesktopWidthNum = Number(
    SCREEN_WIDTH.Desktop.substring(0, SCREEN_WIDTH.Desktop.length - 2)
  ); // Removes 'px' at the end
  let baseSize = windowSize < DesktopWidthNum ? 1 : 1.5;
  switch (icon) {
    case 'magnifying-glass':
      return (
        <RxMagnifyingGlass role="presentation" size={baseSize * 6 + 'rem'} />
      );
    case 'quill':
      return (
        <RiQuillPenLine role="presentation" size={baseSize * 5.5 + 'rem'} />
      );
    case 'document':
      return (
        <HiOutlineDocumentText
          role="presentation"
          size={baseSize * 5.5 + 'rem'}
        />
      );
    case 'code':
      return <HiOutlineCode role="presentation" size={baseSize * 5 + 'rem'} />;
  }
}

function ArrowLinkCard({
  heading,
  description,
  href,
  icon,
}: ArrowLinkCardProps) {
  const windowSize = useRef(window.innerWidth);
  return (
    <LinksCardWrapper href={href}>
      <LinksCardContent>
        <DecorativeIcon>{GetIcon(icon, windowSize.current)}</DecorativeIcon>
        <div>
          <H2>{heading}</H2>
          <P>{description}</P>
        </div>
        <ArrowWrapper>
          <FaArrowRight role="presentation" size="2.5rem" />
        </ArrowWrapper>
      </LinksCardContent>
    </LinksCardWrapper>
  );
}

export default ArrowLinkCard;
