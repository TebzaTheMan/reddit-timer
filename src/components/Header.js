import React from 'react';
import { StyledHeader } from '../styles/Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <img src="./images/logo.svg" alt="" />
      <nav>
        <ul>
          <li>
            <a href="#search">Search</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
