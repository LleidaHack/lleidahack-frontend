import React from "react";
import { confirmAssistance } from "src/services/EventService";

const ConfirmAssistance = ({ confirm, token }) => {
  confirmAssistance()
  return (
    <div>
      {confirm=="false"?
      <>
        {":("}
      </>:
      <>
      </>}
    </div>
  );
};

export default ConfirmAssistance;