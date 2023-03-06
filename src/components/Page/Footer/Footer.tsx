import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import { COLOR, SCREEN_WIDTH } from '../../../constants';

const FooterWrapper = styled.div`
  background: ${COLOR.Dark_Purple};
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    flex-direction: row;
  }
`;

const FooterLink = styled.span`
  color: ${COLOR.White};
  font-size: 1.8rem;
  font-weight: bold;

  a {
    color: inherit;
    font-size: inherit;
  }
`;

const LinkDivider = styled.hr`
  width: 5rem;
  border: 1px solid ${COLOR.White};
  margin: 1.2rem 0;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    width: 0rem;
    height: 3rem;
    margin: 0 1.6rem;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <BsThreeDots role="presentation" size="4rem" color={COLOR.White} />
      <LinkWrapper>
        <FooterLink>
          Email: <a href="mailto: jodihieron@gmail.com">jodihieron@gmail.com</a>
        </FooterLink>
        <LinkDivider />
        <FooterLink>
          GitHub:{' '}
          <a href="https://github.com/hieronymus-jodi">hieronymus-jodi</a>
        </FooterLink>
        <LinkDivider />
        <FooterLink>
          {/* TODO: Get CodeSandbox username */}
          Code Sandbox:{' '}
          <a href="https://github.com/hieronymus-jodi">hieronymus-jodi</a>
        </FooterLink>
      </LinkWrapper>
    </FooterWrapper>
  );
}

export default Footer;
