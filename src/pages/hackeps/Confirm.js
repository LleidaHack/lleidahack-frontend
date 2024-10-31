import React from "react";
import Header from "src/components/hackeps/Header/Header.js";
import ConfirmAssistance from "src/components/hackeps/ConfirmAssistance/ConfirmAssistance";
import Footer from "src/components/hackeps/Footer/Footer.js";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmAssistancePage = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { confirm = "", token = "" } = state || {};

  useEffect(() => {
    if (!confirm || !token) {
      navigate("/");
    }
  }, [confirm, token, navigate]);

  return (
    <div>
      <Header />
      <ConfirmAssistance confirm={confirm} token={token}/>
      <Footer />
    </div>
  );
};

export default ConfirmAssistancePage;
