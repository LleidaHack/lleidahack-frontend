import { React, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const TableHackers = ({ mapList }) => {
  const [participants, setParticipants] = useState(mapList);

  useEffect(() => {
    setParticipants(mapList);
  }, [mapList]);

  function createStatusClass(status) {
    if (status === "Acepted") {
      return "bg-green-500 text-white rounded-md px-2 py-1 font-semibold w-fit"; //'bg-green-300 w-fit px-2 rounded-md'
    } else if (status === "Pending") {
      return "bg-yellow-500 text-white rounded-md px-2 py-1 font-semibold w-fit";
    } else if (status === "Rejected") {
      return "bg-red-500 text-white rounded-md px-2 py-1 font-semibold w-fit";
    } else if (status === "Changing..") {
      return "bg-gray-300 text-gray-500 rounded-md px-2 py-1 font-semibold w-fit";
    }
  }

  function createGif(text) {
    if (text === "Changing..") {
      return <FaSpinner className="animate-spin" />;
    } else if (
      text !== "Changing.." &&
      text !== "" &&
      text !== "Acepted" &&
      text !== "Pending" &&
      text !== "Rejected"
    ) {
      return <RiErrorWarningLine className="text-red-500" />;
    } else {
      return "";
    }
  }

  function closeError(index) {
    console.log("wfwefwef");
    participants[index].error = "";
    setParticipants([...participants]);
  }

  async function buttonAction(accept, index) {
    if (accept) {
      const oldStatus = participants[index].status;
      if (oldStatus === "Rejected") {
        participants[index].status = "Changing..";
        setParticipants([...participants]);
        await new Promise((resolve) => setTimeout(resolve, 2000)); //Simula resposta de API
        //Setejar canvis a la api i esperar resposta de si es correcte o no.
        const correct = false; //Exemple de resposta de la API

        if (correct) {
          participants[index].status = "Acepted";
          setParticipants([...participants]);
        } else {
          participants[index].status = oldStatus;
          setParticipants([...participants]);
          participants[index].error = "Error actualitzant estat";
        }
      }
    } else {
      participants[index].status = "Rejected";
      setParticipants([...participants]);
    }
  }

  return (
    <div>
      <table className="w-full ">
        <thead style={{ position: "sticky", top: 0, backgroundColor: "white" }}>
          <tr className="text-xl">
            <th>
              {" "}
              <p>Status</p>
            </th>
            <th>
              <p>Nom</p>
            </th>
            <th>
              <p>Mail</p>
            </th>
            <th>
              <p>Telefon</p>
            </th>
            <th>
              <p>Edat</p>
            </th>
            <th>
              <p>Talla</p>
            </th>
            <th>
              <p className="text-center">Acció</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <>
              <tr key={index}>
                <td>
                  <p
                    className={`${createStatusClass(participant.status)} flex flex-row gap-1 items-center mb-0`}
                  >
                    {createGif(participant.status)}
                    {participant.status}
                  </p>
                </td>
                <td>{participant.nom}</td>
                <td>{participant.mail}</td>
                <td>{participant.telefon}</td>
                <td>{participant.edat}</td>
                <td>{participant.talla}</td>
                <td>
                  <div className="flex justify-center">
                    <div
                      className="bg-primaryLanding text-white rounded-md px-2 py-1 font-semibold cursor-pointer"
                      onClick={() => buttonAction(true, index)}
                    >
                      Acceptar
                    </div>
                    <div
                      className="bg-red-500 text-white rounded-md px-2 py-1 ml-2 font-semibold cursor-pointer"
                      onClick={() => buttonAction(false, index)}
                    >
                      Rebutjar
                    </div>
                  </div>
                </td>
              </tr>

              <div className="mb-2 flex flex-row gap-1 text-red-500 text-sm items-center ml-1">
                {createGif(participant.error)}
                <p className="my-0.5">{participant.error} </p>
                {participant.error !== "" && (
                  <div
                    onClick={() => {
                      closeError(index);
                    }}
                    className="text-base cursor-pointer hover:text-red-500"
                  >
                    &times;
                  </div>
                )}
              </div>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHackers;
