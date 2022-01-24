import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLink, StyledFooter } from '../styles/Footer.elements';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLink as="a" href="https://profy.dev/employers">profy.dev</FooterLink>
      <Link to="/"><img src="/images/compact-logo.svg" alt="compact" /></Link>
      <FooterLink to="terms">Terms & Privacy</FooterLink>
    </StyledFooter>
  );
}
