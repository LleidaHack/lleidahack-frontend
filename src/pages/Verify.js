import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { verify } from "src/services/AuthenticationService";

export default function Verify() {
  const { token } = useParams();

  const [message, setMessage] = useState("Verificant...");

  useEffect(() => {
    async function callService() {
      if (await verify(token)) window.location = "/";

      setMessage("Token expirat");
    }
    callService();
  }, []);

  return <>{message}</>;
}
