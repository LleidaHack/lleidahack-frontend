import { React, useState, useEffect } from "react";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";
import { useSearch } from "src/context/SearchContext";
const InputSearch = ({ itemTextButtonSearch}) => {
  const{setSearchTerm, placeholder} = useSearch(); 

  return (
    <div className="input-search border border-grayColor h-9 relative bg-white rounded flex flex-row">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full border-none rounded-md p-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ButtonLleidahack primary white className="px-12">
        {itemTextButtonSearch}
      </ButtonLleidahack>
      {/* @jonas boto reemplazar.Falta cambiar el boto per el component que hauria de ser i ficarli la funcio onclick per configurar busqueda i tal */}
    </div>
  );
};

export default InputSearch;
