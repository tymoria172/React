import React from 'react';
import './Login.css';
import { Box, Container, Paper, Button, Typography, Grid, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { grid } from '@material-ui/system';

function login() {
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='corlog'>
            <Grid  alignItems='center' xs={6}>
                <Box paddingX={10}>
                    <form >
                        <Typography variant="h3" gutterBottom color="white" component='h3'
                        align='center' style={{ fontWeight: 'bold'}}> Entrar </Typography>
                        <TextField
                          id="usuario"
                          label="usuário"
                          variant='standard'
                          name='usuário'
                          margin='normal'
                          fullWidth />
                          <TextField
                          id="senha"
                          label="senha"
                          variant='standard'
                          name='senha'
                          type='password'
                          margin='normal'
                          fullWidth />
                          <Box marginTop={2} textAlign='center' >
                             <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' style={{backgroundColor: '#1C2226'}}>
                                 logar
                                </Button>
                             </Link>
                          </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' color='white'>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <a href="http://localhost:3000/cadastro" className='text-decorator-none'>
                        <Typography  variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}  color='white'> 
                            Cadastre-se 
                        </Typography>
                        </a>
                    </Box>
                </Box>
            </Grid >

            <Grid xs={6} style={{ 
                backgroundImage:`url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png)`,
                backgroundRepeat: 'no-repeat', width:'100vh', minHeight:'100vh', backgroundSize:'cover',
                backgroundPosition:'center'
            }}>


            </Grid>
        </Grid>
    )
}

export default login;