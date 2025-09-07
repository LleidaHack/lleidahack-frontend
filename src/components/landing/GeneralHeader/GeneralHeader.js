import { React, useEffect, useState } from "react";
import InputSearch from "src/components/landing/InputSearch/InputSearch";
import FiltersComponent from "src/components/landing/FiltersComponent/FiltersComponent";
import HeaderLinks from "src/components/landing/GeneralHeader/HeaderLinks";

const GeneralHeader = ({
  sectionName,
  category = null,
  allowSearch = false,
  hasFilters = false,
  links = null,
}) => {
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
    <div className="general-header bg-background-patron px-3 md:px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
      <div className="general-header__content ">
        <h1 className="general-header__title font-medium	text-4xl">
          {sectionName}
        </h1>

        {allowSearch ? (
          <div className="searcher_div my-6">
            <InputSearch
              placeholder={`Cerca ${sectionName.toLowerCase()}`}
              searchtype={category}
            />
          </div>
        ) : null}

        {hasFilters ? (
          <div className="filters_div mb-12">
            <FiltersComponent category />
          </div>
        ) : null}
      </div>

      {!onMobile && links && <HeaderLinks links={links} />}
    </div>
  );
};

export default GeneralHeader;
