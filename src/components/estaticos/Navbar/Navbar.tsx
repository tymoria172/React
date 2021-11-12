import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, } from "@mui/material";
import "./Navbar.css";
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';



function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
      toast.info('Usuário deslogado', {
        position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }
  var navbarComponent;

  if (token != "") {
    navbarComponent = <Box sx={{ flexGrow: 1 }} color="#1C2226">
      <AppBar position="absolute" className="corNav">
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
  }
  return (
    <>
      {navbarComponent}
    </>
  )
}
export default Navbar;
