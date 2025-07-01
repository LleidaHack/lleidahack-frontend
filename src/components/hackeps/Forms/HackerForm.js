import { useState } from "react";
import { signupHacker } from "src/services/HackerService";
import FileBase from "react-file-base64";
import userIcon from "src/icons/user2.png";
import FailFeedback from "../Feedbacks/FailFeedback";
import SuccessFeedback from "../Feedbacks/SuccesFeedback";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import { useForm } from "react-hook-form";
import Button from "src/components/buttons/Button";

const minAge = "14";
const date = new Date();
date.setFullYear(date.getFullYear() - minAge);

export const HackerStepperForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onChange",
  });
  const [pfpImage, setImage] = useState("");
  const [isPfpTooLarge, setPfpTooLarge] = useState(false);
  // Error message for last page of the form
  const [errorMsg, setErrorMsg] = useState("");
  //Feedback component
  const [submiting, setSubmiting] = useState(false); //si es false, encara no s'ha donat al submit, pero si es true, es mostra el feedback
  const [statusSubmit, setStatusSubmit] = useState(false); //si es false, error, si es true tot esta correcte
  const [errCause, setCauseError] = useState(""); //si es false, error, si es true tot esta correcte
  const [step, setStep] = useState(1);
  const [hideSubmit, setHideSubmit] = useState(false);

  const onSubmit = async (values) => {
    setHideSubmit(true);
    const hacker = {
      name: [values.firstName, values.lastName].join(" "),
      nickname: values.nickname,
      password: values.password,
      birthdate: values.birthdate,
      food_restrictions: "",
      email: values.email,
      config: {
        recive_notifications: values.notifications,
        default_lang: "cat",
        comercial_notifications: values.notifications,
        terms_and_conditions: true,
      },
      telephone: values.phone.replace(/\s+/g, ""),
      address: "",
      image: pfpImage,
      github: "",
      linkedin: "",
    };
    if (values.termsConditions) {
      const res = await signupHacker(hacker);
      if (res.errCode) {
        setStatusSubmit(false);
        let causeError = "";
        if (res.errMssg === "Email already exists") {
          causeError = "El correu que has introduit es troba registrat.";
        } else if (res.errMssg === "Nickname already exists") {
          causeError = "El nickname que has introduit es troba registrat.";
        } else if (res.errMssg === "Telephone already exists") {
          causeError = "El telefon que has introduit es troba registrat.";
        } else {
          causeError = isPfpTooLarge
            ? "La foto de perfil introduida és massa gran"
            : "Imatge no vàlida";
        }
        setCauseError(causeError);
        setErrorMsg(causeError);
        setHideSubmit(false);
        return;
      } else if (res.detail) {
        setStatusSubmit(false);
        setCauseError(res.detail[0].msg);
        setErrorMsg(res.detail[0].msg);
        setHideSubmit(false);
      } else if (res.success) {
        setStatusSubmit(true);
        setSubmiting(true);
        setHideSubmit(false);
      }
    } else {
      setErrorMsg("Has d'acceptar els termes i condicions");
    }
  };

  const handleImageChange = (event) => {
    setErrorMsg("");
    setPfpTooLarge(parseFloat(event.size) > 1024);
    setImage(event.base64);
  };
  const handleImageUrlChange = (event) => {
    setErrorMsg("");
    setImage(event.target.value.trim());
    setPfpTooLarge(false);
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  const password = watch("password");

  return (
    <>
      <div
        id="hackerForm"
        className="sm:px-56 justify-center min-h-screen flex pb-5 align-top bg-secondaryHackeps"
      >
        {!submiting ? (
          <div className="flex flex-col gap-3 w-full">
            <div className="stepInfo self-center my-4">
              <div className="flex justify-center items-center space-x-4">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${step === num ? "bg-primaryHackeps text-white" : "bg-gray-300 text-black"}`}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <hr className="w-1/2 mt-4 border-t-2 border-gray-300" />
            </div>

            <div className="flex flex-row w-full h-full justify-center content-center">
              <div className="basis-1/2 justify-items-center content-center hidden md:block">
                <div>
                  <img
                    src={require("src/imgs/hacker_image.svg").default}
                    className=" md:w-48"
                  />
                  <h2 className="text-center mt-3">Hacker</h2>
                </div>
              </div>
              <div className="basis-1/2 ">
                {step === 1 ? (
                  <>
                    <TitleGeneralized alignText={"left"}>
                      {" "}
                      Informació Personal
                    </TitleGeneralized>
                    <form className="flex flex-col gap-3">
                      <label>
                        Nom:
                        <input
                          className={`${errors.name ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-4`}
                          placeholder="Nom"
                          {...register("firstName", {
                            required: "El nom no pot estar buit",
                          })}
                        />
                        {errors.name && (
                          <span className="text-red-400">
                            {errors.name.message}
                          </span>
                        )}
                      </label>

                      <label>
                        Cognoms:
                        <input
                          className={`${errors.name ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-4`}
                          placeholder="Cognoms"
                          {...register("lastName", {
                            required: "Els cognoms no pot estar buit",
                          })}
                        />
                        {errors.name && (
                          <span className="text-red-400">
                            {errors.name.message}
                          </span>
                        )}
                      </label>

                      <label>
                        Contrasenya:
                        <input
                          type="password"
                          className={`${errors.password ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          placeholder="Contrasenya"
                          {...register("password", {
                            required: "La contrasenya no pot estar buida",
                            minLength: {
                              value: 8,
                              message: "Ha de tenir almenys 8 caràcters",
                            },
                            validate: {
                              hasUpperCase: (value) =>
                                /[A-Z]/.test(value) ||
                                "Ha de tenir almenys una majúscula",
                              hasLowerCase: (value) =>
                                /[a-z]/.test(value) ||
                                "Ha de tenir almenys una minúscula",
                            },
                          })}
                        />
                        {errors.password && (
                          <span className="text-red-400">
                            {errors.password.message}
                          </span>
                        )}
                      </label>

                      <label>
                        Confirma la contrasenya:
                        <input
                          type="password"
                          className={`${errors.confirmPassword ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          placeholder="Confirma la contrasenya"
                          {...register("confirmPassword", {
                            required: "Has de confirmar la contrasenya",
                            validate: (value) =>
                              value === password ||
                              "Les contrasenyes no coincideixen",
                          })}
                        />
                        {errors.confirmPassword && (
                          <span className="text-red-400">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </label>

                      <label>
                        Data de naixement:
                        <input
                          type="date"
                          className={`${errors.birthdate ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          {...register("birthdate", {
                            required: "La data de naixement és obligatòria",
                            validate: {
                              isOldEnough: (value) => {
                                const birthDate = new Date(value);
                                const today = new Date();
                                const age =
                                  today.getFullYear() - birthDate.getFullYear();

                                // Si no ha llegado su cumpleaños este año, restamos 1 año a la edad
                                return (
                                  age > 14 ||
                                  (age === 14 &&
                                    today.getMonth() >= birthDate.getMonth()) ||
                                  "Has de ser major de 14 anys"
                                );
                              },
                            },
                          })}
                        />
                        {errors.birthdate && (
                          <span className="text-red-400">
                            {errors.birthdate.message}
                          </span>
                        )}
                      </label>

                      <Button
                        disabled={!isValid}
                        className={`bg-primaryHackeps text-white min-h-10 ${!isValid ? "opacity-50" : ""}`}
                        onClick={() => setStep(2)}
                      >
                        Següent
                      </Button>
                    </form>
                  </>
                ) : null}
                {step === 2 ? (
                  <>
                    <TitleGeneralized alignText={"left"}>
                      Contacte{" "}
                    </TitleGeneralized>
                    <form className="flex flex-col gap-3">
                      <label>
                        Telèfon:
                        <input
                          type="tel"
                          className={`${errors.phone ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          placeholder="Telèfon"
                          {...register("phone", {
                            required: "El telèfon és obligatori",
                            pattern: {
                              value: /^ *(\+ *(\d *){1,2})?(\d *){9}$/,
                              message: "Nombre de telèfon no vàlid",
                            },
                          })}
                        />
                        {errors.phone && (
                          <span className="text-red-400">
                            {errors.phone.message}
                          </span>
                        )}
                      </label>

                      <label>
                        Correu electrònic:
                        <input
                          type="email"
                          className={`${errors.email ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          placeholder="Correu electrònic"
                          {...register("email", {
                            required: "El correu electrònic és obligatori",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                              message: "El correu ha de tenir un format vàlid",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="text-red-400">
                            {errors.email.message}
                          </span>
                        )}
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="w-fit mr-5"
                          {...register("notifications")}
                        />
                        Accepto rebre notificacions electròniques de caràcter
                        informatiu, comercial i promocional.
                      </label>

                      <div className="buttonsBox flex flex-row justify-between gap-2 md:gap-0">
                        <Button
                          className="bg-primaryHackeps text-white min-h-10"
                          onClick={() => setStep(1)}
                        >
                          Anterior
                        </Button>
                        <Button
                          disabled={!isValid}
                          className={`bg-primaryHackeps text-white min-h-10 ${!isValid ? "opacity-50" : ""}`}
                          onClick={() => setStep(3)}
                        >
                          Següent
                        </Button>
                      </div>
                    </form>
                  </>
                ) : null}
                {step === 3 ? (
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={pfpImage || userIcon}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <TitleGeneralized alignText={"left"}>
                      Avatar
                    </TitleGeneralized>
                    <form className="flex flex-col gap-3">
                      <label>
                        Nickname:
                        <input
                          className={`${errors.nickname ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          placeholder="Nickname"
                          {...register("nickname", {
                            required: "El nickname és obligatori",
                          })}
                        />
                        {errors.nickname && (
                          <span className="text-red-400">
                            {errors.nickname.message}
                          </span>
                        )}
                      </label>

                      <label>
                        Image URL:
                        <input
                          className={`${errors.imageUrl ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                          placeholder="Image URL"
                          {...register("imageUrl")}
                          onChange={handleImageUrlChange}
                        />
                        {errors.imageUrl && (
                          <span className="text-red-400">
                            {errors.imageUrl.message}
                          </span>
                        )}
                      </label>
                      <div className="image-input-container">
                        <FileBase
                          id="avatarInput"
                          type="file"
                          multiple={false}
                          onDone={handleImageChange}
                        />
                      </div>
                      {isPfpTooLarge && (
                        <span className="text-red-400">
                          La foto de perfil introduida és massa gran
                        </span>
                      )}

                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="w-fit mr-5"
                          {...register("termsConditions", {
                            required: "Has d'acceptar els termes i condicions",
                          })}
                        />
                        <p>
                          Acceptes els nostres{" "}
                          <a
                            href="/hackeps/terms"
                            className="text-primaryHackeps"
                          >
                            termes i condicions
                          </a>
                          .
                        </p>
                      </label>

                      <div className="buttonsBox flex flex-row justify-between gap-2 md:gap-0">
                        <Button
                          className="bg-primaryHackeps text-white min-h-10"
                          onClick={() => setStep(2)}
                        >
                          Anterior
                        </Button>
                        <Button
                          disabled={
                            !isValid || !watch("termsConditions") || hideSubmit
                          }
                          className={`bg-primaryHackeps text-white min-h-10 ${!isValid || !watch("termsConditions" || hideSubmit) ? "opacity-50" : ""}`}
                          onClick={handleSubmit(onSubmit)}
                        >
                          Enviar
                        </Button>
                      </div>
                      {errorMsg && (
                        <span className="text-red-400">{errorMsg}</span>
                      )}
                    </form>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <>
            {!statusSubmit ? (
              <>
                <FailFeedback
                  title={`Error al registrar el teu compte`}
                  text={`Sembla que alguna cosa ha fallat mentre enregistràvem el teu compte al sistema.`}
                  hasButton={true}
                  buttonLink={`/hacker-form`}
                  buttonText={`Intentar novament`}
                  italic={errCause}
                  onButtonClick={handleButtonClick}
                />
              </>
            ) : (
              <>
                <SuccessFeedback
                  title="T'has registrat correctament"
                  text={`El teu registre s'ha realitzat correctament. \n T'hem enviat un correu electrònic per a que confirmis el registre.`}
                  hasButton={true}
                  buttonLink="/login"
                  buttonText="Inicia sessió"
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
