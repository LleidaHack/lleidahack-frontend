import React, { useEffect, useState } from "react";
import { acceptHackerToEvent, getPendingHackersGruped, rejectHackerToEvent } from "src/services/EventService";
import { getUserById } from "src/services/UserService";

export default function Dashboard() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callService = async () => {
      setData(await getPendingHackersGruped("1"));
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

function TableRow({ user: userParam, isGroup }) {
  const [isApproved, setIsApproved] = useState(userParam.approved);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function _() {
      setUser(await getUserById(userParam.id));
    }
    _();
  }, [userParam]);

  async function handleAcceptar() {
    if (await acceptHackerToEvent(user.id, "1")) {
      setIsApproved(true);
    }
  }

  async function handleDenegar() {
    const res = window.confirm([
      "Segur que vols denegar entrar a la hack a aquest pobre terrorista?",
    ]);

    if (res) {
      // cridar al servei bla bla bla
      const res = window.prompt([
        `Escriu exactament el nom del indesitjable >${user.name}<`,
      ]);

      if (res !== user.name) return;

      await rejectHackerToEvent(user.id, "1");
      window.location.reload();
      return;
    }
  }

  if (!user) return <tr colSpan="10">Loading...</tr>;

  return (
    <tr>
      {isGroup && <th></th>}
      <th className="align-middle">
        {isApproved ? (
          <span className="badge bg-success">Approved</span>
        ) : (
          <span className="badge bg-warning">Pending</span>
        )}
      </th>

      <th>{user.name}</th>
      {!isGroup && <th></th>}
      <td className="align-middle">
        {user.email} <br />
        {user.telephone}
      </td>
      <td className="align-middle">
        {new Date().getFullYear() - new Date(user.birthdate).getFullYear()}
      </td>
      <td className="align-middle">{user.shirt_size}</td>
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
          <th>Mail/Telf</th>
          <th>Edat</th>
          <th>Talla</th>
          <th className="w-50 text-start">Alergies</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.nogroup &&
          data.nogroup.map((user) => (
            <TableRow key={user.id} user={user} isGroup={false} />
          ))}

        {data.groups &&
          data.groups.map((group, index) => (
            <>
              <tr>
                <th>Grup {index + 1}</th>
                <th colSpan={2}>
                  {group.name} ({group.members.length}/4)
                </th>
                <th colSpan={4}></th>
              </tr>
              {group.members &&
                group.members.map((user) => (
                  <TableRow isGroup={true} user={user} key={user.id}></TableRow>
                ))}
            </>
          ))}
      </tbody>
    </table>
  );
}
