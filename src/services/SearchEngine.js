import {React, useEffect, useState} from "react";
import { useSearch } from "src/context/SearchContext";

import {
    acceptHackerToEvent,
    rejectHackerToEvent,
    getPendingHackersGruped, //Aixo mostra i classifica als hackers en grouped i nogroup
    getRejectedHackers,
    getApprovedHackers
  } from "src/services/EventManagementService";
import { getHackeps } from "src/services/EventService";

export const searchItems = async () => {
    const {results, categoryList, dateList, typeList, searchTerm, contextType, setResult, hasCategory, hasDates, hasType} = useSearch();

    useEffect(() => {
        // Este useEffect, detectará los cambios en el searchTerm y realizará las consultas pertinentes a la API
        //A parte, se encargará de resetear los filtros si se cambia el contextType       

        async function fetchData() {
            //Dependiendo del contextType, se realizará una consulta u otra 
            if (contextType === "Noticies") {
                //Con esto, hacer busquedas en la API de noticias y filtrar segun los filtros seleccionados:-)

            } else if (contextType === "Events") {
                //Con esto hacer busquedas de los eventos y filtrar segun los filtros seleccionados
            
            } else if (contextType === "HackersParticipants") {
                //Con esto hacer busquedas de los participantes de los hackeps y filtrar segun los filtros seleccionados <3
                
                
            }
        }
        if (searchTerm.length >=3) {
            //Si tiene mas de 3 caracteres, se realizará la consulta y las actualizaciones pertinentes. 4U
            fetchData();
        }
    }, [searchTerm]);






};