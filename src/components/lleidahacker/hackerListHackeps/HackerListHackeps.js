import { React, useEffect, useState } from "react";
import TableHackers from "./TableHackers";
import SwitchView from "src/components/switch/SwitchView";
import {
  acceptHackerToEvent,
  getPendingHackersGruped,
  rejectHackerToEvent,
} from "src/services/EventService";
import { getHackeps } from "src/services/EventService";

const HackerListHackeps = () => {
  //TODO: Pensa com diseñar la mostra dels grups amb els membres i la seva info.
  const [participants, setParticipants] = useState([]);
  const [grups, setGrups] = useState([]);
  const [visibilityOptions, setVisibilityOptions] = useState([]);
  const [visibilityOptions2, setVisibilityOptions2] = useState([]);
  const [reducedView, setReducedView] = useState(false);
  let actualHackepsId;
  //Llamada a la api:

  function getAge(birthday) {
    //TODO: No funciona correctament aquesta funcio. Revisar!
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  useEffect(() => {
    async function getPendingParticipants() {
      const hack = await getHackeps();
      const maxGroupSize = hack.max_group_size;
      actualHackepsId = hack.id;
      console.log(actualHackepsId);
      const listGrouped = await getPendingHackersGruped(actualHackepsId);
      const grouped = listGrouped.groups;
      console.log(grouped);
      const nonGrouped = listGrouped.nogroup;
      console.log(nonGrouped);

      const formattedNonGrouped = nonGrouped.map((element) => ({
        status: element.approved === false ? "Pending" : "Acepted",
        nom: element.name,
        mail: element.email,
        edat: getAge(element.birthday),
        talla: element.shirt_size,
        foodRestrictions: element.food_restrictions || "",
        error: element.error || "",
      }));

      const formattedGrouped = grouped.map((group, index) => ({
        grup: "Grup " + (index + 1),
        nom: group.name,
        maxMembers: maxGroupSize,
        desplegable: true,
        membres: group.members.map((member) => ({
          status: member.approved === false ? "Pending" : "Acepted",
          nom: member.name,
          mail: member.email,
          telefon: member.phone,
          edat: getAge(member.birthday),
          talla: member.shirt_size,
          error: member.error || "",
          foodRestrictions: member.food_restrictions || "",
        })),
      }));

      setParticipants(formattedNonGrouped);
      setGrups(formattedGrouped);
    }
    getPendingParticipants();
  }, [setParticipants, setGrups]);

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
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl ">Participants sense grup</h1>
          </div>
          <div>
            {" "}
            <SwitchView
              text1={"Complete"}
              text2={"Reduced"}
              activity1={() => setReducedView(false)}
              activity2={() => setReducedView(true)}
            />
          </div>
        </div>
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
