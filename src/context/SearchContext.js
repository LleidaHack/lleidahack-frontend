import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contextType, setContextType] = useState("Noticies"); // Tipo de búsqueda
  const [categoryList, setCategoryList] = useState([
    { data: "categoria1", value: false },
    { data: "categoria2", value: false },
    { data: "categoria3", value: false },
    { data: "categoria4", value: false },
    { data: "categoria5", value: false },
  ]); // Lista de los campos del filtro categorias  // [{data: "categoria1", value: false}, {data: "categoria2", value: false}, ...]
  const [dateList, setDateList] = useState([]); // Lista de los campos del filtro fecha
  const [typeList, setTypeList] = useState([]); // Lista de los campos del filtro tipo
  const [hasCategory, setHasCategory] = useState(true); // Si tiene filtros categorias
  const [hasDates, setHasDate] = useState(true); // Si tiene filtros de fecha
  const [hasType, setHasType] = useState(true); // Si tiene filtros de tipo
  const [categorySelected, setCategorySelected] = useState(""); // Categoria seleccionada
  const [dateSelected, setDateSelected] = useState(""); // Fecha seleccionada
  const [typeSelected, setTypeSelected] = useState(""); // Tipo seleccionado
  const [placeholder, setPlaceholder] = useState(""); // Placeholder del input de búsqueda
  const [results, setResults] = useState([]); // Resultados de la búsqueda
  var oldContext = "";

  useEffect(() => {
    // Este useEffect, detectará cuando se defina el contextType y cambiará el placeholder del input de búsqueda y los filtros a mostrar
    //Si oldContext esta vacio, se le asignará el contextType
    if (oldContext == "") {
      oldContext = contextType;
    }
    //Si el contextType ha cambiado, se resetearán los filtros
    if (oldContext !== contextType) {
      oldContext = contextType;
      setHasCategory(false);
      setHasDate(false);
      setHasType(false);
      setCategoryList([]);
      setDateList([]);
      setTypeList([]);
    }
    //Dependiendo del contextType, se mostrarán los filtros correspondientes
    if (contextType === "Noticies") {
      setPlaceholder("Cerca notícies");
      setHasCategory(true);
      setHasDate(true);
      setHasType(true);
    } else if (contextType === "Events") {
      setPlaceholder("Cerca events");
      setHasCategory(true);
      setHasDate(true);
      setHasType(true);
    } else if (contextType === "HackersHackeps") {
      setPlaceholder(
        "Cerca hackers (Pots buscar per id (ID 325), nom o correu electrònic)",
      );
      setHasCategory(true);
      setHasType(true);
      setHasDate(false);
      setCategoryList([
        { data: "Pendents", value: false },
        { data: "Acceptats", value: false },
        { data: "Rebutjats", value: false },
        { data: "Individual", value: false },
        { data: "Grups", value: false },
      ]);
      setTypeList([
        { data: "Menor d'edat", value: false },
        { data: "Major d'edat", value: false },
        { data: "Amb restriccions alimentaries", value: false },
        { data: "Sense restriccions alimentaries", value: false },
        { data: "Vegà", value: false },
        { data: "Vegetarià", value: false },
        { data: "Celiac", value: false },
        { data: "Intolerant a la lactosa", value: false },
        { data: "Diabetis", value: false },
        { data: "Altres", value: false },
      ]);
    }
  }, [contextType]);

  useEffect(() => {
    // Este useEffect, detectará los cambios en el searchTerm y realizará las consultas pertinentes a la API
    //A parte, se encargará de resetear los filtros si se cambia el contextType

    async function fetchData() {
      //Dependiendo del contextType, se realizará una consulta u otra
      if (contextType === "Noticies") {
        //Con esto, hacer busquedas en la API de noticias y filtrar segun los filtros seleccionados
      } else if (contextType === "Events") {
        //Con esto hacer busquedas de los eventos y filtrar segun los filtros seleccionados
      } else if (contextType === "HackersParticipants") {
        //Con esto hacer busquedas de los participantes de los hackeps y filtrar segun los filtros seleccionados
      }
    }
    if (searchTerm.length >= 3) {
      //Si tiene mas de 3 caracteres, se realizará la consulta y las actualizaciones pertinentes.
      fetchData();
    }
  }, [searchTerm]);

  const contextData = {
    setCategoryList,
    setDateList,
    setTypeList,
    setContextType,
    setSearchTerm,
    searchTerm,
    hasCategory,
    hasDates,
    hasType,
    categoryList,
    dateList,
    typeList,
    setCategorySelected,
    setDateSelected,
    setTypeSelected,
    categorySelected,
    dateSelected,
    typeSelected,
    placeholder,
    results,
    setResults,
  };

  return (
    <SearchContext.Provider value={contextData}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
