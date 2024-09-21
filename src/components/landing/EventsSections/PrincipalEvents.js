import React from "react";
import EventCardThree from "../../eventCards/EventCardThree/EventCardThree";
import principalImage from "src/imgs/foto_grupal_colonies.jpg";
import EventCardOne from "../../eventCards/EventCardOne/EventCardOne";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";

const PrincipalEvents = () => {
  return (
    <div className="bg-white w-full h-auto px-16 flex flex-column">
      <div className="PrincipalEvent_content py-14">
        <EventCardThree
          image={principalImage}
          title={"titulo"}
          description={"fwefwefw"}
        />
      </div>
      <div className="MultipleEvents_content py-14 flex flex-row gap-2">
        <div className="flex-1/4">
          <EventCardOne
            imageSrc={principalImage}
            title={"Techmeeting 13/03/24"}
            description={
              "rfweefwe fwe fwef wef wef wef wef wef wef wef wef fwefw"
            }
            date={"03/06/2020"}
          />
        </div>
        <div className="flex-1/4">
          <EventCardOne
            imageSrc={principalImage}
            title={"TITULO"}
            description={"fwefwefw"}
            date={"03/06/2020"}
          />
        </div>
        <div className="flex-1/4">
          <EventCardOne
            imageSrc={principalImage}
            title={"TITULO"}
            description={"fwefwefw"}
            date={"03/06/2020"}
          />
        </div>
        <div className="flex-1/4">
          <EventCardOne
            imageSrc={principalImage}
            title={"TITULO"}
            description={"fwefwefw"}
            date={"03/06/2020"}
          />
        </div>
      </div>
      <div className="MoreEvents_button center py-14 text-center">
        <ButtonLleidahack primary white>
          Mostrar més events
        </ButtonLleidahack>
      </div>
    </div>
  );
};

export default PrincipalEvents;
