import { React, useState, useEffect } from "react";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";

const InputSearch = ({ placeholder, searchtype }) => {
  const [itemTextButtonSearch, setItemTextButtonSearch] = useState("Cercar");
  if (searchtype == "events") {
    //buscador de events
  } else if (searchtype == "news") {
    //buscador de news
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setItemTextButtonSearch(<i className="fa-solid fa-magnifying-glass"></i>);
    } else {
      setItemTextButtonSearch("Cercar");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemTextButtonSearch("🔍");
      } else {
        setItemTextButtonSearch("Cercar");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="input-search  border-grayColor h-9 relative bg-white rounded flex flex-row">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full  rounded-md p-4"
      />
      <ButtonLleidahack primary white className="px-12">
        {itemTextButtonSearch}
      </ButtonLleidahack>
      {/* @jonas boto reemplazar.Falta cambiar el boto per el component que hauria de ser i ficarli la funcio onclick per configurar busqueda i tal */}
    </div>
  );
};

export default InputSearch;
