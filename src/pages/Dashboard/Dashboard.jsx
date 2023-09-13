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
      <th className="text-center">
        {isApproved ? (
          <span className="badge bg-success">Approved</span>
        ) : (
          <span className="badge bg-warning">Pending</span>
        )}
      </th>
      {isGroup && <th></th>}

      <th>{user.name}</th>
      {!isGroup && <th></th>}
      <td className="text-center">{new Date(user.birthdate).getFullYear()}</td>
      <td className="text-center">{user.shirt_size}</td>
      <td>{user.food_restrictions}</td>
      <td className="text-center">
        <button className="btn btn-success me-1" onClick={handleAcceptar}>
          Acceptar
        </button>
        <button className="btn btn-danger" onClick={handleDenegar}>
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
          <th className="text-center">Status</th>
          <th colSpan={2}>Nom</th>
          <th className="text-center">Any</th>
          <th className="text-center">Talla</th>
          <th className="w-50">Alergies</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.groups.map((group) => (
          <>
            <tr>
              <th className="text-center">---</th>
              <th colSpan={6}>
                {group.name} ({group.members.length}/4)
              </th>
            </tr>
            {group.members.map((user) => (
              <TableRow isGroup={true} user={user} key={user.id}></TableRow>
            ))}
          </>
        ))}
        {data.nogroup.map((user) => (
          <TableRow key={user.id} user={user} isGroup={false}></TableRow>
        ))}
      </tbody>
    </table>
  );
}
