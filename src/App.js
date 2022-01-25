import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { ContentContainer } from './styles/Global';
import Theme from './styles/Theme';
import Header from './components/Header';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <ContentContainer>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search/:subreddit" element={<Search />} />
        </Routes>
      </ContentContainer>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
