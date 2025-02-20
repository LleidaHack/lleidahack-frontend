import {React, useEffect, useState} from "react";
import { useSearch } from "src/context/SearchContext";

const FiltersComponent = ({}) => {
  const{hasCategory, hasDates, hasType, setCategorySelected, setDataSelected, setTypeSelected, categoryList, dateList, typeList} = useSearch(); 
  
    const [numberFields, setNumberFields] = useState(3);

    useEffect(() => {
      let num = 0;
      if(hasCategory){
        num += 1;
      }
      if(hasDates){
        num += 1;
      }
      if(hasType){
        num += 1;
      }
      setNumberFields(num || 1);
      console.log("Category: "+hasCategory);
      console.log("Date: "+hasDates);
      console.log("Type: "+hasType);
      console.log("Numbers fields is: " + num.toString());
    }, [hasCategory, hasDates, hasType]);


  return (
    <div className="filters-component flex flex-row shadow h-20">
      <div className={`filter-button basis-1/${numberFields.toString()} bg-white w-32 py-2 px-4 border-x`}>
      {hasCategory && (
        <div className="filter-button__content flex flex-column">
          <p className="text-grayColor mb-0"> CATEGORIA</p>
          <div className="2nd_content flex flex-row justify-between">
            <p className="extra mb-0">Totes les categories</p>
            <div className="align-middle self-center h-auto">
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L9.16327 9L17 1" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      )}
      </div>
      <div className={`filter-button basis-1/${numberFields.toString()} bg-white w-32 py-2 px-4 border-x`}> 
      {hasType && (
        <div className="filter-button__content flex flex-column">
          <p className="text-grayColor mb-0"> TIPUS</p>
          <div className="2nd_content flex flex-row justify-between">
            <p className="extra mb-0">Tots els tipus</p>
            <div className="align-middle self-center h-auto">
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L9.16327 9L17 1" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      )}
      </div>
      <div className={`filter-button basis-1/${numberFields.toString()} bg-white w-32 py-2 px-4 border-x`}>
      {hasDates && (
        <div className="filter-button__content flex flex-column">
          <p className="text-grayColor mb-0"> Dates</p>
          <div className="2nd_content flex flex-row justify-between">
            <p className="extra mb-0">Totes les dates</p>
            <div className="align-middle self-center h-auto">
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L9.16327 9L17 1" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default FiltersComponent;
