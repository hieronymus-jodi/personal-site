import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbLeaf } from 'react-icons/tb';
import { COLOR, FONT, GRADIENT, SCREEN_WIDTH } from '../../../constants';

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${GRADIENT.Sunset};
  padding: 1rem 0;
  z-index: 999; // Should appear on top of all other content

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    padding: 1.5rem 2.5rem;
  }
`;

const Name = styled.span`
  font-family: ${FONT.Script};
  color: ${COLOR.Dark_Purple};
  font-size: 2.6rem;
  margin-inline-start: 1.5rem;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    font-size: 3.2rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-inline-end: 1.5rem;
  svg {
    color: ${COLOR.Dark_Purple};
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    display: none;
  }
`;

const NavWrapper = styled.ul<{ $hidden?: boolean }>`
  ${(props) =>
    props.$hidden &&
    css`
      display: none;
    `}

  list-style-type: none;
  padding-inline-start: 0px;
  position: absolute;
  top: 5.3rem;
  width: 100vw;

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    display: inline;
    position: relative;
    top: 0;
    width: auto;
    float: right;
    li {
      float: left;
    }
  }
`;

function NavLinkBGColor($bgColor: string) {
  switch ($bgColor) {
    case 'blue':
      return COLOR.Pastel_Blue;
    case 'pink':
      return COLOR.Pastel_Pink;
    case 'purple':
      return COLOR.Pastel_Purple;
    default: // Yellow as fallback
      return COLOR.Pastel_Yellow;
  }
}

const NavLinkWrapper = styled.a<{
  $bgColor: 'blue' | 'pink' | 'purple' | 'yellow';
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${(props) =>
    css`
      background: ${NavLinkBGColor(props.$bgColor)};
    `}
  color: ${COLOR.Dark_Purple};
  font-size: 2rem;
  font-weight: bold;
  padding: 1.25rem 2rem;
  text-decoration: none;
  transition: 0.4s;

  :hover {
    background: rgba(255, 255, 255, 0.7);
  }

  @media only screen and (min-width: ${SCREEN_WIDTH.Desktop}) {
    background: none;
    font-size: 1.6rem;
    gap: 0.25rem;
    border-radius: 25px;
  }
`;

type NavLinkProps = {
  /**
   * Content held inside the link wrapper
   */
  children?: ReactNode;
  /**
   * The color of the background
   */
  $bgColor: 'blue' | 'pink' | 'purple' | 'yellow';
  /**
   * The URL to link to
   */
  href: string;
};

const NavLink = ({ children, $bgColor, href }: NavLinkProps) => {
  return (
    <NavLinkWrapper $bgColor={$bgColor} href={href}>
      <TbLeaf role="presentation" size="2.5rem" />
      {children}
    </NavLinkWrapper>
  );
};

function NavBar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  return (
    <>
      <Nav>
        <Name>Jodi Hieronymus</Name>
        <MenuButton
          onClick={() => {
            setIsMenuHidden(!isMenuHidden);
          }}
        >
          <GiHamburgerMenu role="presentation" size="2.5rem" />
        </MenuButton>
        <NavWrapper $hidden={isMenuHidden}>
          <li>
            <NavLink $bgColor="pink" href="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink $bgColor="blue" href="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink $bgColor="purple" href="/blog">
              Blog
            </NavLink>
          </li>
          {/* TODO: Link to Resume */}
          <li>
            <NavLink $bgColor="yellow" href="/about">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink $bgColor="pink" href="https://github.com/hieronymus-jodi">
              GitHub
            </NavLink>
          </li>
        </NavWrapper>
      </Nav>
    </>
  );
}

export default NavBar;
