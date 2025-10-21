import React, { use, useEffect, useState } from "react";


const ParticipantManager = ({eventId}) => {
  const [showFiltered, setshowFiltered] = useState(true);
  const [allParticipants, setAllParticipants] = useState([]);

  useEffect(() => {
    // Simulate fetching participants data
    const fetchedParticipants = [
      { id: 1, name: "Participant 1", group: "Group A", age: 21, foodRestrictions: "Vegetarian", status: "accepted" },
      { id: 2, name: "Participant 2", group: "Group B", age: 19, foodRestrictions: "None", status: "pending" },
      { id: 3, name: "Participant 3", group: null, age: 23, foodRestrictions: "Gluten-Free", status: "rejected" },
      { id: 4, name: "Participant 4", group: "Group A", age: 15, foodRestrictions: "Vegan", status: "accepted" },
    ];

    const grouped = fetchedParticipants.filter(p => p.group);
    const ungrouped = fetchedParticipants.filter(p => !p.group);

    setAllParticipants(fetchedParticipants);
  }, []);

  function filterParticipants() {
    
  }

  return (
    <div className='w-full flex flex-col'>
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
          {allParticipants && allParticipants.map((participant) => {
            let boxColor = "";
            if (participant.status === "accepted") boxColor = "bg-green-400";
            else if (participant.status === "pending") boxColor = "bg-yellow-300";
            else if (participant.status === "rejected") boxColor = "bg-red-400";
            return (
              <tr key={participant.id}>
              <td className="py-2 px-4 border-b text-center">
              <span
              className={`inline-block px-3 py-1 rounded font-semibold ${boxColor}`}
              style={{ color: "#000" }}
              >
              {participant.status.charAt(0).toUpperCase() + participant.status.slice(1)}
              </span>
              </td>
              <td className="py-2 px-4 border-b text-left">{participant.name}</td>
              <td
              className={`py-2 px-4 border-b text-right ${participant.age < 18 ? "text-red-500" : ""}`}
              >
              {participant.age}
              </td>
              <td className="py-2 px-4 border-b text-center">
              {participant.foodRestrictions && participant.foodRestrictions !== "None" ? (
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
              <td className="py-2 px-4 border-b text-left">{participant.group || "-"}</td>
              <td className="py-2 px-4 border-b text-center">
              <div className="flex justify-center gap-2">
                <button
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                onClick={() => {
                  setAllParticipants(prev =>
                  prev.map(p =>
                    p.id === participant.id ? { ...p, status: "accepted" } : p
                  )
                  );
                }}
                >
                Accept
                </button>
                <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => {
                  setAllParticipants(prev =>
                  prev.map(p =>
                    p.id === participant.id ? { ...p, status: "rejected" } : p
                  )
                  );
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
  )
}

export default ParticipantManager