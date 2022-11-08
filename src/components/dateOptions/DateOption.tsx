import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import NumberPicker from "../NumberPicker/NumberPicker";
import dayjs, { Dayjs } from "dayjs";
import { dateOptions, dateType } from "../../pages/balotoCheckout/utils";
import { Calendar } from "../Calendar/Calendar";
import { NavCheckoutButtons } from "../navCheckoutButtons/NavCheckoutButtons";
import { useAutomatic } from "../../hooks/useAutomatic";
import { routes } from "../../utils/routeUtils";

interface Props {
  dateType: dateType;
}

export const DateOption: React.FC<Props> = ({ dateType }) => {
  const { isAutomatic, handleAutomatic } = useAutomatic();
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  return (
    <>
      <FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={isAutomatic} onChange={handleAutomatic} />
            }
            label="Automatico"
          />
          <FormControlLabel
            disabled={!isAutomatic}
            control={<Checkbox />}
            label="Revancha"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={!isAutomatic} onChange={handleAutomatic} />
            }
            label="Escoge tu numero"
          />
          <FormControlLabel
            disabled={isAutomatic}
            control={<Checkbox />}
            label="Revancha"
          />
        </div>
        {dateType === dateOptions.DATE && (
          <Calendar value={value} setNewValue={setValue} />
        )}
        <NumberPicker isAutomatic={isAutomatic} />
      </FormGroup>
      <NavCheckoutButtons
        navigateNext={routes.RECEIPT}
        navigateBack={routes.MENU}
      />
    </>
  );
};
