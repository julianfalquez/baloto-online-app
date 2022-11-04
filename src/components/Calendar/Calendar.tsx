import { DesktopDatePicker } from "@mui/x-date-pickers";
import React from "react";
import { Dayjs } from "dayjs";
import { TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props {
  value: Dayjs | null;
  setNewValue: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export const Calendar: React.FC<Props> = ({ value, setNewValue }) => {
  const handleChange = (newValue: Dayjs | null) => {
    setNewValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
