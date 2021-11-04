import { homedir } from "os";
import React from "react";
import { Box, Container, Paper, Button, Typography, Grid} from "@mui/material";
import './Home.css';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";

function Home() {
    return (
        <>
              <Grid container direction="row" justifyContent="center" alignItems="center" className="coresb">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#1C2226", fontWeight: "bold" }}>Tipo Elétrico ⚡</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#1C2226", fontWeight: "bold" }}>Pokémon elétricos são um dos tipos mais fortes em Pokémon Go porque eles têm apenas uma fraqueza real (Pokémon terrestre). Seus ataques são potencializados pelo tempo chuvoso, então espere ver muitos outros treinadores usando-os se o tempo for previsível. </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#D98F07", backgroundColor: "#1C2226", color: "#D98F07" }}>Ver Pokemons</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} container direction="row">
                    <Box p={1}>
                    <img src="https://heraldjournalism.com/wp-content/uploads/2020/07/466-Electivire.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                    
                   
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

           




            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor2">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>Tipo Fantasma 👻</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#7B62A3", fontWeight: "bold" }}>Os tipos Fantasma e Sombrio são supereficazes contra os mesmos tipos. Na Geração VI, a única diferença entre eles é que os Movimentos de tipo Sombrio não são muito eficazes em Lutador ou Fada, enquanto os Movimentos do tipo Fantasma não afetam Pokémon Normais. </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#653C5A", backgroundColor: "#1C2226", color: "#653C5A" }}>Ver Pokemons</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={1}>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                   
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>




            
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor3">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#F2D541", fontWeight: "bold" }}>Tipo Fogo 🔥</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#F2D541", fontWeight: "bold" }}>O tipo Fogo é capaz de lidar com o maior multiplicador baseado em tipo. Isso é possível sob a forte luz solar, contra um Pokémon de tipo Duplo com a Habilidade Fluffy, que possui ambos os tipos sendo fracos contra Fogo. Além disso, o Pokémon precisa estar afetado com os Movimentos Forest's Curse e Tar Shot. </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#F7630C", color: "white" }}>Ver Pokemons</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={1}>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                   
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>



            
            <Grid container direction="row" justifyContent="center" alignItems="center" className="cor4">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#0D47A1", fontWeight: "bold" }}>Tipo Água 🌀</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#0D47A1", fontWeight: "bold" }}>A primeira geração foi, inclusive, a que mais criou Pokémon e Movimentos aquáticos. Atualmente, estes números chegam a 164 Pokémon e 53 Movimentos. Isso provavelmente é uma alusão ao nosso mundo, cuja superfície é 75% composta por água </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#0D47A1", color: "white" }}>Ver Pokemons</Button>
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
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#0E491C", fontWeight: "bold" }}>Tipo Planta 🍃</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#0E491C", fontWeight: "bold" }}>O tipo Planta é um dos 18 tipos de Pokémon que existem. É super efetivo contra os pokémons do tipo: Água, Terra e Pedra. Não é muito efetivo contra pokémon do tipo: Inseto, Fogo, Voador, Gelo e Veneno </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#0E491C", color: "white" }}>Ver Pokemons</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={1}>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png" alt="Eletric Pokemon" width="450px" height="450px" />
                    </Box>
                   
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );

}

export default Home;