import {React, useState} from "react";

const CardMembers = ({name, image, github, linkedIn, role, bgcolor, opacity}) => {

    
    return(
        <div className={`flex flex-col items-center justify-center bg-${bgcolor}  rounded-md w-96`} style={{ opacity: opacity }}>
            <div className="flex flex-col items-center justify-center mt-4 rounded-full bg-red-500 w-[13rem] h-[13rem] overflow-hidden">
                <img src={image} alt={name} className="rounded-full w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mt-2 mb-0">{name}</h1>
                <p className="mt-0">{role}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-5/12 mb-10">
                <div>
                    <a href={github} target="_blank" className="text-black text-5xl">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <a href={linkedIn} target="_blank" className="text-primaryLanding text-3xl ">
                        <div className="bg-black w-[3rem] h-[3rem] rounded-full content-center">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardMembers;