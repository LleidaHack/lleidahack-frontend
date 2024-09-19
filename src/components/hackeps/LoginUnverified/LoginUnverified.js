import React, { useEffect, useState } from "react";
import Button from "src/components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { resendVerification } from "src/services/AuthenticationService";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const LoginUnverified = ({ email }) => {
  const navigate = useNavigate();
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
        `&gt;`:(
      </TitleGeneralized>
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
    </div>
  );
};

export default LoginUnverified;
