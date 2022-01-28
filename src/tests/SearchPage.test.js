import React from 'react';
import {
  screen, render,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import Theme from '../styles/Theme';
import App from '../App';

describe('Subreddit Form', () => {
  test('url search parameter matches input field value', () => {
    render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter initialEntries={['/search/javascript']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const inputField = screen.getByTestId('subreddit-input');
    expect(inputField).toHaveValue('javascript');
  });

  test('Search button onClick navigates to /search/inputted-text', () => {
    render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter initialEntries={['/search/javascript']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const inputField = screen.getByTestId('subreddit-input');
    const searchBtn = screen.getByRole('button', { name: /search/i });
    userEvent.clear(inputField);
    userEvent.type(inputField, 'reactJS');
    userEvent.click(searchBtn);
    expect(inputField).toHaveAttribute('value', 'reactJS');
  });
});
