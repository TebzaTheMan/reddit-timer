import React, { useState } from 'react';
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { DEFAULTSUBREDDIT } from '../constants';
import {
  Nav,
  NavLogo, NavMenu, NavItem, NavLink, MobileIcon,
} from '../styles/Header.elements';

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <Nav>
        <Link to="/"><NavLogo src="/images/logo.svg" alt="logo" /></Link>
        <MobileIcon onClick={handleClick}>
          {click ? <RiCloseFill /> : <RiMenu5Fill />}
        </MobileIcon>
        <NavMenu onClick={closeMobileMenu} click={click}>
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
    </header>
  );
}
