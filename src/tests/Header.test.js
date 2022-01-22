import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { DEFAULTSUBREDDIT } from '../constants';

const defaultSearchURL = `/search/${DEFAULTSUBREDDIT}`;

test.each`
 link | hash
  ${'logo'} | ${'/'}
  ${'Search'} | ${defaultSearchURL}
  ${'About'} | ${'/#about'}
  ${'How it works'} | ${'/#how-it-works'}

`('"$link" points to $hash', ({ link, hash }) => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const hashLink = screen.getByRole('link', { name: new RegExp(link, 'i') });
  expect(hashLink).toHaveAttribute('href', hash);
});
