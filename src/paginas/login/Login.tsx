import React, { ChangeEvent, useState, useEffect } from 'react';
import './Login.css';
import { Box, Container, Paper, Button, Typography, Grid, TextField } from "@mui/material";
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import PropTypes from 'prop-types';
import { grid } from '@material-ui/system';
import Userlogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';


function Login() {
    
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<Userlogin>(
    {
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
        useEffect(() => {
            if(token != ''){
                dispatch(addToken(token));
                history.push('/home')
            }

        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{

            await login(`/usuarios/logar`, userLogin, setToken)
            

            
            toast.success('Usuario logado com sucesso!!', {
                position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

        } catch(error){
            toast.error('Dados do usuario inconsistentes!!!', {
                position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            
        }
    }

    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='corlog'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit} >
                        <Typography variant="h3" gutterBottom color="white" component='h3'
                            align='center' style={{ fontWeight: 'bold' }}> Entrar </Typography>
                        <TextField
                            value={userLogin.usuario}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="usuario"
                            variant='standard'
                            name='usuario'
                            margin='normal'
                            fullWidth />
                        <TextField
                            value={userLogin.senha}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant='standard'
                            name='senha'
                            type='password'
                            margin='normal'
                            fullWidth />
                        <Box marginTop={2} textAlign='center' >
                            
                                <Button type='submit' variant='contained' style={{ backgroundColor: '#1C2226' }}>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' color='white'>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastro' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }} color='white'>
                                Cadastre-se
                            </Typography>
                        </Link>


                    </Box>
                </Box>
            </Grid >

            <Grid xs={6} style={{
                backgroundImage: `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>


            </Grid>
        </Grid>
    )
}

export default Login;