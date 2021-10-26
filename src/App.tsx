import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
      <Home/>
     <Footer/>
    </>
  );
}

export default App;
