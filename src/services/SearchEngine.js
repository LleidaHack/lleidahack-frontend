import { React, useEffect, useState } from "react";
import { useSearch } from "src/context/SearchContext";

import {
    acceptHackerToEvent,
    rejectHackerToEvent,
    getPendingHackersGruped, //Aixo mostra i classifica als hackers en grouped i nogroup
    getRejectedHackers,
    getApprovedHackers
  } from "src/services/EventService";
import { getHackeps } from "src/services/EventService";

export const searchItems = async () => {
  const {
    results,
    setResults,
    categoryList,
    dateList,
    typeList,
    searchTerm,
    contextType,
    setResult,
    hasCategory,
    hasDates,
    hasType,
  } = useSearch();
  const [allResults, setAllResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [actualContext, setActualContext] = useState(null);

  useEffect(() => {
    // Este useEffect, detectará los cambios en el searchTerm y realizará las consultas pertinentes a la API
    //A parte, se encargará de resetear los filtros si se cambia el contextType
    async function fetchData() {
      //get actual hackeps id:
      const hackeps = await getHackeps();
      id = hackeps.id;
      setEventId(id);
      setActualContext(contextType);

      //Dependiendo del contextType, se realizará una consulta u otra
      if (contextType === "Noticies") {
        //Con esto, hacer busquedas en la API de noticias y filtrar segun los filtros seleccionados:-)
      } else if (contextType === "Events") {
        //Con esto hacer busquedas de los eventos y filtrar segun los filtros seleccionados
      } else if (contextType === "HackersParticipants") {
        //Llamar a los services para obtener los hackers que participan en el evento
        const hackerList = await get_hackers_participants_list(eventId);
        const hackerListGrouped =
          await get_hackers_participants_gruped_list(eventId);
        setAllResults({
          hackerList: hackerList,
          hackerListGrouped: hackerListGrouped,
        });
        setResults(hackerList);
      }
    }
  }, [contextType]);

  useEffect(() => {
    async function filterData() {
      let hackerList = allResults.hackerList;
      let hackerListGrouped = allResults.hackerListGrouped;
      let groups = hackerListGrouped.grouped;
      let noGroups = hackerListGrouped.noGroup;
      let filteredList = [];

      const hasTrueValue = categoryList.some((category) => category.value);
      if (hasTrueValue) {
        let categories = categoryList
          .filter((category) => category.value)
          .map((category) => category.key);
        categories.forEach((category) => {
          if (category == "grouped") {
            filteredList = filteredList.concat(groups);
          }
          if (category == "noGroup") {
            filteredList = filteredList.concat(noGroups);
          }
        });
      }
    }
    if (actualContext === "HackersParticipants") {
      filterData(); //funcio per a la hackerList
    }
    //aqui vindrien les crides a altres funcions per a events i noticies
  }, [categoryList, dateList, typeList]);
};
