import React from 'react';
import './App.css';
import Home from './paginas/home/Home';

import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './paginas/cadastro/Cadastro';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroposts/CadastroPost';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarpost/DeletarPost';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import store from './store/store';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store={store}>
       <ToastContainer />
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cadastro'>
            <Cadastro />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/postagens'>
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
