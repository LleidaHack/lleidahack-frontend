import { React, useState } from "react";

const DadesPersonals = (lleidahack) => {
  //TODO: Hacer que la informacion seteada en info tenga la forma de la const information
  //TODO: cambiar el information.map por info.map
  const [info, setInfo] = useState([]);
  const information = [
    { camp: "Nom i Cognom", dada: "Eustakio" },
    { camp: "NickName", dada: "Eustas" },
    { camp: "Email", dada: "ThisEustas@lleidahack.dev" },
    { camp: "Data de Naixement", dada: "23/03/2002" },
    { camp: "Actiu", dada: "true" },
    { camp: "Creacio de usuari", dada: "23/03/2002" },
    { camp: "NIF", dada: "12345678A" },
    { camp: "linkedin", dada: "https:google.es" },
    { camp: "github", dada: "https:google.es" },
  ];
  return (
    <div>
      <h1 className="text-4xl ">Dades i Informacio</h1>
      <div className=" center flex ">
        <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
      </div>

      <div className="mt-12 border-3 rounded-lg mx-8 flex flex-row py-16 px-16 gap-5 text-base flex-wrap">
        <table className="w-full border-separate border-spacing-y-2  truncate 	">
          <thead>
            <tr>
              <th>
                <p className="mr-5 static text-xl">Camp</p>
              </th>
              <th>
                <p className="mr-5 static text-xl">Dada</p>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {information.map((info, index) => (
              <tr key={index}>
                {" "}
                {/*Camp buid per crear separacuió dins la tabla. Metode molt guarro xd */}
                <td className="font-bold">{info.camp}</td>
                <td>{info.dada}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DadesPersonals;
