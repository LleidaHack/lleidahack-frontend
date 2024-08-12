import {React, useState} from "react";
import LoginForm from "src/components/lleidahacker/LoginForm/LoginForm";
import logoLleidaHack from "src/icons/isotip_lleidahack_blanc.png";
import LleidaHackerPage from "src/pages/LleidaHacker/LleidaHackerPage";

const NewDashboard = () => {
    const [isVerified, setIsVerified] = useState(false);

    if (isVerified){
        return (
            <div className="absolute flex flex-col bg-primaryLanding w-screen h-[100vh] justify-center content-center items-center">
                <div className="">
                    <a href="/admin">
                        <img
                        src={logoLleidaHack}
                        alt="logo"
                        className="h-12 w-12 flex-none"
                        />
                    </a>
                </div>
                <LoginForm />
                
            </div>
        );
    }else{
        return(
            <div>
                <LleidaHackerPage />
            </div>
        )
    }

    };

export default NewDashboard;