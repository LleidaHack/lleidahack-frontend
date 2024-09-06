import React from "react";
import { useNavigate } from "react-router-dom";
import StatsHackeps from "src/components/lleidahacker/statsHackeps/StatsHackeps";

const HackepsGestor = () => {
  const navigate = useNavigate();

  function redirectHackDash() {
    navigate("/hackeps-dashboard");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Hackeps Dash</h1>
      <div className=" center flex ">
        <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
      </div>

      <div>
        <StatsHackeps>
          <div className="flex flex-row w-full justify-end mt-5">
            <button
              className="bg-primaryLanding text-white rounded-lg p-2 "
              onClick={redirectHackDash}
            >
              Gestionar..
            </button>
          </div>
        </StatsHackeps>
      </div>
    </div>
  );
};

export default HackepsGestor;
