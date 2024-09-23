import "src/components/hackeps/Forms/HackerForm.css";
import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import * as Yup from "yup";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import { signupLleidaHacker } from "src/services/LleidaHackerService";
import FileBase from "react-file-base64";
import userIcon from "src/icons/user2.png";
import FailFeedback from "../Feedbacks/FailFeedback";
import SuccessFeedback from "../Feedbacks/SuccesFeedback";
import CheckboxField from "./CheckboxField";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const minAge = "14";
const date = new Date();
date.setFullYear(date.getFullYear() - minAge);

const validationSchema = Yup.object({
  firstName: Yup.string().required("Nom requerit"),
  lastName: Yup.string().required("Cognoms requerits"),
  password: Yup.string()
    .required("Contrasenya requerida")
    .min(8, "La contrasenya requereix d'almenys 8 caràcters")
    .matches(/[0-9]/, "La contrasenya requereix d'almenys un número")
    .matches(
      /[a-z]/,
      "La contrasenya requereix d'almenys una lletra en minúscules",
    )
    .matches(
      /[A-Z]/,
      "La contrasenya requereix d'almenys una lletra en majúscules",
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "La contrasenya ha de coincidir")
    .required("Confirma la contrasenya"),
  birthDate: Yup.date()
    .required("Data de naixment requerida")
    .max(
      date.toISOString().split("T")[0],
      `Has de ser major de ${minAge} anys`,
    ),
  phone: Yup.string()
    .required("Telèfon requerit")
    .matches(/^ *(\+ *(\d *){1,2})?(\d *){9}$/, "Nombre de telèfon no vàlid"),
  email: Yup.string()
    .required("Correu requerit")
    .email("El correu ha de tenir un format vàlid"),
  nickname: Yup.string().required("Nickname requerit"),
  role: Yup.string().required("Rol requerit"),
  recive_notifications: Yup.boolean()
    .oneOf([true], "Has d'acceptar rebre notificacions")
    .required("Confirmació requerida"),
  nif: Yup.string()
    .required("NIF requerit")
    .matches(/^\d{8}[A-Z]$/, "El format del NIF no és vàlid"),
  shirt_size: Yup.string().required("Mida requerida"),
});

const HackerPanel = () => {
  return (
    <Col className="hacker-panel">
      <Row>
        <img src={require("src/imgs/hacker_image.svg").default} alt="Hacker" />
      </Row>
      <Row>
        <h2 className="hacker-panel-title">LleidaHacker</h2>
      </Row>
    </Col>
  );
};

