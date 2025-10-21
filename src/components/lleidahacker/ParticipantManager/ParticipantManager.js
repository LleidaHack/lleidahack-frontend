import React, { useEffect, useState } from "react";
import {
  hackers_participants_grouped_list,
  acceptHackerToEvent,
  rejectHackerToEvent,
  unacceptHackerToEvent,
} from "src/services/EventService";

const ParticipantManager = ({ eventId }) => {
  // --- Estados ---
  const [allParticipants, setAllParticipants] = useState([]);
  const [filter, setFilter] = useState("none"); // <-- Estado solo para FILTROS
  const [sort, setSort] = useState("none"); // <-- NUEVO estado solo para ORDENACIÓN

  // --- Carga de datos ---
  useEffect(() => {
    async function fetchData() {
      const participantsGrouped =
        await hackers_participants_grouped_list(eventId);

      const calculateAge = (birthdate) => {
        const birthDate = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      };

      const groupedParticipants = participantsGrouped.groups.flatMap((group) =>
        group.members.map((member) => ({
          id: member.id,
          name: member.name,
          group: group.name,
          age: calculateAge(member.birthdate),
          foodRestrictions: member.food_restrictions || "None",
          status: member.status,
        })),
      );

      const ungroupedParticipants = participantsGrouped.nogroup.map(
        (member) => ({
          id: member.id,
          name: member.name,
          group: null,
          age: calculateAge(member.birthdate),
          foodRestrictions: member.food_restrictions || "None",
          status: member.status,
        }),
      );

      // --- AQUÍ ESTÁ EL CAMBIO ---

      // 1. Combina las dos listas
      const combinedParticipants = [
        ...groupedParticipants,
        ...ungroupedParticipants,
      ];

      // 2. Usa un Map para filtrar por 'id' único.
      // Si un id ya existe, el Map simplemente lo sobrescribe.
      const participantsMap = new Map();
      combinedParticipants.forEach((participant) => {
        participantsMap.set(participant.id, participant);
      });

      // 3. Convierte los valores del Map de vuelta a un array
      const uniqueParticipants = Array.from(participantsMap.values());

      // 4. Guarda el array SIN duplicados en el estado
      setAllParticipants(uniqueParticipants);
    }
    fetchData();
  }, [eventId]);

  // --- Lógica de Filtro y Ordenación ---

  // 1. Función solo para FILTRAR
  const applyFilter = (participants) => {
    switch (filter) {
      case "pending":
        return participants.filter((p) => p.status === "pending");
      case "accepted":
        return participants.filter((p) => p.status === "accepted");
      case "rejected":
        return participants.filter((p) => p.status === "rejected");
      case "foodRestrictions":
        return participants.filter(
          (p) => p.foodRestrictions && p.foodRestrictions !== "None",
        );
      default:
        return participants; // 'none'
    }
  };

  // 2. Función solo para ORDENAR
  const applySort = (participants) => {
    // Usamos [...participants] para no mutar el array original
    switch (sort) {
      case "ageAsc":
        return [...participants].sort((a, b) => a.age - b.age);
      case "ageDesc":
        return [...participants].sort((a, b) => b.age - a.age);
      case "group":
        return [...participants].sort((a, b) =>
          (a.group || "").localeCompare(b.group || ""),
        );
      default:
        return participants; // 'none'
    }
  };

  // 3. Encadenamos las funciones: primero filtramos, LUEGO ordenamos
  const filteredParticipants = applyFilter(allParticipants);
  const sortedAndFilteredParticipants = applySort(filteredParticipants);

  // --- Renderizado ---
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between mb-4 gap-4">
        {" "}
        {/* <-- Añadido gap para separar */}
        {/* Dropdown de FILTROS */}
        <select
          className="border border-gray-300 px-2 py-1 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="none">Filtrar por</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
          <option value="foodRestrictions">Con Restric. Comida</option>
        </select>
        {/* NUEVO Dropdown de ORDENACIÓN */}
        <select
          className="border border-gray-300 px-2 py-1 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Ordenar por</option>
          <option value="ageAsc">Edad (Ascendente)</option>
          <option value="ageDesc">Edad (Descendente)</option>
          <option value="group">Grupo</option>
        </select>
      </div>

      <table className="min-w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="py-2 px-4 border-b text-center">Status</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-right">Age</th>
            <th className="py-2 px-4 border-b text-center">Food Restriction</th>
            <th className="py-2 px-4 border-b text-left">Group</th>
            <th className="py-2 px-4 border-b text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Usamos la lista final: sortedAndFilteredParticipants */}
          {sortedAndFilteredParticipants &&
            sortedAndFilteredParticipants.map((participant) => {
              let boxColor = "";
              if (participant.status === "accepted") boxColor = "bg-green-400";
              else if (participant.status === "pending")
                boxColor = "bg-yellow-300";
              else if (participant.status === "rejected")
                boxColor = "bg-red-400";
              return (
                <tr key={participant.id}>
                  <td className="py-2 px-4 border-b text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded font-semibold ${boxColor}`}
                      style={{ color: "#000" }}
                    >
                      {participant.status.charAt(0).toUpperCase() +
                        participant.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b text-left">
                    {participant.name}
                  </td>
                  <td
                    className={`py-2 px-4 border-b text-right ${participant.age < 18 ? "text-red-500" : ""}`}
                  >
                    {participant.age}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {participant.foodRestrictions &&
                    participant.foodRestrictions !== "None" ? (
                      <span
                        className="cursor-pointer underline"
                        title={participant.foodRestrictions}
                      >
                        Yes
                      </span>
                    ) : (
                      "No"
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-left">
                    {participant.group || "-"}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                        onClick={async () => {
                          const success = await acceptHackerToEvent(
                            participant.id,
                            eventId,
                          );
                          if (success) {
                            setAllParticipants((prev) =>
                              prev.map((p) =>
                                p.id === participant.id
                                  ? { ...p, status: "accepted" }
                                  : p,
                              ),
                            );
                          }
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                        onClick={async () => {
                          let success = true;
                          if (participant.status === "accepted") {
                            success = await unacceptHackerToEvent(
                              participant.id,
                              eventId,
                            );
                          }
                          if (success) {
                            success = await rejectHackerToEvent(
                              participant.id,
                              eventId,
                            );
                          }
                          if (success) {
                            setAllParticipants((prev) =>
                              prev.map((p) =>
                                p.id === participant.id
                                  ? { ...p, status: "rejected" }
                                  : p,
                              ),
                            );
                          }
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantManager;
