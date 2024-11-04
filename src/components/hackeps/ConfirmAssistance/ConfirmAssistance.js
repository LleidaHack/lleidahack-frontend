import React, { useEffect, useState } from "react";
import { confirmAssistance } from "src/services/EventService";
import SuccessFeedback from "../Feedbacks/SuccesFeedback";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import FailFeedback from "../Feedbacks/FailFeedback";

const ConfirmAssistance = ({ confirm, token }) => {
  const [sending, setSending] = useState(true)
  const [result, setResult] = useState(null)
  useEffect(async ()=>{
    if (confirm) {
      const a = await confirmAssistance(token)
      console.log(a)
      setResult(a)
      setSending(false)
    }
  },[])
  return (
    <div>
      {confirm=="false"?(
        <TitleGeneralized>
          {"Pos ok:("}
        </TitleGeneralized>
      ):(
        <>
          {!sending
            ?(result && result.success
              ?( 
                <SuccessFeedback 
                  title="Assistencia confirmada" 
                  text="Ha confirmat la seva assistencia a la HackEps." 
                  hasButton={true} 
                  buttonText="Torna a l'inici" 
                  buttonLink="/"
                />
              ):(
                <FailFeedback 
                  title="Ha hagut un error" 
                  text="El error és amb el missatge:" 
                  italic={result.errMssg || "No hi ha hagut codi, contactans!"}
                  hasButton={true} 
                  buttonText="Torna a l'inici" 
                  buttonLink="/"
                />
              ))
            :(<></>)
          }
        </>
      )}
    </div>
  );
};

export default ConfirmAssistance;