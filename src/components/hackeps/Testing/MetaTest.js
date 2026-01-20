import React from "react";
import Grups from "src/components/hackeps/Testing/Grups";

const MetaTest = ({ functionsList, autotest }) => {
  return (
    <div>
      {functionsList.map((data, i) => (
        <Grups key={i} data={data} autotest={autotest} />
      ))}
    </div>
  );
};

export default MetaTest;
