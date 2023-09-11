import React from "react";
import { useState } from "react";

const Grups = ({ data, autotest }) => {
  const handleFunctionCall = async (func, params, i) => {
    const a = await func(params?.[0], params?.[1]);
    if (Array.isArray(a) && a.length === 0) {
      return a;
    }
    if (a === { detail: "Insufficient permissions" }) {
      return a;
    }
    const updatedItems = [...buttonStates];
    updatedItems[i] = true;
    setButtonStates(updatedItems);
    return a;
  };

  const [buttonStates, setButtonStates] = useState(data.body.map(() => false));

  return (
    <div>
      <h1>{data.name}</h1>
      {data.left > 0 ? <h1 color="ff0000">{data.left}LEFT</h1> : ""}
      {data.body.map((data, index) => (
        <button
          key={index}
          onClick={() => handleFunctionCall(data.body, data.params, index)}
        >
          {data.body.name}{" "}
          {autotest
            ? buttonStates[index]
              ? "✅"
              : "🟥"
            : data.status
            ? "✅"
            : "🟥"}
        </button>
      ))}
    </div>
  );
};

export default Grups;
