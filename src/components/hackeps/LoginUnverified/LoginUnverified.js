import React, { useEffect, useState } from "react";
import Button from "src/components/buttons/Button";
import { useNavigate } from "react-router-dom";
import {
  resendVerification,
  localVerificationAvailable,
  verifyLocalAccount,
} from "src/services/AuthenticationService";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const LoginUnverified = ({ email }) => {
  const navigate = useNavigate();
  const [localAvailable, setLocalAvailable] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [localError, setLocalError] = useState("");
  useEffect(() => {
    let active = true;
    localVerificationAvailable()
      .then((enabled) => {
        if (active) setLocalAvailable(enabled);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);
  const verifyLocally = async () => {
    setVerifying(true);
    setLocalError("");
    try {
      const result = await verifyLocalAccount(email);
      if (result.success) setVerified(true);
      else
        setLocalError(
          result.errCode === 429
            ? "Massa intents. Espera una estona i torna-ho a provar."
            : "No s'ha pogut verificar el compte de prova.",
        );
    } catch {
      setLocalError("No es pot connectar amb el servidor local.");
    } finally {
      setVerifying(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!email) {
      navigate("/");
      return;
    }
    resendVerification(email);
  }, [email, navigate]);

  const [isCooldownActive, setCooldownActive] = useState(true);
  const [countdown, setCountdown] = useState(30); // Initial countdown value in seconds

  useEffect(() => {
    let countdownInterval;
    if (isCooldownActive) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(countdownInterval);
        setCooldownActive(false);
        setCountdown(30);
      }, 30000);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCooldownActive]);

  const handleClick = () => {
    if (!isCooldownActive) {
      resendVerification(email);
      setCooldownActive(true);
    }
  };

  return (
    <div className="faq-container bg-secondaryHackeps flex flex-col items-center justify-start">
      <TitleGeneralized big className="mt-48">
        {">:("}
      </TitleGeneralized>
      {verified ? (
        <div className="text-center">
          <p role="status">Compte verificat. Ja pots iniciar sessió.</p>
          <Button onClick={() => navigate("/login")} primary className="mt-4">
            Inicia sessió
          </Button>
        </div>
      ) : (
        <>
          <h3 className="text">
            Verifica el teu compte obrint el link que t'hem enviat al correu.
          </h3>
          <Button
            onClick={handleClick}
            disabled={isCooldownActive}
            primary
            className="mt-4 py-3"
          >
            No m'ha arribat el correu{isCooldownActive && `: ${countdown}`}
          </Button>
          {localAvailable && (
            <div className="mt-6 text-center">
              <p>Entorn local · verificació sense correu</p>
              <Button
                onClick={verifyLocally}
                disabled={verifying}
                primary
                className="mt-3"
              >
                {verifying ? "Verificant..." : "Verificar compte de prova"}
              </Button>
              <p role="alert">{localError}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LoginUnverified;
