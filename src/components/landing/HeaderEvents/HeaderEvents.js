import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import FiltersComponent from "../FiltersComponent/FiltersComponent";
const HeaderEvents = () => {
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
    </div>
  );
};

export default HeaderEvents;
