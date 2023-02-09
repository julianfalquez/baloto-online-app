import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routeUtils";

const BuyMenu: React.FC = () => {
  const navigate = useNavigate();
  const buttonRoutes = [
    {
      text: "Ticket para sorteo de Hoy",
      navigateFunction: () => navigate(routes.TODAY),
    },
    {
      text: "Ticket para sorteo de otra fecha",
      navigateFunction: () => navigate(routes.DATE),
    },
    { text: "Subscripcion", navigateFunction: () => navigate(routes.SUBSCRIPTION) },
  ];
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "700px",
        minWidth: "400px",
      }}
    >
      {buttonRoutes.map((routeElement) => (
        <Button
          variant="contained"
          onClick={routeElement.navigateFunction}
          sx={{ mt: 3, ml: 25, mr: 25, py:2}}
        >
          {routeElement.text}
        </Button>
      ))}
    </Box>
  );
};

export default BuyMenu;
