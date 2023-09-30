import "src/components/Forms/HackerForm.css";
import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

import * as Yup from "yup";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import { signupHacker } from "src/services/HackerService";
import FileBase from "react-file-base64";
import userIcon from "src/icons/user2.png";
import { useNavigate } from "react-router-dom";
import { min } from "moment";

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
  email: Yup.string()
    .required("Correu requerit")
    .email("El correu ha de tenir un format vàlid"),
  phone: Yup.string().required("Telèfon requerit").nonNullable(),
  shirtSize: Yup.string().required("Talla de camiseta requerida"),
  nickname: Yup.string().required("Nickname requerit"),
});

const HackerPanel = () => {
  return (
    <Col className="hacker-panel">
      <Row>
        <img src={require("src/imgs/hacker_image.svg").default} alt="Hacker" />
      </Row>
      <Row>
        <h2 className="hacker-panel-title">Hacker</h2>
      </Row>
    </Col>
  );
};

export const HackerStepperForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const [isUrl, setIsUrl] = useState(false);
  // Error message for last page of the form
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting }) => {
    const pfp = isUrl ? urlImage : avatar;
    const hacker = {
      name: [values.firstName, values.lastName].join(" "),
      nickname: values.nickname,
      password: values.password,
      birthdate: values.birthDate,
      food_restrictions: "",
      email: values.email,
      telephone: values.phone,
      address: "",
      shirt_size: values.shirtSize,
      image: pfp,
      is_image_url: isUrl,
      github: "",
      linkedin: "",
    };

    const res = await signupHacker(hacker);
    console.log(res);
    if (res.message) {
      setErrorMsg(res.message);
      return;
    }

    if (!res.success) {
      setErrorMsg("Error al enviar el formulari, revisa les dades");
      return;
    }

    setSubmitting(false);
    navigate("/login");
  };

  const handleImageChange = (event) => {
    setAvatar(event.base64);
    setIsUrl(false);
  };
  const handleImageUrlChange = (event) => {
    setUrlImage(event.target.value);
    setIsUrl(true);
  };

  return (
    <>
      <div id="hackerForm" className="custom-form">
        <FormikStepper
          /// Accept all Formik props
          onSubmit={onSubmit}
          isSubmiting={true}
          initialValues={{
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            birthDate: "",
            phone: "",
            email: "",
            shirtSize: "",
            nickname: "",
          }}
          validationSchema={validationSchema}
          withStepperLine /// false as default and If it is false, it hides stepper line
          nextButton={{
            label: "Següent",
            style: { background: "var(--primary)", color: "black" },
          }}
          prevButton={{
            label: "Enrere",
            style: { background: "var(--primary)", color: "black" },
          }}
          submitButton={{
            label: "Envia",
            style: { background: "var(--primary)", color: "black" },
          }}
        >
          <FormikStepper.Step label="Informació personal">
            <Row className="align-content-center d-flex">
              <HackerPanel />
              <div className="col-12 col-xxl-6 ">
                <h1 className="white-color">Informació Personal</h1>
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
              </div>
            </Row>
          </FormikStepper.Step>
          <FormikStepper.Step label="Contacte">
            <Row>
              <HackerPanel />
              <div className="col-12 col-xxl-6 ">
                <h1 className="white-color">Contacte</h1>
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
                  label="E-mail"
                />

                <div>
                  <SelectField
                    name="shirtSize"
                    label="Talla de samarreta"
                    options={[
                      { value: "XS", label: "XS" },
                      { value: "S", label: "S" },
                      { value: "M", label: "M" },
                      { value: "L", label: "L" },
                      { value: "XL", label: "XL" },
                      { value: "XXL", label: "XXL" },
                      { value: "XXXL", label: "XXXL" },
                    ]}
                  />
                </div>
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
                <h1 className="white-color">Avatar</h1>
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
                  <FileBase
                    id="avatarInput"
                    type="file"
                    multiple={false}
                    onDone={handleImageChange}
                  />
                </div>
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
      </div>
    </>
  );
};
