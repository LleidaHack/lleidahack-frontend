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
      password: "string",
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
    signupHacker(hacker);
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
              <InputField name="lastName1" type="text" label="Cognom 1" />
              <InputField name="lastName2" type="text" label="Cognom 2" />
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
                    { value: "S", label: "S" },
                    { value: "M", label: "M" },
                    { value: "L", label: "L" },
                    { value: "XL", label: "XL" },
                  ]}
                />
              </div>
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Avatar">
          <h1 className="white-color">Crear compte</h1>
          <InputField name="avatarImage" type="text" label="Avatar" />
          <InputField name="nickname" type="text" label="Nickname" />
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
