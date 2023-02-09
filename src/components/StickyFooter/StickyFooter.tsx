import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routeUtils";
import logoBaloto from "../../assets/logoBaloto.png";
import logoColJuegos from "../../assets/logoColJuegos.jpg";
import logoColJuegos2 from "../../assets/logoColJuegos2.jpg";
import useStyles from "./stickyFooterStyles";
import CountdownTimer from "../../utils/countDownTimer";
const pages = ["Inicio", "¿Qué es Baloto?", "Resultados", "Puntos Baloto"];
const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const StickyFooter = () => {
  const classes = useStyles();
  return (
    <footer className={classes.stickyFooter}>
      <Toolbar className={classes.toolbar}>
        <Link to={routes.MENU}>
          <img src={logoBaloto} alt="logoBaloto" />
        </Link>
        <h1>PRÓXIMO SORTEO SÁBADO, 21 DE ENERO</h1>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </Toolbar>
    </footer>
  );
};
export default StickyFooter;
