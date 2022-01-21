import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Call-to-action button points to /search/javascript', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const hashLink = screen.getByRole('link', { name: /show me the best time/i });
  expect(hashLink).toHaveAttribute('href', '/search/javascript');
});
