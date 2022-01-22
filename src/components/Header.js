import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULTSUBREDDIT } from '../constants';
import { StyledHeader } from '../styles/Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/"><img src="./images/logo.svg" alt="logo" /></Link>
      <nav>
        <ul>
          <li>
            <Link to={`/search/${DEFAULTSUBREDDIT}`}>Search</Link>
          </li>
          <li>
            <a href="/#how-it-works">How it works</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
