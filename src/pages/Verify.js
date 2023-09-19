import React, { useEffect, useState } from "react";

import { useParams, useSearchParams } from "react-router-dom";
import { verify } from "src/services/AuthenticationService";

export default function Verify() {
  const [params] = useSearchParams();

  const [message, setMessage] = useState("Verificant...");

  useEffect(() => {
    async function callService() {
      if (await verify(params.get("token"))) window.location = "/";

      setMessage("Token Expired...");
      window.alert(
        "El correu ha caducat, intenta fer login un altre cop per a que tornis a rebre el correu."
      );
      // window.location = "/login";
    }
    callService();
  }, []);

  return <>{message}</>;
}
