import {React, useState, useEffect} from "react";

const GrupsCardBoxProfile = ({name, role, bgcolor, opacity, image, size}) => {
    const [hover, enableHover] = useState(false);
    const [sizebox, setSizeBox] = useState("normal");
    
    useEffect(() => {
        if(opacity == "100"){
            enableHover(true)
        }
    }, [opacity]);

    useEffect(() => {
        setSizeBox(size)
    }
    , [size]);

    function clicked() {
        if(opacity == "100"){
            const url = "/admin/grups/" + (name).toLowerCase();
            window.location.href = url;
        }

    }


    return (
        <div className={`flex flex-row items-center align-center bg-${bgcolor} rounded-md w-${sizebox === "small" ? "64" : "72"} h-${sizebox === "small" ? "24" : "36"}`} style={{ opacity: opacity }} onClick={clicked}>
            <div className={`flex flex-col items-center justify-center  rounded-full bg-white  overflow-hidden ml-2 w-${sizebox === "small" ? "16" : "24"} h-${sizebox === "small" ? "16" : "24"}`}>
                <img src={image} alt={name} className="rounded-full w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col items-left ml-3 text-white">
                <h1 className="text-2xl font-bold mt-2 mb-0">{name}</h1>
                <p className="mt-0">"{role}"</p>
            </div>
        </div>
    );
}

export default GrupsCardBoxProfile;