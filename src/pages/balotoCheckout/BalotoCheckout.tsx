import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/Copyright/Copyright";
import BuyMenu from "../../components/buyMenu/BuyMenu";
import { DateOption } from "../../components/dateOptions/DateOption";
import { SubscriptionOption } from "../../components/subscriptionOption/SubscriptionOption";
import Receipt from "../../components/Receipt/Receipt";
import { steps, dateOptions, dateType } from "./utils";

const theme = createTheme();

const BalotoCheckout: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [isAutomatic, setIsAutomatic] = React.useState<boolean>(false);
  const [isManual, setIsManual] = React.useState<boolean>(true);
  const [optionType, setOptionType] = React.useState<dateType>(
    dateOptions.TODAY
  );

  const handleNext = () => {
    setActiveStep(3);
  };
  const sorteoFecha = (dateType: dateType) => {
    setOptionType(dateType);
    setActiveStep(1);
  };

  const sorteoSubscripcion = () => {
    setActiveStep(2);
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  const handleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
    isManual && setIsManual(!isManual);
  };
  const handleManual = () => {
    setIsManual(!isManual);
    isAutomatic && setIsAutomatic(!isAutomatic);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <BuyMenu
            sorteoFecha={sorteoFecha}
            sorteoSubscripcion={sorteoSubscripcion}
          />
        );
      case 1:
        return (
          <DateOption
            isAutomatic={isAutomatic}
            isManual={isManual}
            handleAutomatic={handleAutomatic}
            handleManual={handleManual}
            dateType={optionType}
          />
        );
      case 2:
        return (
          <SubscriptionOption
            isAutomatic={isAutomatic}
            handleAutomatic={handleAutomatic}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              COMPRA TU LOTERIA VIRTUAL
            </Typography>
            {activeStep === steps.length ? (
              <Receipt />
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <>
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {"Place order"}
                      </Button>
                    </>
                  )}
                </Box>
              </>
            )}
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default BalotoCheckout;
