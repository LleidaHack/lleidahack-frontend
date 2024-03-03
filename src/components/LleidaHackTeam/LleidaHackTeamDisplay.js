import React from "react";
import teamData from "./team.json";
import "./teamdisplay.css";
import LleidaHackTeamCard from "./LleidaHackTeamCard";

function LleidaHackTeamDisplay() {
  return (
    <div className="TeamDisplay">
      <h2 className="TeamDisplay_tittle">LleidaHack Team</h2>
      <p className="TeamDisplay_description">
        Meet the team that makes LleidaHack possible
      </p>
      {/* Junta Display */}
      <div className="TeamDisplay_juntaCard">
        {teamData.junta.map((member, index) => (
          <LleidaHackTeamCard key={index} member={member} />
        ))}
      </div>
      {/* Team Display */}
      <div className="TeamDisplay_card">
        {teamData.team.map((member, index) => (
          <LleidaHackTeamCard key={index} member={member} /> 
        ))}
      </div>
    </div>
  );
}

export default LleidaHackTeamDisplay;
