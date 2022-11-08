import { useState } from "react";

export const useAutomatic = () => {
  const [isAutomatic, setIsAutomatic] = useState(false);

  const handleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
  };
  return { isAutomatic, handleAutomatic };
};
