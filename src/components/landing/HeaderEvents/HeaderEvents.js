import {React, useState, useEffect} from "react";
import InputSearch from "../InputSearch/InputSearch";
import FiltersComponent from "../FiltersComponent/FiltersComponent";
import { useSearch } from "src/context/SearchContext";
const HeaderEvents = ({searchtype}) => {  //TODO Se tendria que especificar que tipo de buscador es (noticias, eventos, hackeps participants y asi gestionar el tipo de filtros y datos a mostrar.)
  const [filterComp, setFilterComp] = useState();
  const {setSearchType} = useSearch();
  useEffect(() => {
    setSearchType(searchtype);
    
  }, [searchtype]);
  
  return (
    <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
      <div className="header-events__content ">
        <h1 className="header-events__title">Events</h1>
        <div className="searcher_div mb-12 ">
          <InputSearch placeholder={"Cercar events"} searchtype={"events"} />
        </div>
        <div className="filters_div mb-12">
          <FiltersComponent />
        </div>
      </div>

      {/* <div className='last_header flex flex-row gap-8 place-content-center py-4'>
                    <div className='mr-12'><p className='mb-0'>Destacat</p></div>
                    <div className='mr-12'><p className='mb-0'>Últims events</p></div>
                    <div className=''><p className='mb-0'>Propers events</p></div>

                </div> */}
    </div>
  );
};

export default HeaderEvents;
