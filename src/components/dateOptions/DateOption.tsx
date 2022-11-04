import {
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import NumberPicker from "../NumberPicker/NumberPicker";
import dayjs, { Dayjs } from "dayjs";
import { dateOptions, dateType } from "../../pages/balotoCheckout/utils";
import { Calendar } from "../Calendar/Calendar";

interface Props {
  isAutomatic: boolean;
  handleAutomatic: () => void;
  isManual: boolean;
  handleManual: () => void;
  dateType: dateType;
}

export const DateOption: React.FC<Props> = ({
  handleAutomatic,
  handleManual,
  isAutomatic,
  isManual,
  dateType,
}) => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  return (
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
          control={<Checkbox checked={isManual} onChange={handleManual} />}
          label="Escoge tu numero"
        />
        <FormControlLabel
          disabled={!isManual}
          control={<Checkbox />}
          label="Revancha"
        />
      </div>
      {dateType === dateOptions.DATE && (
        <Calendar value={value} setNewValue={setValue} />
      )}
      <NumberPicker isAutomatic={isAutomatic} />
    </FormGroup>
  );
};
