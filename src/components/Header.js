import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULTSUBREDDIT } from '../constants';
import {
  Nav,
  NavItem, NavLink, NavLogo, NavMenu, StyledHeader,
} from '../styles/Header.elements';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/"><NavLogo src="./images/logo.svg" alt="logo" /></Link>
      <Nav>
        <NavMenu>
          <NavItem>
            <NavLink to={`/search/${DEFAULTSUBREDDIT}`}>Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="a" href="/#how-it-works">How it works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="a" href="/#about">About</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </StyledHeader>
  );
}
