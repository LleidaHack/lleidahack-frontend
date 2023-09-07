import React, { useState } from "react";

export default function Dashboard({}) {
  return (
    <div className="container-fluid">
      <h2 className="m-3">Pendents d'acceptar</h2>
      <DashboardGrid data={[{ name: "Racista 1" }]}></DashboardGrid>
    </div>
  );
}

function TableRow({ index, user }) {
  const [isHidden, setIsHidden] = useState(false);

  function handleAcceptar() {
    // cridar al servei bla bla bla
    setIsHidden(true);
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

      setIsHidden(true);
      return;
    }
  }

  return (
    <tr hidden={isHidden}>
      <th className="text-center">{index}</th>
      <td>{user.name}</td>
      <td>Info extra 1</td>
      <td>Info extra 2</td>
      <td>Info extra 3</td>
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
          <th className="text-center">#</th>
          <th>Nom</th>
          <th>Info 1</th>
          <th>Info 2</th>
          <th className="w-50">Info 3</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <TableRow key={index} index={index} user={user}></TableRow>
        ))}
      </tbody>
    </table>
  );
}
