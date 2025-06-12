import React from "react";
import Header from "src/components/lleidahacker/header/header";
import image1 from "src/assets/img/programmersen.png";
import eventsImage from "src/assets/img/events.jpg";
import groupImage from "src/assets/img/workgroups.jpg";
import administrator from "src/assets/img/administrator.jpg";
import { useNavigate } from "react-router-dom";
import GrupsCardBox from "src/components/lleidahacker/GrupsCardBox/grupsCardBox";
// import { Button } from "react-bootstrap";
import Button from "src/components/buttons/Button";


const LleidaHackerHome = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title:"Grups de treball",
            bgImage: groupImage,
            url:"/workgroups",
        },
        {
            title:"Events",
            bgImage: eventsImage,
            url:"/events",
        },
        {
            title:"Administració",
            bgImage: administrator,
            url:"/administration",
        },
    ];

  return (
    
    <div className="flex flex-col h-screen">

        <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 flex-none h-40">
            <div className="header-events__content ">
                <h1 className="header-events__title text-4xl ">Dashboard</h1>
            </div>
        </div>

        {/* Contenedor principal para las tarjetas, con flex-1 para que ocupe el espacio restante */}
        <div className="w-full flex-1 flex flex-row h-full py-32 px-56 gap-4">
            {categories.map((category, index) => (
                <div key={index} className="flex flex-col justify-center flex-1 my-2 ">
                    <GrupsCardBox
                        title={category.title}
                        bgImg={category.bgImage}
                        url={category.url}
                    />
                </div>
            ))}
        </div>
    </div>

  );
};

export default LleidaHackerHome;
