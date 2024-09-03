import React from "react";
import HackerListHackeps from "src/components/lleidahacker/hackerListHackeps/HackerListHackeps";
import StatsHackeps from "src/components/lleidahacker/statsHackeps/StatsHackeps";
const HackepsDashboard = () => {
  const nameEvent = "Hackeps 2024";

  return (
    <div>
      <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 mb-10">
        {" "}
        {/*//TODO:Cambiar el background por el banner de la hackeps */}
        <div className="flex flex-col w-full px-8">
          <div className="flex flex-row">
            <div className="align-left"></div>
            <div className="self-center	flex flex-col justify-center w-full text-center">
              <h1 className="text-4xl">{nameEvent}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20">
        <div className="hackerlist mb-16">
          <HackerListHackeps />
        </div>
      </div>
    </div>
  );
};

export default HackepsDashboard;