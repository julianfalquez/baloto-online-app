import { Box, Button } from "@mui/material";
import React from "react";
import {  useNavigate } from "react-router-dom";
import { routes } from "../../utils/routeUtils";

const BuyMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        onClick={() => navigate(routes.TODAY)}
        sx={{ mt: 3, ml: 25, mr: 25 }}
      >
        Ticket para sorteo de Hoy
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate(routes.DATE)}
        sx={{ mt: 3, ml: 25, mr: 25 }}
      >
        Ticket para sorteo de otra fecha
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate(routes.SUBSCRIPTION)}
        sx={{ mt: 3, ml: 25, mr: 25 }}
      >
        Subscripcion
      </Button>
    </Box>
  );
};

export default BuyMenu;
