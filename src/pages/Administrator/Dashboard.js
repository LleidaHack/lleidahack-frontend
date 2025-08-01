import { React, useEffect, useState } from "react";
import LoginForm from "src/components/loginForm/LoginForm";
import logoLleidaHack from "src/icons/isotip_lleidahack_blanc.png";
import { login, me } from "src/services/AuthenticationService";
import LleidaHackerHome from "src/components/lleidahacker/Sections/LleidaHackerHomeSection";
import LoadSection from "src/components/hackeps/LoadSection/Loadsection";
import Header from "src/components/lleidahacker/header/header";

const Dashboard = ({ section }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [subSection, setSubSection] = useState(section || <LleidaHackerHome />);
  async function checkLleidaHacker() {
    let a = localStorage.getItem("userID");
    let myuser = await me(a);
    if (myuser) {
      setIsLoading(false);
    }
    return myuser && myuser.type === "lleida_hacker";
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      checkLleidaHacker().then((result) => {
        setIsVerified(result);
      });
    } else {
      setIsLoading(false);
    }
    setSubSection(section || <LleidaHackerHome />);
  }, [section]);

  function callbackFunction(childData) {
    setIsVerified(childData);
  }
  if (!isLoading) {
    if (isVerified) {
      //This condition normaly is !isVerified but deleted to test the login
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
          <div>
            <div className="flex flex-col p-10">
              <h1 className="text-3xl font-bold text-center text-white mb-2">
                Inicia sessió com a LleidaHacker
              </h1>
              <LoginForm nextScreen={callbackFunction} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="overflow-hidden h-screen">
          <Header />
          {subSection}
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoadSection />
      </div>
    );
  }
};

export default Dashboard;
