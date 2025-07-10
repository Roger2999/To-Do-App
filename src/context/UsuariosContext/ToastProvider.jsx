import { useEffect, useRef, useState } from "react";
import { ToastContex } from "./ToastContext";

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const toastRef = useRef(null);
  useEffect(() => {
    if (showToast && toastRef.current) {
      const toast = window.bootstrap.Toast.getOrCreateInstance(
        toastRef.current
      );
      toast.show();
    }
  }, [showToast]);

  return (
    <ToastContex.Provider
      value={{ toastRef, showToast, setShowToast, toastMsg, setToastMsg }}
    >
      {children}
    </ToastContex.Provider>
  );
};
