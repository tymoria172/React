import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cadastro from './paginas/cadastro/Cadastro';





function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <div style={{minHeight: '100vh'}}>
          <Route exact path='/'>
              <Login/>
            </Route>
          <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/cadastro'>
              <Cadastro/>
            </Route>
          </div>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
