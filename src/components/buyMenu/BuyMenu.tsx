import { Box, Button } from "@mui/material";
import React from "react";
import { dateType, dateOptions } from "../../pages/balotoCheckout/utils";
interface Props {
  sorteoFecha: (arg0: dateType) => void;
  sorteoSubscripcion: () => void;
}

const BuyMenu: React.FC<Props> = ({ sorteoFecha, sorteoSubscripcion }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "70px",
        marginBottom: "70px",
      }}
    >
      <Button
        variant="contained"
        onClick={() => sorteoFecha(dateOptions.TODAY)}
        sx={{ mt: 3, ml: 25, mr: 25 }}
      >
        Ticket para sorteo de Hoy
      </Button>
      <Button
        variant="contained"
        onClick={() => sorteoFecha(dateOptions.DATE)}
        sx={{ mt: 3, ml: 25, mr: 25 }}
      >
        Ticket para sorteo de otra fecha
      </Button>
      <Button
        variant="contained"
        onClick={sorteoSubscripcion}
        sx={{ mt: 3, ml: 25, mr: 25 }}
      >
        Subscripcion
      </Button>
    </Box>
  );
};

export default BuyMenu;
