import { React, useEffect, useState } from "react";
import InputSearch from "src/components/landing/InputSearch/InputSearch";
import FiltersComponent from "src/components/landing/FiltersComponent/FiltersComponent";

const HeaderNoticies = () => {
  const [onMobile, setOnMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-noticies bg-background-patron px-3 md:px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
      <div className="header-noticies__content ">
        <h1 className="header-noticies__title font-medium	text-4xl">
          Notícies
        </h1>
        <div className="searcher_div my-6">
          <InputSearch
            placeholder={"Cercar Noticies"}
            searchtype={"noticies"}
          />
        </div>
        <div className="filters_div mb-12">
          <FiltersComponent />
        </div>
      </div>

      {!onMobile}
    </div>
  );
};

export default HeaderNoticies;
