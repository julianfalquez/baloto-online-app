import React from "react";
import useStyles from "./footerStyles";
import onjLogo from "../../assets/onj.png";
import { Box, Container, Typography, createTheme } from "@mui/material";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img src={onjLogo} alt="onjLogo" />
      <Container sx={{ display: "flex" }} className={classes.footerContainer}>
        <Box className={classes.footerElement}>
          <p className={classes.text}>
            Baloto es operado por el Operador Nacional de Juegos S.A.S., es una
            Sociedad conformada por el Grupo Gelsa y Redcolsa, dos de las
            compañias transaccionales con mayor experiencia en el sector
            multiservicios.
          </p>
          <p className={classes.text}>Contacto</p>
        </Box>
        <Box className={classes.footerElement}>
          <p className={classes.text}>
            Mapa de navegación
            </p>
            <ul className={classes.text}>
               <li>
               ¿Qué es Baloto? 
                </li> 
                <li>
               ¿Qué es Baloto? 
                </li> 
                <li>
               ¿Qué es Baloto? 
                </li> 
                <li>
               ¿Qué es Baloto? 
                </li> 
                <li>
               ¿Qué es Baloto? 
                </li> 
            </ul>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
