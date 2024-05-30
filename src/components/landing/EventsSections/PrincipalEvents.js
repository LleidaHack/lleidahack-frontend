import React from "react";
import EventCard_three from "../../event_cards/eventCard_three/eventCard_three";
import principalImage from "src/imgs/foto_grupal_colonies.jpg";
import EventCard1 from "../ImageCards/EventCard1"; //Aixo son components creades per lolo. Si al final no serveixen, borrar components
import EventCard_one from "../../event_cards/eventCard_one/eventCard_one";

const PrincipalEvents = () => {
  return (
    <div className="bg-white w-full h-auto px-16 flex flex-column">
      <div className="PrincipalEvent_content py-14">
        <EventCard_three
          image={principalImage}
          title={"titulo"}
          description={"fwefwefw"}
        />
      </div>
      <div className="MultipleEvents_content py-14 flex flex-row gap-2">
        <div className="flex-1/4">
          <EventCard_one
            imageSrc={principalImage}
            title={"Techmeeting 13/03/24"}
            description={
              "rfweefwe fwe fwef wef wef wef wef wef wef wef wef fwefw"
            }
            date={"03/06/2020"}
          />
        </div>
        <div className="flex-1/4">
          <EventCard_one
            imageSrc={principalImage}
            title={"TITULO"}
            description={"fwefwefw"}
            date={"03/06/2020"}
          />
        </div>
        <div className="flex-1/4">
          <EventCard_one
            imageSrc={principalImage}
            title={"TITULO"}
            description={"fwefwefw"}
            date={"03/06/2020"}
          />
        </div>
        <div className="flex-1/4">
          <EventCard_one
            imageSrc={principalImage}
            title={"TITULO"}
            description={"fwefwefw"}
            date={"03/06/2020"}
          />
        </div>
      </div>
      <div className="MoreEvents_button center py-14 text-center">
        <button className="bg-primaryLanding text-white font-bold py-2 px-4 rounded-full">
          Mostrar més events
        </button>
      </div>
    </div>
  );
};

export default PrincipalEvents;
