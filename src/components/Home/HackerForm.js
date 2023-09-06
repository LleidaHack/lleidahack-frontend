// src/components/HackerForm.js

import "src/components/Home/HackerForm.css";
import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Yup from "yup";
import { FormikStepper, InputField, SelectField } from "formik-stepper";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Nom requerit"),
  lastName1: Yup.string().required("Cognom 1 requerit"),
  lastName2: Yup.string().required("Cognom 2 requerit"),
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
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <img
          src={require("src/imgs/hacker_image.svg").default}
          alt="Hacker"
        />
      </Row>
      <Row>
        <div
          style={{
            textAlign: "center",
            padding: "20px 0 10px 0",
            color: "#F5F5F5",
            fontSize: "30px",
            fontWeight: "regular",
          }}
        >
          Hacker
        </div>
      </Row>
    </Col>
  );
};

export const HackerStepperForm = () => {
  return (
    <div style={{ background: "#202225" }}>
      <FormikStepper
        /// Accept all Formik props
        onSubmit={() => {
          console.log("submit!");
        }} /// onSubmit Function
        initialValues={{
          firstName: "",
          lastName1: "",
          lastName2: "",
          phone: "",
          email: "",
          nickname: "",
        }}
        validationSchema={validationSchema}
        withStepperLine /// false as default and If it is false, it hides stepper line
        nextButton={{ label: "Següent", style: { background: "#A40925" } }}
        prevButton={{ label: "Enrere", style: { background: "#A40925" } }}
        submitButton={{ label: "Envia", style: { background: "#A40925" } }}
      >
        <FormikStepper.Step label="Informació personal">
          <Row>
            <HackerPanel></HackerPanel>
            <Col>
              <h1>Crear compte</h1>
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
              <h1>Crear compte</h1>
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
          <h1>Crear compte</h1>
          <InputField name="avatarImage" type="text" label="Avatar" />
          <InputField name="nickname" type="text" label="Nickname" />
        </FormikStepper.Step>
      </FormikStepper>
    </div>
  );
};

const HackerForm = () => {
  return <HackerStepperForm></HackerStepperForm>;
};

export default HackerForm;
