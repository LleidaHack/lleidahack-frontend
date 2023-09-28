import React, { useEffect, useState } from "react";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { resendVerification, verify } from "src/services/AuthenticationService";

export default function Verify() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState("Verificant...");

  useEffect(() => {
    async function callService() {
      const res = await verify(params.get("token"));
      console.log(params.get("token"))
      console.log(res)
      if (res.sucess) navigate("/");

      setMessage("Token Expired...");

      let mail;
      while (
        !(mail = window.prompt(
          "Introdueix el teu mail per tornar a general el token",
        ))
      );

      resendVerification(mail);
      window.location = "/hackeps/login";
    }
    callService();
  }, []);

  return <>{message}</>;
}
