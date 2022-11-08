import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/Copyright/Copyright";
import { Outlet } from "react-router-dom";

const theme = createTheme();

const BalotoCheckout: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ mb: 5 }}
            >
              COMPRA TU LOTERIA VIRTUAL
            </Typography>
            <Box sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <>
                <Outlet />
              </>
            </Box>
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default BalotoCheckout;
