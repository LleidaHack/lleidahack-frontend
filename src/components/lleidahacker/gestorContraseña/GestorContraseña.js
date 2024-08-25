import React from "react";

const GestorContraseña = () => {
  function changePassword() {
    //TODO: Implementar servei per cambiar contraseña
    //Mostrar popup amb la resposta sobre si s'ha realitzat el canvi correctament o no.
  }

  return (
    <div>
      <h1 className="text-4xl ">Seguretat</h1>
      <div className=" center flex ">
        <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
      </div>

      <div className="mt-12 border-3 rounded-lg mx-8 flex flex-col py-16 px-16 gap-3 text-base flex-wrap">
        <input
          type="password"
          className="w-1/2 border-2 border-primaryLanding rounded-lg p-2"
          placeholder="Contrasenya Actual"
        />
        <input
          type="password"
          className="w-1/2 border-2 border-primaryLanding rounded-lg p-2"
          placeholder="Nova Contrasenya"
        />
        <p className="text-primaryLanding">Recuperar contraseña</p>
        <div className="flex flex-row gap-4  w-full">
          <button
            className="bg-primaryLanding text-white rounded-lg p-2"
            onClick={changePassword}
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default GestorContraseña;
