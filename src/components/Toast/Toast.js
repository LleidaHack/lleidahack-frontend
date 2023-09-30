import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, success, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Cerrar el toast automáticamente después de 3 segundos

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={`toast ${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Toast;