export const LleidaHackerForm = () => {
  const LanguageOptions = [{ value: "cat", label: "cat" }];

  const RoleOptions = [
    { value: "President", label: "President" },
    { value: "Secretari", label: "Secretari" },
    { value: "Tresorer", label: "Tresorer" },
    { value: "Cap de Developers", label: "Cap de Developers" },
    { value: "Cap de Contactes", label: "Cap de Contactes" },
    { value: "Cap de Marketing", label: "Cap de Marketing" },
    { value: "Cap de TechMeetings", label: "Cap de TechMeetings" },
    { value: "Developer", label: "Developer" },
    { value: "Contactes", label: "Contactes" },
    { value: "Marketing", label: "Marketing" },
    { value: "TechMeetings", label: "TechMeetings" },
  ];

  const sizeOptions = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
    { value: "XXXL", label: "XXXL" },
  ];

  const [avatar, setAvatar] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const [isUrl, setIsUrl] = useState(false);
  // Error message for last page of the form
  const [errorMsg, setErrorMsg] = useState("");
  //Feedback component
  const [submiting, setSubmiting] = useState(false); //si es false, encara no s'ha donat al submit, pero si es true, es mostra el feedback
  const [statusSubmit, setStatusSubmit] = useState(false); //si es false, error, si es true tot esta correcte
  const [errCause, setCauseError] = useState(""); //si es false, error, si es true tot esta correcte

  const onSubmit = async (values) => {
    const pfp = isUrl ? urlImage : avatar;
    const LleidaHacker = {
      name: [values.firstName, values.lastName].join(" "),
      nickname: values.nickname,
      password: values.password,
      birthdate: values.birthDate,
      food_restrictions: "",
      email: values.email,
      config: {
        recive_notifications: values.recive_notifications,
        default_lang: values.default_lang,
        comercial_notifications: true,
        terms_and_conditions: true,
      },
      telephone: values.phone.replace(/\s+/g, ""),
      address: "",
      shirt_size: values.shirt_size,
      image: pfp,
      github: "",
      linkedin: "",
      role: values.role,
      nif: values.nif,
      student: values.student,
      active: true,
    };

    const res = await signupLleidaHacker(LleidaHacker);
    console.log(res);
    if (res.errCode) {
      setStatusSubmit(false);
      console.log(res.errMssg);
      let causeError = "Error al tramitar dades";
      if (res.errMssg === "Email already exists") {
        causeError = "El correu que has introduit es troba registrat.";
      } else if (res.errMssg === "Nickname already exists") {
        causeError = "El nickname que has introduit es troba registrat.";
      } else if (res.errMssg === "Telephone already exists") {
        causeError = "El telefon que has introduit es troba registrat.";
      }
      setCauseError(causeError);
      setErrorMsg(causeError);
      return;
    } else if (res.detail) {
      setStatusSubmit(false);
      setCauseError(res.detail[0].msg);
      setErrorMsg(res.detail[0].msg);
    } else if (res.success) {
      setStatusSubmit(true);
      setSubmiting(true);
    }
  };

  const handleImageChange = (event) => {
    setAvatar(event.base64);
    setIsUrl(false);
  };
  const handleImageUrlChange = (event) => {
    setUrlImage(event.target.value);
    setIsUrl(true);
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div id="hackerForm" className="custom-form bg-secondaryHackeps">
        {!submiting ? (
          <FormikStepper
            /// Accept all Formik props
            onSubmit={onSubmit}
            isSubmiting={true}
            initialValues={{
              firstName: "",
              nif: "",
              lastName: "",
              password: "",
              confirmPassword: "",
              birthDate: "",
              phone: "",
              email: "",
              nickname: "",
              role: "",
              shirt_size: "",
              default_lang: "cat",
              recive_notifications: false,
              student: false,
            }}
            validationSchema={validationSchema}
            withStepperLine /// false as default and If it is false, it hides stepper line
            nextButton={{
              label: "Següent",
              style: {
                background: "var(--primary)",
                color: "var(--secondary)",
              },
            }}
            prevButton={{
              label: "Enrere",
              style: {
                background: "var(--primary)",
                color: "var(--secondary)",
              },
            }}
            submitButton={{
              label: "Envia",
              style: {
                background: "var(--primary)",
                color: "var(--secondary)",
              },
            }}
          >
            <FormikStepper.Step label="Informació personal">
              <Row className="align-content-center d-flex">
                <HackerPanel />
                <div className="col-12 col-xxl-6 ">
                  <TitleGeneralized
                    bold={false}
                    marginBot="0.5rem"
                    alignText="left"
                  >
                    Informació Personal
                  </TitleGeneralized>
                  <InputField
                    className="w-100"
                    name="firstName"
                    type="text"
                    label="Nom"
                  />
                  <InputField
                    className="w-100"
                    name="lastName"
                    type="text"
                    label="Cognoms"
                  />
                  <InputField
                    className="w-100"
                    name="nif"
                    type="text"
                    label="NIF"
                  />
                  <SelectField
                    name="role"
                    label="Rol que exerceixes:"
                    options={RoleOptions}
                    placeholder="El meu rol és..."
                  />
                  <SelectField
                    name="shirt_size"
                    label="Talla de samarreta:"
                    options={sizeOptions}
                    placeholder="La meva talla de samarreta és..."
                  />
                  <InputField
                    className="w-100"
                    name="password"
                    type="password"
                    label="Contrasenya"
                  />
                  <InputField
                    className="w-100"
                    name="confirmPassword"
                    type="password"
                    label="Repetir contrasenya"
                  />
                  <InputField
                    className="w-100"
                    name="birthDate"
                    type="date"
                    label="Data de naixement"
                  />
                  <CheckboxField
                    className="w-100 text-center"
                    name="student"
                    label="Soc estudiant"
                    defaultValue={false}
                  />
                </div>
              </Row>
            </FormikStepper.Step>
            <FormikStepper.Step label="Contacte">
              <Row>
                <HackerPanel />
                <div className="col-12 col-xxl-6 ">
                  <TitleGeneralized
                    bold={false}
                    marginBot="0.5rem"
                    alignText="left"
                  >
                    Contacte
                  </TitleGeneralized>
                  <InputField
                    className="w-100"
                    name="phone"
                    type="tel"
                    label="Telèfon"
                  />
                  <InputField
                    className="w-100"
                    name="email"
                    type="email"
                    id="email"
                    label="E-mail"
                  />
                  <CheckboxField
                    className="w-100 text-center"
                    name="recive_notifications"
                    label="Accepto rebre notificacions electròniques de caràcter informatiu, comercial i promocional"
                    defaultValue={false}
                  />
                </div>
              </Row>
            </FormikStepper.Step>
            <FormikStepper.Step label="Avatar">
              <Row className="">
                <div className="col-12 col-xxl-6 d-flex flex-column">
                  {isUrl && urlImage !== "" ? (
                    <img
                      style={{ height: "250px", width: "250px" }}
                      className="avatar-image bg-white rounded-circle m-auto"
                      src={urlImage}
                      alt="avatar"
                    />
                  ) : avatar ? (
                    <img
                      style={{ height: "250px", width: "250px" }}
                      className="avatar-image bg-white rounded-circle m-auto"
                      src={avatar}
                      alt="avatar"
                    />
                  ) : (
                    <img
                      style={{ height: "250px", width: "250px" }}
                      className="avatar-image bg-white rounded-circle m-auto"
                      src={userIcon}
                      alt="avatar"
                    />
                  )}
                </div>
                <div className="col-12 col-xxl-6 d-flex flex-column justify-content-center">
                  <TitleGeneralized
                    bold={false}
                    marginBot="0.5rem"
                    alignText="left"
                  >
                    Avatar
                  </TitleGeneralized>
                  <InputField
                    className="w-100"
                    name="nickname"
                    type="text"
                    label="Nickname"
                  />
                  <div className=" mb-3 mb-xxl-0 align-self-center">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                      className="mb-1"
                      type="text"
                      id="imageUrl"
                      placeholder="https://..."
                      onChange={handleImageUrlChange}
                    />
                    <div className="image-input-container">
                      <FileBase
                        id="avatarInput"
                        type="file"
                        multiple={false}
                        onDone={handleImageChange}
                      />
                    </div>
                  </div>
                  <SelectField
                    name="default_lang"
                    label="Idioma preferent:"
                    options={LanguageOptions}
                    placeholder="El meu idioma preferent és..."
                  />
                </div>
              </Row>
              <Row>
                <span
                  className="text-danger text-center mt-5"
                  style={{ whiteSpace: "pre" }}
                >
                  {errorMsg}
                </span>
              </Row>
            </FormikStepper.Step>
          </FormikStepper>
        ) : (
          <>
            {!statusSubmit ? (
              <>
                <FailFeedback
                  title={`Error al registrar el teu compte`}
                  text={`Sembla que alguna cosa ha fallat mentre enregistràvem el teu compte al sistema.`}
                  hasButton={true}
                  buttonLink={`/lleidahacker-form`}
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
