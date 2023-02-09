import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

interface Props {
  isAutomatic: boolean;
}

interface numberPickerMapProps {
  numberOfFields: number;
}

const NumberPickerMap: React.FunctionComponent<numberPickerMapProps> = ({
  numberOfFields,
}) => {
  const [error, setIsError] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      {Array.from({ length: numberOfFields }, (_, index) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const maxNumber= isPow?16:46
          if (+e.target.value > maxNumber) setIsError(true);
          else {
            setIsError(false)
            let copyOfValues = [...value];
            copyOfValues[index] = e.target.value;
            setValue([...copyOfValues]);
          }
        };
        const id = "number" + index;
        const isPow = index === numberOfFields - 1;
        return (
          <>
            <TextField
              required
              key={id}
              id={id}
              name="number"
              label={isPow ? "SuperBall: " : "Numero: "}
              type="number"
              autoComplete="number"
              variant="outlined"
              error={error}
              helperText={`Los numeros deben estar entre 0 y ${
                isPow ? "16" : "46"
              }`}
              value={value[index]}
              onChange={handleChange}
            />
          </>
        );
      })}
    </>
  );
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
      {NumberPickerMap({ numberOfFields: 5 })}
    </Box>
  );
};

export default NumberPicker;
