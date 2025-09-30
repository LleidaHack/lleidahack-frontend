import React, { useState } from "react";
import logo from "src/assets/img/logoHackeps2025.png";
import LoginForm from "src/components/loginForm/LoginForm";

const LoginPage = ({ nextScreen }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 w-full flex items-center justify-center bg-loginPage">
        <div className="w-full">
          <div className="justify-content-center">
            <div className=" md:mx-0 md:my-0 mx-4 my-2">
              <div className="rounded-xl flex flex-col items-center">
                <img
                  src={logo}
                  className="w-24 md:w-48 h-auto block mx-auto mb-3"
                  alt="Logo"
                />
                <h2 className="text-white md:mb-2 text-3xl md:text-5xl flex items-center text-center">
                  Hola de nou!
                </h2>
                <LoginForm nextScreen={nextScreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
