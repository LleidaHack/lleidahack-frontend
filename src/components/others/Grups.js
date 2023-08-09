import React from 'react'

const Grups = ({ data }) => {
    const handleFunctionCall = (func, params) => {
        if(params.length===0){
            return func()
        } else if(params.length===1){
            return func(params[0])
        } else if(params.length===2){
            return func(params[0],params[1])
        }
    };
    
    return (
      <div>
        <h1>{data.name}</h1>
        {data.left>0?<h1 color='ff0000'>{data.left}LEFT</h1>:""}
        {data.body.map((data, index) => (
          <button key={index} onClick={() => handleFunctionCall(data.body, data.params)}>
            {data.body.name} {data.status?"✅":"🟥"}
          </button>
        ))}
      </div>
    );
  };

export default Grups
