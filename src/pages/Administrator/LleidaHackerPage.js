import React from "react";
import Header from "src/components/lleidahacker/header/header";
import image1 from "src/assets/img/programmersen.png";
import GrupsCardBox from "src/components/lleidahacker/grupsCardBox/grupsCardBox";
import { Button } from "react-bootstrap";

const LleidaHackerPage = () => {
  const grups = [
    {
      name: "Junta",
      role: "Sense Accés",
      image: image1,
      whatsapp: "",
      drive: "",
      bgcolor: "primaryLanding",
      opacity: ".70",
    },
    {
      name: "Devs",
      role: "member",
      image: image1,
      whatsapp: "",
      drive: "",
      bgcolor: "primaryLanding",
      opacity: "100",
    },
    {
      name: "Marketing",
      role: "Sense Accés",
      image: image1,
      whatsapp: "",
      drive: "",
      bgcolor: "primaryLanding",
      opacity: ".70",
    },
    {
      name: "Contactes",
      role: "Sense Accés",
      image: image1,
      whatsapp: "",
      drive: "",
      bgcolor: "primaryLanding",
      opacity: ".70",
    },
    {
      name: "Techmeetings",
      role: "Sense Accés",
      image: image1,
      whatsapp: "",
      gitdrivehub: "",
      bgcolor: "primaryLanding",
      opacity: ".70",
    },
  ];
  return (
    <div>
      <Header />
      <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
        <div className="header-events__content ">
          <h1 className="header-events__title">Dashboard</h1>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl font-bold text-center mt-10">
          Grups de Treball
        </h1>
        <div className="flex flex-row w-full h-full mt-5 px-12 gap-5 flex-wrap justify-center">
          {grups.map((grup) => (
            <GrupsCardBox
              name={grup.name}
              role={grup.role}
              image={grup.image}
              bgcolor={grup.bgcolor}
              opacity={grup.opacity}
              drive={grup.github}
              whatsapp={grup.linkedIn}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full h-full  items-end px-16">
          <h1 className="text-xl font-bold text-center mt-10">Admin Acces</h1>
          <a href="/admin/grups/admin-panel">
            <Button className="bg-primaryLanding text-white font-bold p-2 rounded-md mt-2">
              Admin Panel
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LleidaHackerPage;
