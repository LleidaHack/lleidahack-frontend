
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { resendVerification } from "src/services/AuthenticationService";

const LoginUnverified = ({ email }) => {

    const navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo(0, 0);
        if (!email){
            navigate("/")
            return
        }
        resendVerification(email)
    },[email,navigate])

    const [isCooldownActive, setCooldownActive] = useState(false);
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
        setCountdown(10);
      }, 30000);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCooldownActive]);

  const handleClick = () => {
    if (!isCooldownActive) {
      resendVerification(email)
      setCooldownActive(true);
    }
  };

  return <div className="faq-container" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"}}>
    <h3 className="text" style={{margin: "10px"}}>Verifica la teva compta obrint el link que t'hem enviat al correu.</h3>
    <Button onClick={handleClick} disabled={isCooldownActive} style={{margin: "10px"}}>No m'ha arribat el correu{isCooldownActive&& `: ${countdown}`}</Button>
  </div>;
};

export default LoginUnverified;
