import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "src/icons/hackLogoWellDone.png";
import { resetPassword } from "src/services/AuthenticationService";
import SuccessFeedback from "../Feedbacks/SuccesFeedback";

const ForgetPassword = ({ nextScreen }) => {
  const [status, setStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const success = await resetPassword(data.email);
    setStatus(success);
  };

  return (
    <>
      {!status ? (
        <div className="flex min-h-screen bg-loginPage ">
          <div className="flex-1 w-full flex flex-col items-center mt-36">
            <div className="logoBox place-items-center">
              <img src={logo} alt="logo" className="w-2/5" />
            </div>
            <div className="w-1/3 mt-4">
              <p className="text-5xl text-white text-center">
                Necesites ajuda per a iniciar sessió?
              </p>
            </div>
            <div className="formBox w-1/3 mt-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <label className="text-white">
                  Introdueix el teu correu electrònic
                  <input
                    className={`${errors.email ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-3 text-black`}
                    placeholder="Correu electrònic"
                    {...register("email", {
                      required:
                        "Et falta indicar-nos el teu correu de contacte",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "El correu no és vàlid",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-400">{errors.email.message}</span>
                  )}
                </label>
                <button
                  type="submit"
                  className="bg-primaryHackeps text-white rounded-lg p-2"
                >
                  Enviar enllaç de recuperació
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-secondaryHackeps">
          <div className="flex-1 flex items-center justify-center">
            <section className="w-1/2 flex justify-center rounded-2xl p-5 flex-wrap text-white">
              <div className="Part2">
                <SuccessFeedback
                  title="Enllaç enviat correctament."
                  text={`En breus rebràs un correu electrònic amb un enllaç per a recuperar el teu compte.`}
                  italics="Si no ho reps, comproba la bustia de spam."
                  hasButton={true}
                  buttonLink="/"
                  buttonText="Tornar a l'Inici"
                />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
