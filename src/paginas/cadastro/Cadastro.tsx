import React, {useState, useEffect, ChangeEvent} from 'react';
import { useHistory } from 'react-router';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './Cadastro.css';
import { Box, Container, Paper, Button, Typography, Grid, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



function Cadastro() {

    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        toast.success('Usuario cadastrado com sucesso!!', {
            position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }else{
            toast.error('Dados do usuario inconsistentes. Por favor revisar a senha!!', {
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

        <Grid container direction='row' justifyContent='center' alignItems='center' className='corcad'>
            <Grid xs={6} style={{
                backgroundImage: `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            </Grid>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit} >
                        <Typography variant="h3" gutterBottom color="white" component='h3'
                            align='center' style={{ fontWeight: 'bold' }}> Cadastrar </Typography>
                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="nome"
                            variant='standard'
                            name='nome'
                            margin='normal'
                            fullWidth />
                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="usuario"
                            variant='standard'
                            name='usuario'
                            margin='normal'
                            
                            fullWidth />
                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant='standard'
                            name='senha'
                            type='password'
                            margin='normal'
                            fullWidth />
                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmasenha"
                            label="confirmarSenha"
                            variant='standard'
                            name='confirmasenha'
                            type='password'
                            margin='normal'
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' style={{ backgroundColor: '#1C2226' }}>
                                cadastrar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' color='white'>
                                Já tem uma conta?

                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }} color='white'>
                                Logar
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid >


        </Grid>
    )
}

export default Cadastro;