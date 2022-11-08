import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  navigateBack: string;
  navigateNext?: string;
  isReceipt?: boolean;
}

export const NavCheckoutButtons: React.FC<Props> = ({
  navigateBack,
  navigateNext='',
  isReceipt = false,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(navigateBack);
  };

  const handleNext = () => {
    navigate(navigateNext);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <>
        <Button onClick={handleBack} variant={isReceipt ? "contained":"text"} sx={{ mt: 3, ml: 1 }}>
          {isReceipt ? "Back to menu" : "Back"}
        </Button>
        {!isReceipt && (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {"Place order"}
          </Button>
        )}
      </>
    </Box>
  );
};
