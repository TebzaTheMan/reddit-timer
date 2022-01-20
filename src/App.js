import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import Theme from './styles/Theme';
import Header from './components/Header';
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search/:subreddit" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
