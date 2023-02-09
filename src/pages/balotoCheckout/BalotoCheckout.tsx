import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/Copyright/Copyright";
import { Outlet } from "react-router-dom";
import fondoFranjas from "../../assets/fondo-franjas.png";
import red from "@mui/material/colors/red";

const theme = createTheme({
  palette: {
    primary: red,
  },
});

const BalotoCheckout: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          component="main"
          maxWidth={false}
          style={{
            backgroundImage: `url(${fondoFranjas})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: " 0px 70px",
          }}
        >
          <Paper variant="outlined" sx={{ py: 8 }}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ mb: 5 }}
              style={{ color: "#020045", fontWeight: 700 }}
            >
              COMPRA TU LOTERIA VIRTUAL
            </Typography>
            <Box
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <>
                <Outlet />
              </>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default BalotoCheckout;
