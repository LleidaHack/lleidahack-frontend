import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "src/components/buttons/Button";
import { Link } from "react-router-dom";
import logo from "src/icons/hackLogoWellDone.png";
import { login } from "src/services/AuthenticationService";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ nextScreen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const [isSubmitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const submit = async (values) => {
    try {
      let a = await login(values);
      if (process.env.REACT_APP_DEBUG === "true") console.log(a);
      if (a.errCode === 400) {
        navigate("/user-verification", { state: { email: values.email } });
      } else if (localStorage.getItem("userToken") !== "undefined") {
        if (process.env.REACT_APP_DEBUG === "true")
          console.log("Login successful");
        if (nextScreen) {
          navigate(nextScreen);
        } else navigate("/home");
      } else if (a.errCode === 401) {
        setErrorText("Contrasenya incorrecta");
      } else if (a.errCode === 404) {
        setErrorText("E-mail no trobat");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

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
                <form className="">
                  <div className="font-bold text-base mt-7 w-full">
                    <label className="w-full text-base">
                      <p className="text-white mb-1">Correu:</p>
                      <input
                        className={`${errors.email ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-sm md:text-base`}
                        placeholder="Correu"
                        {...register("email", {
                          required: "E-mail obligatori",
                        })}
                      />
                    </label>
                    {errors.email && (
                      <span className="text-red-400">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="font-bold text-base mt-3">
                    <label className="w-full text-base">
                      <p className="text-white mb-1">Contrasenya:</p>
                      <input
                        type="password"
                        className={`${errors.password ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-sm md:text-base`}
                        placeholder="Contrasenya"
                        {...register("password", {
                          required: "Contraseña obligatoria",
                        })}
                      />
                    </label>
                    {errors.password && (
                      <span className="text-red-400">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <div className="my-3 md:my-7 text-base md:text-xl text-center">
                    <p className="mb-1">
                      <Link to="/forgot-password" className="text-grayColor">
                        Has oblidat les teves credencials?
                      </Link>
                    </p>
                    <p className="mb-0">
                      <Link to="/hacker-form" className="text-grayColor">
                        Encara no tens compte?
                      </Link>
                    </p>
                  </div>
                  <div className="flex flex-col justify-center mt-3">
                    <Button
                      type="submit"
                      primary
                      lg
                      onClick={handleSubmit(submit)}
                      className={` ${!isValid ? "opacity-50 hover:none" : "hover:bg-primaryHackepsDark"}`}
                      disabled={!isValid}
                    >
                      {isSubmitting ? "Iniciant sessió..." : "Inicia sessió"}
                    </Button>
                    <p className="text-red-400 mt-2">{errorText}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
