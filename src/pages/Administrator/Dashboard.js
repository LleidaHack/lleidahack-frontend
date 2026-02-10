import { React, useEffect, useState } from "react";
import { me } from "src/services/AuthenticationService";
import { getUserById } from "src/services/UserService";
import LleidaHackerHome from "src/components/lleidahacker/Sections/LleidaHackerHomeSection";
import LoadingScreen from "src/components/common/LoadingScreen";
import Header from "src/components/lleidahacker/header/header";
import { useNavigate } from "react-router-dom";

const checkAuthStatus = async () => {
  let userId = localStorage.getItem("userID");

  if (!userId) {
    try {
      const res = await me();
      userId = res.id;
    } catch (error) {
      console.error("Error en servicio 'me':", error);
      return false;
    }
  }

  if (!userId) {
    return false;
  }

  try {
    const user = await getUserById(userId);
    return user && user.type === "lleida_hacker";
  } catch (error) {
    console.error("Error en servicio 'getUserById':", error);
    return false;
  }
};

const Dashboard = ({ section }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [subSection, setSubSection] = useState(section || <LleidaHackerHome />);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      const checkVerify = async () => {
        const isAuth = await checkAuthStatus();
        setIsVerified(isAuth);
        setIsLoading(false);
      };
      checkVerify();
    } else {
      setIsLoading(false);
    }
    setSubSection(section || <LleidaHackerHome />);
  }, [section]);

  if (!isLoading) {
    if (!isVerified) {
      navigate("/login");
    } else {
      return (
        <div className="overflow-hidden h-screen">
          <Header />
          {subSection}
        </div>
      );
    }
  } else {
    return <LoadingScreen />;
  }
};

export default Dashboard;
