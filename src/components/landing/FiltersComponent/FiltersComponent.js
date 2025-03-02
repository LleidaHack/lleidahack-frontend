import { React, useEffect, useState } from "react";
import { useSearch } from "src/context/SearchContext";
import FiltersContainer from "./FiltersContainer";

const FiltersComponent = ({}) => {
  const {
    hasCategory,
    hasDates,
    hasType,
    categorySelected,
    typeSelected,
    dateSelected,
  } = useSearch();
  const [basisField, setbasisField] = useState("basis-1/3");
  const [showingCategoryList, setShowingCategoryList] = useState(false);
  const [showingDateList, setShowingDateList] = useState(false);
  const [showingTypeList, setShowingTypeList] = useState(false);
  useEffect(() => {
    let num = 0;
    if (hasCategory) {
      num += 1;
    }
    if (hasDates) {
      num += 1;
    }
    if (hasType) {
      num += 1;
    }
    setbasisField("basis-1/" + num.toString());
  }, [hasCategory, hasDates, hasType]);

  function showCategoryList(element, opened) {
    element.style.transition = "transform 0.3s ease";
    setShowingCategoryList(opened);
    if (opened) {
      element.style.transform = "rotate(180deg)";
    } else {
      element.style.transform = "rotate(0deg)";
    }
  }

  function showDateList(element, opened) {
    setShowingDateList(opened);
    element.style.transition = "transform 0.3s ease";
    if (opened) {
      element.style.transform = "rotate(180deg)";
    } else {
      element.style.transform = "rotate(0deg)";
    }
  }

  function showTypeList(element, opened) {
    setShowingTypeList(opened);
    element.style.transition = "transform 0.3s ease";
    if (opened) {
      element.style.transform = "rotate(180deg)";
    } else {
      element.style.transform = "rotate(0deg)";
    }
  }

  return (
    <div className="filters-component flex flex-row shadow h-20">
      {hasCategory && (
        <div className={`filter-button basis-1/2 bg-white  border-x`}>
          <div className="filter-button__content flex flex-column py-2 px-4">
            <p className="text-grayColor mb-0 select-none	"> CATEGORIA</p>
            <div className="2nd_content flex flex-row justify-between">
              <p className="extra mb-0 select-none	">
                {categorySelected || "Totes les categories"}
              </p>
              <div className="align-middle self-center h-auto">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ rotate: "180deg" }}
                  onClick={(e) =>
                    showingCategoryList
                      ? showCategoryList(e.currentTarget, false)
                      : showCategoryList(e.currentTarget, true)
                  }
                >
                  <path d="M1 1L9.16327 9L17 1" stroke="black" />
                </svg>
              </div>
            </div>
          </div>
          {showingCategoryList && (
            <>
              <FiltersContainer type={"category"} />
            </>
          )}
        </div>
      )}
      {hasType && (
        <>
          <div className={`filter-button basis-1/2 bg-white border-x`}>
            <div className="filter-button__content flex flex-column py-2 px-4">
              <p className="text-grayColor mb-0 select-none	"> TIPUS</p>
              <div className="2nd_content flex flex-row justify-between">
                <p className="extra mb-0 select-none	">
                  {typeSelected || "Tots els tipus"}
                </p>
                <div className="align-middle self-center h-auto">
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    style={{ rotate: "180deg" }}
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) =>
                      showingTypeList
                        ? showTypeList(e.currentTarget, false)
                        : showTypeList(e.currentTarget, true)
                    }
                  >
                    <path d="M1 1L9.16327 9L17 1" stroke="black" />
                  </svg>
                </div>
              </div>
            </div>
            {showingTypeList && (
              <>
                <FiltersContainer type={"type"} />
              </>
            )}
          </div>
        </>
      )}
      {hasDates && (
        <div className={`filter-button basis-1/2 bg-white border-x`}>
          <div className="filter-button__content flex flex-column py-2 px-4">
            <p className="text-grayColor mb-0 select-none	"> Dates</p>
            <div className="2nd_content flex flex-row justify-between">
              <p className="extra mb-0 select-none	">
                {dateSelected || "Totes les dates"}
              </p>
              <div className="align-middle self-center h-auto">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  style={{ rotate: "180deg" }}
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={(e) =>
                    showingDateList
                      ? showDateList(e.currentTarget, false)
                      : showDateList(e.currentTarget, true)
                  }
                >
                  <path d="M1 1L9.16327 9L17 1" stroke="black" />
                </svg>
              </div>
            </div>
          </div>
          {showingDateList && (
            <>
              <FiltersContainer type={"date"} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FiltersComponent;
