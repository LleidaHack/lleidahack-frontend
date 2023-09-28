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
      console.log(params.get("token"));
      console.log(res);
      if (res.success) {
        navigate("/");
        return;
      }

      if (res.message === "User already verified") {
        navigate("/");
        return;
      }

      let mail;
      if (
        !(mail = window.prompt(
          "Introdueix el teu mail per tornar a general el token"
        ))
      );

      await resendVerification(mail);
      // navigate("/login");
    }
    callService();
  }, []);

  return <>{message}</>;
}
