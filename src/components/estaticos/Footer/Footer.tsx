import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Typography, Box, Grid } from '@mui/material';



function Footer() {
    return (
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#D98F07", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "#1C2226" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/andre.ricardo.73997861/" target="_blank">
                                <FacebookIcon style={{ fontSize: 60, color: "#1C2226" }} />
                            </a>
                            <a href="https://www.instagram.com/andresep20/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "#1C2226" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/andre-ricardo21/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#1C2226" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#1C2226", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Andre Ricardo de oliveira</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
