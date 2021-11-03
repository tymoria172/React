import React from 'react';
import './Cadastro.css';
import { Box, Container, Paper, Button, Typography, Grid, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { grid } from '@material-ui/system';

function Cadastro() {
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='corcad'>
            <Grid  alignItems='center' xs={6}>
                <Box paddingX={10}>
                    <form >
                        <Typography variant="h3" gutterBottom color="white" component='h3'
                        align='center' style={{ fontWeight: 'bold'}}> Cadastrar </Typography>
                        <TextField
                          id="nome"
                          label="nome"
                          variant='standard'
                          name='nome'
                          margin='normal'
                          fullWidth />
                        <TextField
                          id="usuario"
                          label="usuário"
                          variant='standard'
                          name='usuário'
                          margin='normal'
                          type='email'
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
                             <Link to='/login' className='text-decorator-none'>
                                <Button type='submit' variant='contained' style={{backgroundColor: '#1C2226'}}>
                                 cadastrar
                                </Button>
                             </Link>
                          </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' color='white'>
                                ja tem uma conta?
                                
                            </Typography>
                        </Box>
                        <a href="http://localhost:3000/login" className='text-decorator-none'>
                        <Typography  variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}  color='white'> 
                        Logar
                        </Typography>
                        </a>
                    </Box>
                </Box>
            </Grid >

            <Grid xs={6} style={{ 
                backgroundImage:`url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png)`,
                backgroundRepeat: 'no-repeat', width:'100vh', minHeight:'100vh', backgroundSize:'cover',
                backgroundPosition:'center'
            }}>


            </Grid>
        </Grid>
    )
}

export default Cadastro;