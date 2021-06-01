import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import Header from './components/Header/';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;