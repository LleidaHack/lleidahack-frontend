import { React, useEffect, useState } from "react";
import TableHackers from "./TableHackers";

const HackerListHackeps = () => {
  //TODO: Pensa com diseñar la mostra dels grups amb els membres i la seva info.
  const [participants, setParticipants] = useState([]);
  const [grups, setGrups] = useState([]);
  const [visibilityOptions, setVisibilityOptions] = useState([]);
  const [visibilityOptions2, setVisibilityOptions2] = useState([]);

  //TABLAS QUE SIMULAN INFORMACION DE LA API
  const participantsList = [
    {
      status: "Acepted",
      nom: "Joan",
      mail: "nouMail@gmail.com",
      telefon: 666623245,
      edat: 23,
      talla: "M",
      error: "",
    },
    {
      status: "Pending",
      nom: "Maria",
      mail: "maria@gmail.com",
      telefon: 555123456,
      edat: 28,
      talla: "S",
      error: "",
    },
    {
      status: "Rejected",
      nom: "David",
      mail: "david@gmail.com",
      telefon: 666987654,
      edat: 32,
      talla: "L",
      error: "",
    },
    {
      status: "Pending",
      nom: "Laura",
      mail: "laura@gmail.com",
      telefon: 777654321,
      edat: 25,
      talla: "M",
      error: "",
    },
    {
      status: "Acepted",
      nom: "Carlos",
      mail: "carlos@gmail.com",
      telefon: 888456789,
      edat: 30,
      talla: "XL",
      error: "",
    },
    {
      status: "Pending",
      nom: "Ana",
      mail: "ana@gmail.com",
      telefon: 999234567,
      edat: 27,
      talla: "S",
      error: "",
    },
    {
      status: "Acepted",
      nom: "Pedro",
      mail: "pedro@gmail.com",
      telefon: 111345678,
      edat: 29,
      talla: "M",
      error: "",
    },
    {
      status: "Pending",
      nom: "Sara",
      mail: "sara@gmail.com",
      telefon: 222876543,
      edat: 26,
      talla: "L",
      error: "",
    },
    {
      status: "Acepted",
      nom: "Miguel",
      mail: "miguel@gmail.com",
      telefon: 333765432,
      edat: 31,
      talla: "XL",
      error: "",
    },
    {
      status: "Pending",
      nom: "Elena",
      mail: "elena@gmail.com",
      telefon: 444654321,
      edat: 24,
      talla: "S",
      error: "",
    },
    {
      status: "Acepted",
      nom: "Pablo",
      mail: "pablo@gmail.com",
      telefon: 555543216,
      edat: 33,
      talla: "M",
      error: "",
    },
  ];
  const grupsList = [
    {
      grup: "Grup 1",
      nom: "Los Sacapuntas",
      maxMembers: 4,
      desplegable: true,
      membres: [
        {
          status: "Acepted",
          nom: "Joan",
          mail: "nouMail@gmail.com",
          telefon: 666623245,
          edat: 23,
          talla: "M",
          error: "",
        },
        {
          status: "Acepted",
          nom: "Maria",
          mail: "maria@gmail.com",
          telefon: 555123456,
          edat: 28,
          talla: "S",
          error: "",
        },
        {
          status: "Rejected",
          nom: "David",
          mail: "david@gmail.com",
          telefon: 666987654,
          edat: 32,
          talla: "L",
          error: "",
        },
        {
          status: "Acepted",
          nom: "Laura",
          mail: "laura@gmail.com",
          telefon: 777654321,
          edat: 25,
          talla: "M",
          error: "",
        },
      ],
    },
    {
      grup: "Grup 2",
      nom: "wakaWaka",
      maxMembers: 4,
      desplegable: true,
      membres: [
        {
          status: "Acepted",
          nom: "Carlos",
          mail: "carlos@gmail.com",
          telefon: 888456789,
          edat: 30,
          talla: "XL",
          error: "",
        },
        {
          status: "Pending",
          nom: "Ana",
          mail: "ana@gmail.com",
          telefon: 999234567,
          edat: 27,
          talla: "S",
          error: "",
        },
        {
          status: "Acepted",
          nom: "Pedro",
          mail: "pedro@gmail.com",
          telefon: 111345678,
          edat: 29,
          talla: "M",
          error: "",
        },
      ],
    },
    {
      grup: "Grup 3",
      nom: "Santo Domingo",
      maxMembers: 4,
      desplegable: true,
      membres: [
        {
          status: "Pending",
          nom: "Elena",
          mail: "elena@gmail.com",
          telefon: 444654321,
          edat: 24,
          talla: "S",
          error: "",
        },
        {
          status: "Acepted",
          nom: "Pablo",
          mail: "pablo@gmail.com",
          telefon: 555543216,
          edat: 33,
          talla: "M",
          error: "",
        },
      ],
    },
    {
      grup: "Grup 4",
      nom: "Los Sacapuntas",
      maxMembers: 4,
      desplegable: true,
      membres: [
        {
          status: "Pending",
          nom: "Sara",
          mail: "sara@gmail.com",
          telefon: 222876543,
          edat: 26,
          talla: "L",
          error: "",
        },
        {
          status: "Acepted",
          nom: "Miguel",
          mail: "miguel@gmail.com",
          telefon: 333765432,
          edat: 31,
          talla: "XL",
          error: "",
        },
      ],
    },
  ];
  //TABLAS QUE SIMULAN INFORMACION DE LA API  -- END

  useEffect(() => {
    setParticipants(participantsList); //Exemple de setejar valors obtinguts de la API. IMPORTANT!: Setejar de forma similar a participantsList!!!!!!
    setGrups(grupsList); //Exemple de setejar valors obtinguts de la API. IMPORTANT!: Setejar de forma similar a grupsList!!!!!!
  }, []);

  function getLength(array) {
    return array.length;
  }

  function getPendings(array) {
    let count = 0;
    array.forEach((element) => {
      if (element.status === "Pending") {
        count++;
      }
    });
    return count;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Participants i Grups</h1>
      <div className=" center flex ">
        <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
      </div>
      <div className="mt-12 border-3 rounded-lg mx-8 flex flex-col py-12 px-24 justify-between text-base flex-wrap">
        <h1 className="text-3xl ">Participants sense grup</h1>
        <div className=" center flex mb-5">
          <div className="w-4/12 border-1 border-primaryLanding rounded-lg" />
        </div>
        <div>
          <div className="flex flex-row gap-3 ">
            <div className="cursor-pointer">
              {visibilityOptions2[1] === "block" ? (
                <>
                  <i
                    className="fa-solid fa-sort-up "
                    onClick={() =>
                      setVisibilityOptions2((prevVisibilityOptions2) => {
                        const newVisibilityOptions2 = [
                          ...prevVisibilityOptions2,
                        ];
                        newVisibilityOptions2[1] = "hidden";
                        return newVisibilityOptions2;
                      })
                    }
                  ></i>
                </>
              ) : (
                <>
                  <i
                    className="fa-solid fa-sort-down"
                    onClick={() =>
                      setVisibilityOptions2((prevVisibilityOptions2) => {
                        const newVisibilityOptions2 = [
                          ...prevVisibilityOptions2,
                        ];
                        newVisibilityOptions2[1] = "block";
                        return newVisibilityOptions2;
                      })
                    }
                  ></i>
                </>
              )}
            </div>
            <p className="text-xl font-bold text-gray-600 select-none">
              Llistat de participants
              <span className="text-yellow-500">
                {" "}
                {getPendings(participants) > 0
                  ? `-  Pending (${getPendings(participants)})`
                  : ""}
              </span>
            </p>
          </div>
          <div
            className={`Membres-sense-grup ${visibilityOptions2[1] ? visibilityOptions2[1] : "hidden"}`}
            style={{ maxHeight: "300px", overflowY: "scroll" }}
          >
            <TableHackers mapList={participants} />
          </div>
        </div>

        <h1 className="text-3xl mt-5">Grups</h1>
        <div className=" center flex mb-5">
          <div className="w-4/12 border-1 border-primaryLanding rounded-lg" />
        </div>
        <div className="Membres-amb-grup">
          {grups.map((grup, index) => (
            <div key={index} className="mb-5">
              <div className="InfoGrup flex flex-row gap-2 ">
                <div className="cursor-pointer">
                  {visibilityOptions[index] === "block" ? (
                    <>
                      <i
                        className="fa-solid fa-sort-up "
                        onClick={() =>
                          setVisibilityOptions((prevVisibilityOptions) => {
                            const newVisibilityOptions = [
                              ...prevVisibilityOptions,
                            ];
                            newVisibilityOptions[index] = "hidden";
                            return newVisibilityOptions;
                          })
                        }
                      ></i>
                    </>
                  ) : (
                    <>
                      <i
                        className="fa-solid fa-sort-down"
                        onClick={() =>
                          setVisibilityOptions((prevVisibilityOptions) => {
                            const newVisibilityOptions = [
                              ...prevVisibilityOptions,
                            ];
                            newVisibilityOptions[index] = "block";
                            return newVisibilityOptions;
                          })
                        }
                      ></i>
                    </>
                  )}
                </div>
                <h1 className="text-xl font-bold text-gray-600 mb-3 select-none	flex ">
                  {grup.grup} - {grup.nom} - `({getLength(grup.membres)}/
                  {grup.maxMembers})`
                  <span className="text-yellow-500">
                    {" "}
                    {getPendings(grup.membres) > 0
                      ? `-  Pending (${getPendings(grup.membres)})`
                      : ""}{" "}
                  </span>
                </h1>
              </div>
              <div
                className={`Desplegable-Members bg-gray-100 rounded-md ${visibilityOptions[index] ? visibilityOptions[index] : "hidden"}`}
              >
                <TableHackers mapList={grup.membres} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackerListHackeps;
