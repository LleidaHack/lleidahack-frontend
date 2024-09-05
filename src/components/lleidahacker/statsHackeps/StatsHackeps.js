import React from "react";

const StatsHackeps = ({ children }) => {
  const resumen = [
    { title: "Nom del Event", data: "Hackeps2024" },
    { title: "Id Event", data: "23" },
    { title: "Data d'inici", data: "23/03/2022" },
    { title: "Data de finalització", data: "23/03/2022" },
    { title: "Nº de participants", data: "45" },
    { title: "Nº de grups", data: "23" },
    { title: "Nº de Sponsors", data: "7" },
    { title: "Hackers Acceptats", data: "45" },
    { title: "Hackers Rebutjats", data: "23" },
    { title: "Hackers Pendents", data: "7" },
    //Samarretes
    { title: "Nº Samarretes S", data: "12" },
    { title: "Nº Samarretes M", data: "4" },
    { title: "Nº Samarretes L", data: "3" },
    { title: "Nº Samarretes Xl", data: "5" },
    { title: "Nº Samarretes 2Xl", data: "2" },
    { title: "Nº Samarretes 3Xl", data: "1" },
    { title: "Nº Samarretes 4Xl", data: "0" },

    //Menjar
    { title: "Nº Menus Vegan", data: "12" },
    { title: "Nº Menus Vegetaria", data: "4" },
    { title: "Nº Menus No Porc", data: "3" },
    { title: "Nº Altre", data: "3" },
  ];
  return (
    <div className="mt-12 border-3 rounded-lg mx-8 flex flex-row py-12 px-24 justify-between text-base flex-wrap">
      {resumen.map((item) => (
        <div className="w-4/12" key={item.title}>
          <ul>
            <li>
              <strong>{item.title}: </strong>
              {item.data}
            </li>
          </ul>
        </div>
      ))}
      {children}
    </div>
  );
};

export default StatsHackeps;
