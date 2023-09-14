// src/components/Forms/HackerForm.js

import Header from "src/components/Header/Header.js";
import Footer from "src/components/Footer/Footer.js";
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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Nom requerit"),
  lastName: Yup.string().required("Cognoms requerits"),
  password: Yup.string()
    .min(8, "La contrasenya requereix d'almenys 8 caràcters")
    .matches(/[0-9]/, "La contrasenya requereix d'almenys un número")
    .matches(
      /[a-z]/,
      "La contrasenya requereix d'almenys una lletra en minúscules",
    )
    .matches(
      /[A-Z]/,
      "La contrasenya requereix d'almenys una lletra en majúscules",
    )
    .matches(/[^\w]/, "La contrasenya requereix almenys d'un símbol")
    .required("Contrasenya requerida"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "La contrasenya ha de coincidir",
  ),
  birthDate: Yup.date().required("Data de naixment requerida"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  phone: Yup.string().required("Telèfon requerit"),
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

  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
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
      image: avatar,
      is_image_url: false,
      github: "",
      linkedin: "",
    };
    const signupResponse = signupHacker(hacker);
    console.log(signupResponse);
    setSubmitting(false);
  };

  const handleImageChange = (event) => {
    setAvatar(event.base64);
  };
  return (
    <div id="hackerForm" className="custom-form">
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit}
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          nickname: "",
        }}
        validationSchema={validationSchema}
        withStepperLine /// false as default and If it is false, it hides stepper line
        nextButton={{
          label: "Següent",
          style: { background: "var(--primary)" },
        }}
        prevButton={{
          label: "Enrere",
          style: { background: "var(--primary)" },
        }}
        submitButton={{
          label: "Envia",
          style: { background: "var(--primary)" },
        }}
      >
        <FormikStepper.Step label="Informació personal">
          <Row>
            <HackerPanel></HackerPanel>
            <Col>
              <h1 className="white-color">Crear compte</h1>
              <InputField name="firstName" type="text" label="Nom" />
              <InputField name="lastName" type="text" label="Cognoms" />
              <InputField name="password" type="password" label="Contrasenya" />
              <InputField
                name="confirmPassword"
                type="password"
                label="Repetir contrasenya"
              />
              <InputField
                name="birthDate"
                type="date"
                label="Data de naixement"
              />
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Contacte">
          <Row>
            <HackerPanel></HackerPanel>
            <Col>
              <h1 className="white-color">Crear compte</h1>
              <InputField name="phone" type="text" label="Telèfon" />
              <InputField name="email" type="email" label="E-mail" />
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
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Avatar">
          <Row>
            <Col>
              {avatar ? (
                <img
                  style={{ height: `150px`, width: `150px` }}
                  className="avatar-image bg-white rounded-circle m-auto"
                  src={avatar}
                ></img>
              ) : (
                <img
                  style={{ height: `150px`, width: `150px` }}
                  className="avatar-image bg-white rounded-circle m-auto"
                  src={userIcon}
                />
              )}
              <FileBase
                id="avatarInput"
                type="file"
                multiple={false}
                onDone={handleImageChange}
              />
            </Col>
            <Col>
              <h1 className="white-color">Crear compte</h1>
              <InputField name="nickname" type="text" label="Nickname" />
            </Col>
          </Row>
        </FormikStepper.Step>
      </FormikStepper>
    </div>
  );
};

const HackerForm = () => {
  return (
    <>
      <Header />
      <HackerStepperForm></HackerStepperForm>
      <Footer />
    </>
  );
};

export default HackerForm;
