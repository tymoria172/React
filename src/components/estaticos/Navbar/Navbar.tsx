import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button,Box} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import "./Navbar.css";



function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} color="#1C2226">
      <AppBar position="static" className="corNav">
        <Toolbar>
          <IconButton className="corNav"
            size="large"
            edge="start"
           
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <Icon/>
          </IconButton>
            <Box p={1}><img src="https://cdn-icons-png.flaticon.com/512/188/188954.png" alt="" width="50px" height="50px" /></Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
           Pokemon Pedia
          </Typography>
          <Button  color="inherit">Login</Button>
          <Button color="inherit">Postagens</Button>
          <Button color="inherit">Temas</Button>
          <Button color="inherit">Cadastrar</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    )
}

export default Navbar;
