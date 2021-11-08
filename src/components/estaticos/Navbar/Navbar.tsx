import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, } from "@mui/material";
import "./Navbar.css";
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Link } from "react-router-dom";



function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('')
    alert("Usuário Deslogado!!")
    history.push('/login')

  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} color="#1C2226">
        <AppBar position="static" className="corNav">
          <Toolbar>

            <Link to='/home' className='text-decorator-none'>
              <Box p={1}><img src="https://cdn-icons-png.flaticon.com/512/188/188954.png" alt="" width="50px" height="50px" /></Box>

            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dev Dex
            </Typography>

            <Link to='/home' className='text-decorator-none'>
              <Button color="inherit">Home</Button>
            </Link>

            <Link to='/postagens' className='text-decorator-none'>
              <Button color="inherit">Postagens</Button>
            </Link>

            <Link to='/temas' className='text-decorator-none'>
              <Button color="inherit">Temas</Button>
            </Link>

            <Link to='/formularioTema' className='text-decorator-none'>
              <Button color="inherit">cadastrar tema</Button>
            </Link>

            <Box mx={1} onClick={goLogout}>
            <Link to='/cadastro' className='text-decorator-none'>
              <Button color="inherit">Logout</Button>
            </Link>
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;
