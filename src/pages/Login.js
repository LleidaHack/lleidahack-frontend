import React from "react";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import LoginPage from "src/components/Login/Login";
import { useLocation } from "react-router-dom";

const Login = (props) => {
  let nextScreen = "/home";
  const { state } = useLocation();
  if (state !== null) {
    nextScreen = state.nextScreen;
  }
  return (
    <div>
      <Header />
      <LoginPage nextScreen={nextScreen} />
      <Footer />
    </div>
  );
};

export default Login;
