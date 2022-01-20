import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test.each`
 link | hash
  ${'compact'} | ${'/'}
  ${'profy.dev'} | ${'https://profy.dev/employers'}
  ${'Terms & Privacy'} | ${'/terms'}

`('"$link" points to $hash', ({ link, hash }) => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const hashLink = screen.getByRole('link', { name: new RegExp(link, 'i') });
  expect(hashLink).toHaveAttribute('href', hash);
});
