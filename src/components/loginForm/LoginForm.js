import React, { useState } from "react";
import { login } from "src/services/AuthenticationService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "src/components/buttons/Button";

const LoginForm = ({ nextScreen, textWhite = false }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onChange",
  });
  const [textColor, setTextColor] = useState(
    textWhite ? "text-white" : "text-grayColor",
  );
  const navigate = useNavigate();
  const [isSubmitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const submit = async (values) => {
    setSubmitting(true);
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
    <div>
      <form className="">
        <div className="text-base mt-7 w-full">
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
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </div>

        <div className="text-base mt-3">
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
            <span className="text-red-400">{errors.password.message}</span>
          )}
        </div>

        <div className="my-3 md:my-7 text-base md:text-xl text-center">
          <p className="mb-1">
            <Link to="/forgot-password" className={` ${textColor}`}>
              Has oblidat les teves credencials?
            </Link>
          </p>
          <p className="mb-0">
            <Link to="/hacker-form" className={` ${textColor}`}>
              Encara no tens compte?
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-center mt-3">
          <Button
            type="submit"
            {...(textWhite
              ? { secondaryLanding: true }
              : { primaryHackeps: true })}
            lg
            onClick={handleSubmit(submit)}
            className={` ${!isValid ? "opacity-50 hover:none bg-secondaryLanding" : "hover:bg-secondaryHackeps"}`}
            disabled={!isValid}
            light
          >
            {isSubmitting ? "Iniciant sessió..." : "Inicia sessió"}
          </Button>
          <p className="text-red-400 mt-2">{errorText}</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
