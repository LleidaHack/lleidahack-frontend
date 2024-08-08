import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import Button from "src/components/buttons/Button";
import { Link } from "react-router-dom";
import "src/components/hackeps/Login/Login.css";
import logo from "src/icons/hackLogoWellDone.png";
import { login } from "src/services/AuthenticationService";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Correu requerit"),
  password: Yup.string().required("Contrasenya requerida"),
});

const LoginPage = ({ nextScreen }) => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      let a = await login(values);
      if (a.message === "User not verified") {
        navigate("/user-verification", { state: { email: values.email } });
      } else if (localStorage.getItem("userToken") !== "undefined") {
        if (process.env.REACT_APP_DEBUG === "true")
          console.log("Login successful");
        if (nextScreen) {
          navigate(nextScreen);
        } else navigate("/home");
      } else if (a.message === "Incorrect password") {
        setFieldError("password", "Contrasenya incorrecta");
      } else if (a.message === "User not found") {
        setFieldError("email", "E-mail no trobat");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="content bg-loginPage">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="login-container ">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 className="text-white mb-4 h2-title ">Hola de nou!</h2>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  submitButton={{ label: "Envia" }}
                >
                  {({ isSubmitting, submitForm, errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <label className="text-white" htmlFor="email">
                          Correu
                        </label>
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
                        <label className="text-white" htmlFor="password">
                          Contrasenya
                        </label>
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
                          <Link
                            to="/forgot-password"
                            className="custom-link text-grayColor"
                          >
                            Has oblidat les teves credencials?
                          </Link>
                        </p>
                        <p className="mb-0">
                          <Link
                            to="/hacker-form"
                            className="custom-link text-grayColor"
                          >
                            Encara no tens compte?
                          </Link>
                        </p>
                      </div>
                      <div className="button-container">
                        <Button
                          type="submit"
                          secondary
                          outline
                          lg
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
