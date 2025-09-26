import React, { useEffect, useState } from "react";
import "src/components/hackeps/Contacte/Contacte.css";
import { useForm } from "react-hook-form";
import { contacte } from "src/services/AuthenticationService";
import SuccessFeedback from "src/components/hackeps/Feedbacks/SuccesFeedback";
import FailFeedback from "src/components/hackeps/Feedbacks/FailFeedback";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import MentorImage from "src/assets/Mentor.png";

const ContacteMentorPage = () => {
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
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data) => {
    const formattedData = {
      name: data.name,
      title: `Proposta de Mentor - ${data.name}`,
      email: data.email,
      message: `
      Àrea d'especialització: ${data.specialization}
      Anys d'experiència: ${data.experience}
      Empresa/Organització: ${data.company || "No especificat"}
      Experiència prèvia com a mentor: ${data.mentorExperience}
      Motivació: ${data.motivation}
      Disponibilitat: ${data.availability}
    `,
    };

    const success = await contacte(formattedData);
    setMailStatus(success);
    setMailSended(true);
  };

  return (
    <div className="min-h-screen bg-secondaryHackeps pb-8">
      {!mailSended ? (
        <>
          <TitleGeneralized underline>Aplicar com a Mentor</TitleGeneralized>

          {/* Texto pirata arriba */}
          <div className="mx-auto text-left mb-10 px-20">
            <p className="text-lg font-semibold mb-3">
              Ah del vaixell, futur mentor!
            </p>
            <p className="text-base mb-2">
              Els vents ens porten bones noves, i tu has decidit embarcar-te en
              la gran aventura de la HackEPS. Necessitem mariners valents com tu
              per guiar la tripulació en la recerca de tresors tecnològics i
              projectes innovadors.
            </p>
            <p className="text-base opacity-90">
              Els teus coneixements seran el mapa que obrirà nous camins als
              participants, i el teu esperit serà la brúixola que els guiarà
              enmig de la tempesta de codis.
            </p>
            <p className="text-sm mt-3 opacity-75 italic">
              Omple el pergamí de sota i uneix-te a la nostra tripulació de
              mentors!
            </p>
          </div>

          {/* Imagen + formulario */}
          <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] mx-4 gap-8">
            {/* Imagen a la izquierda */}
            <div className="md:basis-1/3 flex justify-center">
              <img
                src={MentorImage}
                alt="Mentor"
                className="w-2/3 md:w-full max-w-sm"
              />
            </div>

            {/* Formulario a la derecha (sin cambiar estilos) */}
            <div className="md:basis-2/3 w-full px-20">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <label>
                  Nom complet:
                  <input
                    className={`${errors.name ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    placeholder="El teu nom complet"
                    {...register("name", {
                      required: "El nom no pot estar buit",
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-400">{errors.name.message}</span>
                  )}
                </label>

                <label>
                  Correu electrònic:
                  <input
                    className={`${errors.email ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    placeholder="el_teu_correu@exemple.com"
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
                  Àrea d'especialització:
                  <select
                    className={`${errors.specialization ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    {...register("specialization", {
                      required:
                        "Si us plau, selecciona la teva àrea d'especialització",
                    })}
                  >
                    <option value="">Selecciona una àrea...</option>
                    <option value="frontend">Desenvolupament Frontend</option>
                    <option value="backend">Desenvolupament Backend</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="mobile">Desenvolupament Mòbil</option>
                    <option value="ai">Intel·ligència Artificial</option>
                    <option value="data">Data Science</option>
                    <option value="ux">UX/UI Design</option>
                    <option value="devops">DevOps/Infrastructure</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="iot">Internet of Things</option>
                    <option value="other">Altres</option>
                  </select>
                  {errors.specialization && (
                    <span className="text-red-400">
                      {errors.specialization.message}
                    </span>
                  )}
                </label>

                <label>
                  Anys d'experiència:
                  <select
                    className={`${errors.experience ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base`}
                    {...register("experience", {
                      required:
                        "Si us plau, indica els teus anys d'experiència",
                    })}
                  >
                    <option value="">Selecciona...</option>
                    <option value="0-1">0-1 anys</option>
                    <option value="2-3">2-3 anys</option>
                    <option value="4-5">4-5 anys</option>
                    <option value="6-10">6-10 anys</option>
                    <option value="10+">Més de 10 anys</option>
                  </select>
                  {errors.experience && (
                    <span className="text-red-400">
                      {errors.experience.message}
                    </span>
                  )}
                </label>

                <label>
                  Empresa/Organització/Formació (opcional):
                  <input
                    className="bg-white min-h-10 px-2 text-base"
                    placeholder="On treballes o estudies actualment"
                    {...register("company")}
                  />
                </label>

                <label>
                  Experiència prèvia com a mentor:
                  <textarea
                    className={`${errors.mentorExperience ? "bg-pink-100" : "bg-white"} px-2 text-base min-h-20`}
                    placeholder="Explica'ns si has fet de mentor abans i en quins contexts..."
                    {...register("mentorExperience", {
                      required:
                        "Si us plau, explica'ns la teva experiència com a mentor",
                    })}
                  />
                  {errors.mentorExperience && (
                    <span className="text-red-400">
                      {errors.mentorExperience.message}
                    </span>
                  )}
                </label>

                <label>
                  Motivació per ser mentor:
                  <textarea
                    className={`${errors.motivation ? "bg-pink-100" : "bg-white"} px-2 text-base min-h-20`}
                    placeholder="Què et motiva a ser mentor a HackEPS? Com creus que pots ajudar als participants?"
                    {...register("motivation", {
                      required: "Si us plau, explica'ns la teva motivació",
                    })}
                  />
                  {errors.motivation && (
                    <span className="text-red-400">
                      {errors.motivation.message}
                    </span>
                  )}
                </label>

                <label>
                  Disponibilitat:
                  <textarea
                    className={`${errors.availability ? "bg-pink-100" : "bg-white"} px-2 text-base min-h-16`}
                    placeholder="Indica la teva disponibilitat durant l'esdeveniment (horaris, dies, modalitat presencial/online...)"
                    {...register("availability", {
                      required: "Si us plau, indica la teva disponibilitat",
                    })}
                  />
                  {errors.availability && (
                    <span className="text-red-400">
                      {errors.availability.message}
                    </span>
                  )}
                </label>

                <input
                  className="hover:bg-primaryHackeps hover:text-white transition ease-in-out delay-100 min-h-10 cursor-pointer"
                  type="submit"
                  value="Enviar candidatura"
                />
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          {window.scrollTo(0, 0)}
          {!mailStatus ? (
            <FailFeedback
              title={`Error enviant el teu missatge.`}
              text={`Sembla que algo ha fallat mentre registravem el teu missatge.`}
              hasButton={true}
              buttonLink={`/contacte`}
              buttonText={`Intentar novament`}
              italic={`Torna a intentar-ho novament. En cas que segueixi fallant, contacta amb nosaltres utilitzant \n les nostres xarxes socials que trobarás a la part inferior de la pantalla.`}
              onButtonClick={handleButtonClick}
            />
          ) : (
            <SuccessFeedback
              title="Missatge enviat correctament."
              text={`Gracies per contactar amb LleidaHack. El teu missatge s'ha enviat correctament. \n En cas que necesitesim ficar-nos en contacte amb tu, ho fariem amb el correu que ens has proporcionat.`}
              hasButton={true}
              buttonLink="/#home"
              buttonText="Tornar al inici"
            />
          )}
        </>
      )}
    </div>
  );
};

export default ContacteMentorPage;
