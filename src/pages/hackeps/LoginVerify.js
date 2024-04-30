import React from "react";
import Header from "src/components/hackeps/Header/Header.js";
import LoginUnverified from "src/components/hackeps/LoginUnverified/LoginUnverified";
import Footer from "src/components/hackeps/Footer/Footer.js";
import { useLocation } from "react-router-dom";

const LoginVerify = (props) => {
  let email = "";
  const { state } = useLocation();
  if (state) email = state.email;

  return (
    <div className="faq-page">
      <Header />
      <LoginUnverified email={email} />
      <Footer />
    </div>
  );
};

export default LoginVerify;
