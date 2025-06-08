import React, { useEffect, useState } from "react";
import { confirmAssistance } from "src/services/EventService";
import SuccessFeedback from "../Feedbacks/SuccesFeedback";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import FailFeedback from "../Feedbacks/FailFeedback";

const ConfirmAssistance = ({ confirm, token }) => {
  const [sending, setSending] = useState(true);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (confirm) {
        const res = await confirmAssistance(confirm, token);
        setResult(res);
        setSending(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen">
      {confirm == "false" ? (
        <div className="mt-60">
          <TitleGeneralized>
            {"Encara estàs a temps de pensar-ho"}
          </TitleGeneralized>
          <br />
          <p className="text-center">T'esperem l'any que ve!</p>
          <p className="text-center">
            Si canvies d'opinió encara pots confirmar l'assistencia des de
            l'email.
          </p>
        </div>
      ) : (
        <>
          {!sending ? (
            result && result.success ? (
              <SuccessFeedback
                title="Assistencia confirmada"
                text="Ha confirmat la seva assistencia a la HackEps."
                hasButton={true}
                buttonText="Torna a l'inici"
                buttonLink="/"
              />
            ) : (
              <FailFeedback
                title="Ha hagut un error"
                text="El error és amb el missatge:"
                italic={result.errMssg || "No hi ha hagut codi, contactans!"}
                hasButton={true}
                buttonText="Torna a l'inici"
                buttonLink="/"
              />
            )
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default ConfirmAssistance;
