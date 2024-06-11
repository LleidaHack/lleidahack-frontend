import React from "react";

const InputSearch = ({ placeholder, searchtype }) => {
  if (searchtype == "events") {
    //buscador de events
  } else if (searchtype == "news") {
    //buscador de news
  }
  return (
    <div className="input-search border border-graycolor h-13 relative bg-white rounded flex flex-row">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full border-none rounded-md p-4"
      />
      <button className="search-button bg-primaryLanding text-white w-32 rounded-r-md">
        Cerca
      </button>
      {/* @jonas boto reemplazar.Falta cambiar el boto per el component que hauria de ser i ficarli la funcio onclick per configurar busqueda i tal */}
    </div>
  );
};

export default InputSearch;