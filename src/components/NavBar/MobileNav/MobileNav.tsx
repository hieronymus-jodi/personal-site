import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { COLOR, FONT, GRADIENT } from "../../../constants";

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${GRADIENT.Sunset};
  padding: 1rem 2rem;
`;

const Name = styled.span`
  font-family: ${FONT.Script};
  color: ${COLOR.Dark_Purple};
  font-size: 2.6rem;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    svg {
        color: ${COLOR.Dark_Purple};
      }
`;

const NavLinkWrapper = styled.ul<{$hidden?: boolean}>`
    ${(props) =>
        props.$hidden &&
        css`
        display: none;
        `}

        list-style-type: none;
        padding-inline-start: 0px;
        width: 100%;

`;

const NavLink = styled.a`
    background: ${COLOR.Dark_Purple};
    color: ${COLOR.White};
    display: block;
    width: 100%;
    font-size: 2rem;
    padding: 1.5rem 2rem;
`;

function MobileNav() {
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    return (
        <>
        <Nav>
            <Name>Jodi Hieronymus</Name>
            <MenuButton onClick={() => {setIsMenuHidden(!isMenuHidden)}}>
                <GiHamburgerMenu role="presentation" size="2.5rem" />
            </MenuButton>
            
        </Nav>
        <NavLinkWrapper $hidden={isMenuHidden}>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Blog</NavLink></li>
                <li><NavLink>Resume</NavLink></li>
                <li><NavLink>GitHub</NavLink></li>
            </NavLinkWrapper>
        </>
    );
}

export default MobileNav;