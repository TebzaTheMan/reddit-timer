import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { DEFAULTSUBREDDIT } from '../constants';

test(`Call-to-action button points to /search/${DEFAULTSUBREDDIT}`, () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const hashLink = screen.getByRole('link', { name: /show me the best time/i });
  expect(hashLink).toHaveAttribute('href', `/search/${DEFAULTSUBREDDIT}`);
});
