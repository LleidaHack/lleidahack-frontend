import React from "react";
import Header from "src/components/Header/Header.js";
import LoginUnverified from "src/components/others/LoginUnverified";
import Footer from "src/components/Footer/Footer.js";
import { useLocation } from "react-router-dom";

const LoginVerify = (props) => {
  let email = "";
  const { state } = useLocation();
  if (state) 
    email = state.email;
  
  return (
    <div className="faq-page">
      <Header />
      <LoginUnverified email={email}/>
      <Footer />
    </div>
)};
  
export default LoginVerify;