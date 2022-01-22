import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';
import Theme from '../styles/Theme';

test.each`
 link | hash
  ${'compact'} | ${'/'}
  ${'profy.dev'} | ${'https://profy.dev/employers'}
  ${'Terms & Privacy'} | ${'/terms'}

`('"$link" points to $hash', ({ link, hash }) => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={Theme}>
        <Footer />
      </ThemeProvider>
    </MemoryRouter>,
  );
  const hashLink = screen.getByRole('link', { name: new RegExp(link, 'i') });
  expect(hashLink).toHaveAttribute('href', hash);
});
