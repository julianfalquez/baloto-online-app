import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";
import NumberPicker from "../NumberPicker/NumberPicker";
import { useAutomatic } from "../../hooks/useAutomatic";
import { NavCheckoutButtons } from "../navCheckoutButtons/NavCheckoutButtons";
import { routes } from "../../utils/routeUtils";

export const SubscriptionOption: React.FC = () => {
  const { isAutomatic, handleAutomatic } = useAutomatic();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Mes" />
          <FormControlLabel control={<Checkbox />} label="6 Meses" />
          <FormControlLabel control={<Checkbox />} label="Anual" />
        </div>
        <h2>Sorteos por semana:</h2>
        <FormControlLabel control={<Checkbox />} label="1" />
        <FormControlLabel control={<Checkbox />} label="2" />
        <h2>Tickets por sorteo:</h2>
        <TextField
          required
          id="cant"
          name="cant"
          label="Cantidad: "
          type="number"
          autoComplete="cantidad"
          variant="standard"
        />
        <h2>Revancha:</h2>
        <FormControlLabel control={<Checkbox />} label="Si" />
        <h2>Automatico:</h2>
        <FormControlLabel
          control={
            <Checkbox checked={isAutomatic} onChange={handleAutomatic} />
          }
          label="Si"
        />
        <NumberPicker isAutomatic={isAutomatic} />
      </FormGroup>
      <NavCheckoutButtons
        navigateNext={routes.RECEIPT}
        navigateBack={routes.MENU}
      />
    </div>
  );
};
