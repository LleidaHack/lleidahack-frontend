import React from "react";
import Header from "src/components/hackeps/Header/Header";
import Footer from "src/components/hackeps/Footer/Footer";
import LoginPage from "src/components/hackeps/Login/Login";
import { useLocation } from "react-router-dom";

const Login = (props) => {
  let nextScreen = "/home";
  const { state } = useLocation();
  if (state) {
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
