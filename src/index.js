import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/search" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
