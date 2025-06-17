import React, { useEffect, useState } from "react";
import "src/components/hackeps/Contacte/Contacte.css";
import logo from "src/assets/logo_text_llh.svg";
import instagramLogo from "src/icons/instagram_negre.png";
import linkedinLogo from "src/icons/linkedin_negre.png";
import twitterLogo from "src/icons/X_negre.png";
import { useForm } from "react-hook-form";
import { contacte } from "src/services/AuthenticationService";
import SuccessFeedback from "src/components/hackeps/Feedbacks/SuccesFeedback";
import FailFeedback from "src/components/hackeps/Feedbacks/FailFeedback";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const ContactePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [mailSended, setMailSended] = useState(false);
  const [mailStatus, setMailStatus] = useState(false);
  const handleButtonClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data) => {
    const success = await contacte(data);
    setMailStatus(success);
    setMailSended(true);
  };

  return (
    <div className="h-screen bg-secondaryHackeps">
      {!mailSended ? (
        <>
          <TitleGeneralized underline>Contacte</TitleGeneralized>
          <div className="flex flex-row justify-center gap-2 mx-4 ">
            <div className="  basis-1/2 justify-items-center content-center">
              <img src={logo} alt="logo" className="w-1/3" />
              <p className="text-xl mt-3">
                Esdeveniment organitzat per LleidaHack
              </p>
              <div className="flex flex-row gap-3 mt-2">
                <a href="https://twitter.com/lleidahack">
                  <img src={twitterLogo} alt="twitter" className="w-12" />
                </a>
                <a href="https://www.linkedin.com/company/lleidahack">
                  <img src={linkedinLogo} alt="linkedin" className="w-12" />
                </a>
                <a href="https://www.instagram.com/lleidahack/">
                  <img src={instagramLogo} alt="instagram" className="w-12" />
                </a>
              </div>
            </div>

            <div className="basis-1/2 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <label>
                  Nom:
                  <input
                    className={`${errors.name ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    placeholder="Nom"
                    {...register("name", {
                      required: "El nom no pot estar buit",
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-400">{errors.name.message}</span>
                  )}
                </label>

                <label>
                  Correu:
                  <input
                    className={`${errors.name ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    placeholder="correu"
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

                <label>
                  Títol:
                  <input
                    className={`${errors.name ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    placeholder="Titol del missatge"
                    {...register("title", {
                      required: "El titol no pot estar buit",
                    })}
                  />
                  {errors.title && (
                    <span className="text-red-400">{errors.title.message}</span>
                  )}
                </label>

                <label>
                  Missatge:
                  <textarea
                    className={`${errors.name ? "bg-pink-100" : "bg-white"} px-2 text-base`}
                    placeholder="Indicans en que et podem ajudar."
                    {...register("message", {
                      required: "El missatge no pot estar buit",
                    })}
                  />
                  {errors.message && (
                    <span className="text-red-400">
                      {errors.message.message}
                    </span>
                  )}
                </label>

                <input
                  className="hover:bg-primaryHackeps hover:text-white transition ease-in-out delay-100 min-h-10"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          {window.scrollTo(0, 0)}
          {!mailStatus ? (
            <>
              <FailFeedback
                title={`Error enviant el teu missatge.`}
                text={`Sembla que algo ha fallat mentre registravem el teu missatge.`}
                hasButton={true}
                buttonLink={`/contacte`}
                buttonText={`Intentar novament`}
                italic={`Torna a intentar-ho novament. En cas que segueixi fallant, contacta amb nosaltres utilitzant \n les nostres xarxes socials que trobarás a la part inferior de la pantalla.`}
                onButtonClick={handleButtonClick}
              />
            </>
          ) : (
            <>
              <SuccessFeedback
                title="Missatge enviat correctament."
                text={`Gracies per contactar amb LleidaHack. El teu missatge s'ha enviat correctament. \n En cas que necesitesim ficar-nos en contacte amb tu, ho fariem amb el correu 
                que ens has proporcionat.`}
                hasButton={true}
                buttonLink="/#home"
                buttonText="Tornar al inici"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContactePage;
