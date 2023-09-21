import React, { useState } from "react";
import "src/components/popup/popup.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from "src/services/AuthenticationService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  //nick: Yup.string().required("Nom / Nickname requerit"),
  email: Yup.string().required("Introdueix el teu nom d'usuari / correu"),
  password: Yup.string().required("Et falta la contraseña"),
});

const PopupInicioSesion = ({ mostrar, cerrarPopup }) => {
  //const navigate = useNavigate();

  const redirectToRoute = (route) => {
    //navigate(route);
  };
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

        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          submitButton={{ label: "Envia" }}
        >
          {({ isSubmitting, submitForm, errors, touched }) => (
            <Form>
              <div className="piterrs">
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
                {touched.email && errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Contrasenya</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña.."
                  id="password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                {touched.password && errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="button-container">
                <Button
                  className="btn btn-default"
                  onClick={() => redirectToRoute("/hacker-form")}
                >
                  Registra't
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-default"
                  onClick={submitForm}
                >
                  {isSubmitting ? "Iniciant sessió..." : "Inicia sessió"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PopupInicioSesion;
