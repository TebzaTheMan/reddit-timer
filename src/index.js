import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './styles/Global';
import Theme from './styles/Theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<App />} />
        <Route path="/search" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
