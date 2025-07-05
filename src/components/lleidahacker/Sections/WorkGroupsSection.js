import React from "react";
import GrupsCardBox from "src/components/lleidahacker/GrupsCardBox/grupsCardBox";
import developers from "src/assets/img/developers.jpg";
import marketing from "src/assets/img/marketing.jpg";
import junta from "src/assets/img/junta.jpg";
import contactes from "src/assets/img/contactes.jpg";
import techmeeting from "src/assets/img/techmeetings.jpg";

const Groups = [
  {
    title: "Junta",
    bgImage: junta,
    url: "/junta",
  },
  {
    title: "Developers",
    bgImage: developers,
    url: "/developers",
  },
  {
    title: "Marketing",
    bgImage: marketing,
    url: "/marketing",
  },
  {
    title: "Contactes",
    bgImage: contactes,
    url: "/contactes",
  },
  {
    title: "Techmeeting",
    bgImage: techmeeting,
    url: "/Techmeeting",
  },
];

const WorkGroups = () => {
  return <div>
    <div className="flex flex-col h-screen">
      <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 flex-none h-40">
        <div className="header-events__content ">
          <h1 className="header-events__title text-4xl ">Grups de Treball</h1>
        </div>
      </div>

      {/* Contenedor principal para las tarjetas, con flex-1 para que ocupe el espacio restante */}
      <div className="w-full flex-1 flex flex-row h-full py-32 px-56 gap-4">
        {Groups.map((category, index) => (
          <div
            key={index}
            className="flex flex-col justify-center flex-1 my-2"
          >
            <GrupsCardBox
              title={category.title}
              bgImg={category.bgImage}
              url={category.url}
              small={true}
            />
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default WorkGroups;
