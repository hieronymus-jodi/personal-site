import styled from 'styled-components';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa';
import { COLOR } from '../../constants';
import { H2, P as BaseP } from '../Text';

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
`;

const DecorativeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 8rem;
  max-height: 8rem;
  min-width: 8rem;
  max-height: 8rem;
  background: ${COLOR.Pastel_Purple};
  color: ${COLOR.White};
  border-radius: 100%;
  margin-inline-end: 2rem;
`;

const TextWrapper = styled.div``;

const P = styled(BaseP)`
  margin-block-start: 2rem;
`;

function GetIcon(icon: string) {
  switch (icon) {
    case 'magnifying-glass':
      return <RxMagnifyingGlass role="presentation" size="6rem" />;
  }
}

function ArrowLinkCard({
  heading,
  description,
  href,
  icon,
}: ArrowLinkCardProps) {
  return (
    <LinksCardWrapper href={href}>
      <LinksCardContent>
        <DecorativeIcon>{GetIcon(icon)}</DecorativeIcon>
        <TextWrapper>
          <H2>{heading}</H2>
          <P>{description}</P>
        </TextWrapper>
        <div>
          <FaArrowRight role="presentation" size="2.5rem" />
        </div>
      </LinksCardContent>
    </LinksCardWrapper>
  );
}

export default ArrowLinkCard;
