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
    var oldContext = "Noticies"
    useEffect(() => {
        // Este useEffect, detectará los cambios en el searchTerm y realizará las consultas pertinentes a la API
        //A parte, se encargará de resetear los filtros si se cambia el contextType
        
        // Si el contextType cambia, se resetearán los filtros
        // if(oldContext !== contextType){  //desactivado mientras test
        //     setHasCategory(false);
        //     setHasDate(false);
        //     setHasType(false);
        //     setCategoryList([]);
        //     setDateList([]);
        //     setTypeList([]);
        //     oldContext = contextType;
        // }

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
        if (searchTerm.length >=3) {
            //Si tiene mas de 3 caracteres, se realizará la consulta y las actualizaciones pertinentes.
            fetchData();
        }
    }, [searchTerm, contextType]);
    
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
        placeholder,
        results
    };

    return (
        <SearchContext.Provider value={contextData}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);