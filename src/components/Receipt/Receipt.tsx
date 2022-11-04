import { Typography } from "@mui/material";

export const Receipt = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Gracias por tu orden.
      </Typography>
      <Typography variant="subtitle1">
        Tu orden con numero a sido creada #2001539. Te enviaremos un email a tu
        cuenta con la factura y el numero de confirmacion.
      </Typography>
    </>
  );
};
export default Receipt;
