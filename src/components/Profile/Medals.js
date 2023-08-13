import React from "react";
import medal from "../../icons/medal_example.png";


const Medals = () => {
    
    const medals = [medal, medal, medal, medal, medal, medal]

    return ( <div className="container w-100 p-bg-red p-4 pb-5">
              <h2>Medalles</h2>
              <div className="container mt-2 text-center m-0">
                <div className="row m-auto">
                  {medals.map((element, i) => (
                    <div className="col-4 mt-2 text-center ">
                      <img className=" m-auto" src={element} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>)
};


export default Medals;