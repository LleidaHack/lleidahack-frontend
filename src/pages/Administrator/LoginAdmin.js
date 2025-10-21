import React from "react";
import LoginForm from "src/components/loginForm/LoginForm";

const LoginAdmin = () => {
  return (
    <div className="bg-primaryLanding min-h-screen flex items-center justify-center">
      <LoginForm nextScreen={"/"} />
    </div>
  );
};

export default LoginAdmin;
