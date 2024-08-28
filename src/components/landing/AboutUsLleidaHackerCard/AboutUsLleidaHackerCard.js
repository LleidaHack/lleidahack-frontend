import React from "react";
import img from "src/assets/img/llhker.png";


const AboutUsLleidaHackerCard = ({name, image = img , role, github, linkedIn, bgcolor, small}) => {
    let textSize = "2xl"
    let iconSize = "5xl"
    let linkedInCircle = "[3rem]"
    let linkedInIcon = "3xl"
    
    if (small) {
        textSize = "xl"
        iconSize = "4xl"
        linkedInCircle = "[2.25rem]"
        linkedInIcon = "2xl"
    }
    
    return(
        <div className={`flex flex-col items-center justify-center bg-${bgcolor} rounded-lg w-1/5 scale-90`} >
            <div className="flex flex-col items-center justify-center mt-4 rounded-full bg-red-500 w-1/2 h-1/2 overflow-hidden">
                <img src={image} alt={name} className={`rounded-full w-full h-full object-cover`}/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className={`text-${textSize} text-wrap font-bold mt-2 mb-0`}>{name}</h1>
                <p className="mt-0">{role}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-5/12 mb-10">
                <div>
                    <a href={github} className={`text-black text-${iconSize}`}>
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <a href={linkedIn} className={`text-primaryLanding text-${linkedInIcon} `}>
                        <div className={`bg-black w-${linkedInCircle} h-${linkedInCircle} rounded-full content-center`}>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default AboutUsLleidaHackerCard;