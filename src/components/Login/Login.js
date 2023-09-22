import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "src/components/Login/Login.css";
import logo from "src/icons/hackLogoWellDone.png";
import { login } from "src/services/AuthenticationService";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Usuari o correu requerit"),
  password: Yup.string().required("Contrasenya requerida"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await login(values);
      if (localStorage.getItem("userToken") !== "undefined") {
        if (process.env.REACT_APP_DEBUG === "true")
          console.log("Login successful");
        if (localStorage.getItem("nextScreen")) {
          const move = localStorage.getItem("nextScreen");
          localStorage.removeItem("nextScreen");
          navigate(move);
          console.log("redir successful")
        } else navigate("/home");
      } else {
        if (process.env.REACT_APP_DEBUG === "true")
          console.error("Login unsuccessful");
        setFieldError("password", "Correu o contrasenya incorrectes");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="content">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="login-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 className="mb-4 h2-title">Hola de nou!</h2>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  submitButton={{ label: "Envia" }}
                >
                  {({ isSubmitting, submitForm, errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="email">Usuari o correu</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
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
                          id="password"
                          className={`form-control ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {touched.password && errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      <div className="redirects">
                        <p className="mb-1">
                          <Link to="/forgot-password" className="custom-link">
                            Has oblidat les teves credencials?
                          </Link>
                        </p>
                        <p className="mb-0">
                          <Link to="/hacker-form" className="custom-link">
                            Encara no tens compte?
                          </Link>
                        </p>
                      </div>
                      <div className="button-container">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-default"
                          onClick={submitForm}
                        >
                          {isSubmitting
                            ? "Iniciant sessió..."
                            : "Inicia sessió"}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
