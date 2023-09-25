import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ResetPassword() {
  // const [params] = useSearchParams();

  const [firstPassword, setFirstPassword] = useState();
  const [secondPassword, setSecondPassword] = useState();

  const [errorMsg, setErrorMsg] = useState();

  function handleResetPassword(e) {
    e.preventDefault();

    if (firstPassword !== secondPassword)
      setErrorMsg("Les contrassenyes no coincideixen");
  }

  return (
    <>
      <Header />
      <div className="containter">
        <form
          onSubmit={(e) => handleResetPassword(e)}
          className="p-bg-black p-3 mx-auto col-12 col-xxl-4 my-3"
        >
          <h2 className="text-light mb-3 ms-3 text-center">
            Restablir Contrassenya
          </h2>
          <div className="w-75 mx-auto">
            <div className="form-group p-2">
              <label className="form-label">Nova Contrassenya</label>
              <input
                type="password"
                onChange={(e) => setFirstPassword(e.target.value)}
                value={firstPassword}
                className="form-control"
                pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
              />
            </div>
            <div className="form-group p-2">
              <label className="form-label">Confirmar Contrassenya</label>
              <input
                type="password"
                onChange={(e) => setSecondPassword(e.target.value)}
                value={secondPassword}
                className="form-control"
                pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
              />
            </div>
            <ul className="text-light">
              <li>Majuscules, Minuscules, Numeros</li>
              <li>8 caracters minim</li>
            </ul>
            <small className="text-center text-danger mx-auto d-block">
              {errorMsg}
            </small>
            <button className="btn w-100 mt-2">Restablir Contrassenya</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}