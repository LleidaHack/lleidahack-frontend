import React from "react";
import HeaderEvents from "src/components/landing/HeaderEvents/HeaderEvents";
import HackerListHackeps from "src/components/lleidahacker/hackerListHackeps/HackerListHackeps";
import StatsHackeps from "src/components/lleidahacker/statsHackeps/StatsHackeps";
import { SearchProvider } from "src/context/SearchContext";
const HackepsDashboard = () => {
  const nameEvent = "Hackeps 2024";

  return (
    <SearchProvider>
      <div>
        <div className="header-events min-h-0 bg-cover bg-no-repeat bg-center mb-10">
          {""}
          {/*//TODO:Cambiar el background por el banner de la hackeps */}
          <div className="flex flex-col w-full px-2">
            <div className="flex flex-row">
              <div className="align-left"></div>
              <div className="self-center	flex flex-col justify-center w-full ">
                <HeaderEvents
                  title={nameEvent}
                  type={"HackersHackeps"}
                  showNumberResults={true}
                />
                <p></p>
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
    </SearchProvider>
  );
};

export default HackepsDashboard;
