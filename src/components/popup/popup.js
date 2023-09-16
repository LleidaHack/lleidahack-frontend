import React, { useEffect, useState } from "react";
import "src/components/popup/popup.css";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "src/services/AuthenticationService";

const validationSchema = Yup.object().shape({
  //nick: Yup.string().required("Nom / Nickname requerit"),
  email: Yup.string().required("Introdueix el teu nom d'usuari / correu"),
  password: Yup.string().required("Et falta la contraseña"),
});

const PopupInicioSesion = ({ mostrar, cerrarPopup }) => {
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const pepers = await login(values);
      if (localStorage.getItem("userToken") !== "undefined") {
        cerrarPopup();
      } else {
        setLoginError("Usuari o contraseña incorrectes");
      }
    } catch (error) {
      setLoginError("Error de conexió.. Intenta-ho de nou més tard");
    }
  };

  return (
    <div className="popup" style={{ display: mostrar ? "block" : "none" }}>
      <div className="popup-content">
        <span className="close" onClick={cerrarPopup}>
          &times;
        </span>
        <h2 className="title1">Identifica't</h2>

        {/* Contenido del popup */}
        <FormikStepper
          /// Accept all Formik props
          onSubmit={(values, actions) => {
            console.log(values);
            handleSubmit(values);
          }} /// onSubmit Function
          initialValues={{
            email: "",
            password: "",
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
            style: {
              background: "var(--primary)",
              marginRight: "2rem",
              marginBottom: "1rem",
            },
          }}
        >
          <FormikStepper.Step label="Informació personal">
            <div>
              <div className="piterrs">
                {/*<label htmlFor="Reposit" className="blackt">Nom / Nickname</label>

          <Field 
            name="nick" 
            type="text" 
            id="namenick" 
            placeholder="Nom / NickName"
            className="BoxForm"
          />
          <ErrorMessage name="nick" component="div" className="error-message" />
        */}
                <br></br>
                <br></br>

                <label htmlFor="email" className="blackt">
                  Usuari
                </label>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Usuari / Correu"
                  className="BoxForm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
                <br></br>
                <br></br>
                <label htmlFor="password" className="blackt">
                  Contraseña
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Contraseña.."
                  className="BoxForm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />

                <br></br>
                <br></br>

                {loginError && <div style={{ color: "red" }}>{loginError}</div>}
              </div>
            </div>
          </FormikStepper.Step>
        </FormikStepper>
      </div>
    </div>
  );
};

export default PopupInicioSesion;
