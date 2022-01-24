import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULTSUBREDDIT } from '../constants';
import { NavLink, StyledHeader } from '../styles/Header.elements';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/"><img src="./images/logo.svg" alt="logo" /></Link>
      <nav>
        <ul>
          <li>
            <NavLink to={`/search/${DEFAULTSUBREDDIT}`}>Search</NavLink>
          </li>
          <li>
            <NavLink as="a" href="/#how-it-works">How it works</NavLink>
          </li>
          <li>
            <NavLink as="a" href="/#about">About</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
