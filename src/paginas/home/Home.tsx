import { homedir } from "os";
import React, { useEffect } from "react";
import { Box, Container, Paper, Button, Typography, Grid } from "@mui/material";
import './Home.css';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";
import Carousel from 'react-elastic-carousel';
import CarouselComponent from "../../components/estaticos/caroucel/CarouselComponent";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            history.push("/login")
        }
    }, [token])
    return (
        <>
       
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor6 margin">
                <Grid alignItems="center" item xs={6} className="margin">
                    <Box paddingX={1} >
                        <Box>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#e0dfdf", fontWeight: "bold" }}>
                                <img src="https://cdn-icons-png.flaticon.com/512/188/188996.png" alt="" width="60px" height="60px" className='imagem' />Dev Dex</Typography>
                        </Box>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#e0dfdf", fontWeight: "bold" }}>a Dev Dex é uma enciclopédia virtual portátil de alta tecnologia que os Desenvolvedores Pokémon transportam para registra todas as espécies diferentes de linguagens, softwares e habilidades que são adquiridas durante a sua jornada como desenvolvedores.  </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} container direction="row">
                    <Box p={1}>
                        <img src="https://www.papyswarriors.com/medias/images/pokedex-pokemon-go.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                </Grid>
            </Grid>
            <Grid xs={12} >
                <Box className="cor6" >
                    <CarouselComponent />
                </Box>
            </Grid>
            <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabPostagem />
                </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="coresb">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} marginTop='20px'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#1C2226", fontWeight: "bold" }}>Bem vindo Treinador!! </Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#1C2226", fontWeight: "bold" }}>Todo o desenvolvimento da plataforma e o codigo fonte, estará disponivel no nosso GitHub </Typography>
                        <Box display="flex" justifyContent="center" className="box1">
                            <a href="https://github.com/tymoria172/React" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/github/github-original-wordmark.svg" alt="" width="80px" height="80px" className='imagem2' /></a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} container direction="row">
                    <Box p={1}>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor6">
                <Grid alignItems="center" item xs={6}>
                    <Box p={1}>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={1} marginTop='20px'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>TypeScript 👻</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>Os tipos Fantasma e Sombrio são supereficazes contra os mesmos tipos. Na Geração VI, a única diferença entre eles é que os Movimentos de tipo Sombrio não são muito eficazes em Lutador ou Fada, enquanto os Movimentos do tipo Fantasma não afetam Pokémon Normais. </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" className="box1">
                        <img src="https://cdn.discordapp.com/attachments/882022012170678324/907696517060640778/js.png" alt="" width="80px" height="80px" className='imagem2' />
                    </Box>
                </Grid>

            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor6">
                <Grid item xs={4}>
                    <Box>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>TypeScript 👻</Typography>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png" alt="Eletric Pokemon" width="300px" height="300px" />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>TypeScript 👻</Typography>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png" alt="Eletric Pokemon" width="300px" height="300px" />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>TypeScript 👻</Typography>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png" alt="Eletric Pokemon" width="300px" height="300px" />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box justifyContent="center" alignItems="center" >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" style={{ color: "#729F3F", fontWeight: "bold" }}>Spring</Typography>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png" alt="Eletric Pokemon" width="300px" height="300px" className='imageali' />
                    </Box>
                </Grid>

            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor4">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} marginTop='20px'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#0D47A1", fontWeight: "bold" }}>CSS 🌀</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#0D47A1", fontWeight: "bold" }}>A primeira geração foi, inclusive, a que mais criou Pokémon e Movimentos aquáticos. Atualmente, estes números chegam a 164 Pokémon e 53 Movimentos. Isso provavelmente é uma alusão ao nosso mundo, cuja superfície é 75% composta por água </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" className="box1">
                        <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="" width="80px" height="80px" className='imagem2' />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={1}>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>

                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor5">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} marginTop='20px'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#0E491C", fontWeight: "bold" }}>Spring🍃</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#0E491C", fontWeight: "bold" }}>O tipo Planta é um dos 18 tipos de Pokémon que existem. É super efetivo contra os pokémons do tipo: Água, Terra e Pedra. Não é muito efetivo contra pokémon do tipo: Inseto, Fogo, Voador, Gelo e Veneno
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" className="box1">
                        <img src="https://raw.githubusercontent.com/tymoria172/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/spring/spring-plain-wordmark.svg" alt="" width="80px" height="80px" className='imagem2' />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={1}>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                </Grid>
                
            </Grid>
        </>
    );

}

export default Home;