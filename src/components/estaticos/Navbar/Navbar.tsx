import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import "./Navbar.css";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} color="#1C2226">
        <AppBar position="static" className="corNav">
          <Toolbar>
            <Box p={1}><img src="https://cdn-icons-png.flaticon.com/512/188/188954.png" alt="" width="50px" height="50px" /></Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              Pokemon Pedia
            </Typography>
            <Link to='/login' className='text-decorator-none'>
              <Button color="inherit">Logout</Button>
            </Link>
            <Button color="inherit">Postagens</Button>
            <Button color="inherit">Temas</Button>
            <Link to='/cadastro' className='text-decorator-none'>
              <Button color="inherit">Cadastrar</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;
