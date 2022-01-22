import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DEFAULTSUBREDDIT } from '../constants';
import Theme from '../styles/Theme';
import Info from '../components/Info';
import Hero from '../components/Hero';

describe('Hero Section', () => {
  test(`Call-to-action button points to /search/${DEFAULTSUBREDDIT}`, () => {
    render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const hashLink = screen.getByRole('link', { name: /show me the best time/i });
    expect(hashLink).toHaveAttribute('href', `/search/${DEFAULTSUBREDDIT}`);
  });
});

describe('Info Section', () => {
  test.each`
 link | hash
  ${'profy.dev'} | ${'https://profy.dev'}
  ${'Click here for more information'} | ${'https://profy.dev/employers'}

`('"$link" points to $hash', ({ link, hash }) => {
    render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <Info />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const hashLink = screen.getByRole('link', { name: new RegExp(link, 'i') });
    expect(hashLink).toHaveAttribute('href', hash);
  });
});
