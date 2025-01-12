import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (text, type) => {
    setToast({ text, type });
    // console.log("heeloo" , type);

    // setTimeout(() => setToast(null), 2000);
  };

  return { toast, showToast, hideToast: () => setToast(null) };
};
