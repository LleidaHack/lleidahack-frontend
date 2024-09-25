import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resendVerification, verify } from "src/services/AuthenticationService";

export default function Verify() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const message = "Verificant...";

  useEffect(() => {
    async function callService() {
      const res = await verify(params.get("token"));
      if (res.success) {
        navigate("/");
        return;
      }

      let mail;
      if (
        !(mail = window.prompt(
          "Introdueix el teu mail per tornar a generar el token",
        ))
      );

      await resendVerification(mail);
      navigate("/login");
    }
    callService();
  }, [navigate, params]);

  return <>{message}</>;
}
