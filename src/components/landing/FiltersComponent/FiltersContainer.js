import React, { useEffect, useState } from "react";
import { useSearch } from "src/context/SearchContext";

const FiltersContainer = ({ type }) => {
  const [typeFilter, setTypeFilter] = useState("");
  const {
    setCategorySelected,
    setDateSelected,
    setTypeSelected,
    categoryList,
    dateList,
    typeList,
    setCategoryList,
    setDateList,
    setTypeList,
  } = useSearch();
  const [listStr, setListStr] = useState([]);

  useEffect(() => {
    setTypeFilter(type);
  }, [type]);

  useEffect(() => {
    if (typeFilter === "category") {
      setListStr(categoryList);
    } else if (typeFilter === "date") {
      setListStr(dateList);
    } else if (typeFilter === "type") {
      setListStr(typeList);
    }
  }, [typeFilter, dateList]);

  //Con setCategorySelected, setDateSelected y setTypeSelected, haremos la lista string de los categoryList, dateList y typeList que esten true

  const handleDataChange = (e, data) => {
    let updatedList;
    if (typeFilter === "category") {
      updatedList = categoryList.map((item) =>
        item.data === data ? { ...item, value: e.target.checked } : item,
      );
      setCategoryList(updatedList);
      console.log(fromBoolToString(updatedList));
      setCategorySelected(fromBoolToString(updatedList));
      setListStr(updatedList);
    } else if (typeFilter === "date") {
      updatedList = dateList.map((item) =>
        item.data === data ? { ...item, value: e.target.checked } : item,
      );
      setDateList(updatedList);
      setDateSelected(fromBoolToString(updatedList));
      setListStr(updatedList);
    } else if (typeFilter === "type") {
      updatedList = typeList.map((item) =>
        item.data === data ? { ...item, value: e.target.checked } : item,
      );
      setTypeList(updatedList); //Lista de bools para aplicar en bk los filtros de busqueda
      setTypeSelected(fromBoolToString(updatedList)); //Con esto tendre la lista string para mostrar en web
      setListStr(updatedList);
    }
  };

  function fromBoolToString(list) {
    let listStre = [];
    list.forEach((item) => {
      if (item.value) {
        listStre.push(item.data);
      }
    });
    return listStre.join(", "); // Join the array into a string separated by commas
  }

  return (
    <>
      <div className="bg-blue-100 w-full h-96 z-50 my-3 flex flex-col px-3 py-3 pb-5 rounded-b-lg shadow-lg">
        <div className="">
          <p className="mx-2">Opcions de filtre:</p>
          <hr className="my-4 border-black mx-2" />
        </div>
        <div className="overflow-y-auto">
          {listStr.map((item) => (
            <label key={item.data} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.value}
                onChange={(e) => handleDataChange(e, item.data)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-800">{item.data}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default FiltersContainer;
