import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from '../styles/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://profy.dev/employers">profy.dev</a>
      <Link to="/"><img src="./images/compact-logo.svg" alt="" /></Link>
      <Link to="terms">Terms & Privacy</Link>
    </StyledFooter>
  );
}
