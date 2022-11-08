import { Box, TextField } from "@mui/material";
import React from "react";

interface Props {
  isAutomatic: boolean;
}

const numberPickerMap = (numerOfFields: number) => {
  return Array.from({ length: numerOfFields }, (_, index) => {
    const id = "number" + index;
    return (
      <TextField
        required
        key={id}
        id={id}
        name="number"
        label={index===(numerOfFields-1)?"SuperBall: ":"Numero: "}
        type="number"
        autoComplete="number"
        variant="outlined"
      />
    );
  });
};

const NumberPicker: React.FC<Props> = ({ isAutomatic }) => {
  return (
    <Box
      style={{
        visibility: isAutomatic ? "hidden" : "visible",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      {numberPickerMap(5)}
    </Box>
  );
};

export default NumberPicker;
