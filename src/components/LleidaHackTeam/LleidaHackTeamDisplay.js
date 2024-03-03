import React from "react";
import teamData from "./team.json";
import "./teamdisplay.css"
import LleidaHackTeamCard from "./LleidaHackTeamCard";

function LleidaHackTeamDisplay() {
  console.log(teamData);
  return (
    <div className="TeamDisplay">
      <h2 className="TeamDisplay_tittle">LleidaHack Team</h2>
      
      <div className="TeamDisplay_card">
      {teamData.team.map(
        (
          member,
          index // Accede a la propiedad "team" del objeto "teamData"
        ) => (
          <LleidaHackTeamCard key={index} member={member} /> // Pasar "member" en lugar de "team"
        )
      )}
        </div>
    </div>
  );
}

export default LleidaHackTeamDisplay;
