import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <Container>
        {params => (
          <div className='App'>
            <Navigation />
            <RouterComponent />
          </div>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
