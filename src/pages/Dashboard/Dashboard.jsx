import React, { useEffect, useState } from "react";
import { getPendingGroups } from "src/services/HackService";

export default function Dashboard() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callService = async () => {
      setData(await getPendingGroups());
      setIsLoading(false);
    };
    callService();
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="m-3">Pendents d'acceptar</h2>
      {!isLoading && <DashboardGrid data={data}></DashboardGrid>}
    </div>
  );
}

function TableRow({ user, isGroup }) {
  const [isApproved, setIsApproved] = useState(user.approved);

  function handleAcceptar() {
    // cridar al servei bla bla bla
  }

  function handleDenegar() {
    const res = window.confirm([
      "Segur que vols denegar entrar a la hack a aquest pobre terrorista?",
    ]);

    if (res) {
      // cridar al servei bla bla bla
      const res = window.prompt([
        `Escriu exactament el nom del indesitjable >${user.name}<`,
      ]);

      if (res !== user.name) return;

      return;
    }
  }

  return (
    <tr>
      {isGroup && <th></th>}
      <th>
        {isApproved ? (
          <span className="badge bg-success">Approved</span>
        ) : (
          <span className="badge bg-warning">Pending</span>
        )}
      </th>

      <th>{user.name}</th>
      {!isGroup && <th></th>}
      <td>{new Date(user.birthdate).getFullYear()}</td>
      <td>{user.shirt_size}</td>
      <td className="text-start">{user.food_restrictions}</td>
      <td>
        <button className="btn btn-success me-1 p-1" onClick={handleAcceptar}>
          Acceptar
        </button>
        <button className="btn btn-danger p-1" onClick={handleDenegar}>
          Denegar
        </button>
      </td>
    </tr>
  );
}

function DashboardGrid({ data }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Status</th>
          <th colSpan={2}>Nom</th>
          <th>Any</th>
          <th>Talla</th>
          <th className="w-50 text-start">Alergies</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.nogroup.map((user) => (
          <TableRow key={user.id} user={user} isGroup={false}></TableRow>
        ))}
        {data.groups.map((group, index) => (
          <>
            <tr>
              <th>Grup {index + 1}</th>
              <th colSpan={2}>
                {group.name} ({group.members.length}/4)
              </th>
              <th colSpan={4}></th>
            </tr>
            {group.members.map((user) => (
              <TableRow isGroup={true} user={user} key={user.id}></TableRow>
            ))}
          </>
        ))}
      </tbody>
    </table>
  );
}
