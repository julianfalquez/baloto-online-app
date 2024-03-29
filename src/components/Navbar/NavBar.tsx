import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routeUtils";
import logoBaloto from "../../assets/logoBaloto.png";
import logoColJuegos from "../../assets/logoColJuegos.jpg";
import logoColJuegos2 from "../../assets/logoColJuegos2.jpg";
import useStyles from "./navBarStyles";

const pages = ["Inicio", "¿Qué es Baloto?", "Resultados", "Puntos Baloto"];

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="absolute"
      elevation={0}
      color="transparent"
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar className={classes.toolbar}>
        <Link to={routes.MENU}>
          <img src={logoBaloto} alt="logoBaloto" />
          <img src={logoColJuegos} alt="logoColJuegos"/>
          <img src={logoColJuegos2} alt="logoColJuegos2"/>
        </Link>
        <Box>
          {pages.map((navItem) => (
            <Button>{navItem}</Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
