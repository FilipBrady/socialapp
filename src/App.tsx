import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
