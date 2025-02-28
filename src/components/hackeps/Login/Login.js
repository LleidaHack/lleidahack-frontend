import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import Button from "src/components/buttons/Button";
import { Link } from "react-router-dom";
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
      if (process.env.REACT_APP_DEBUG === "true") console.log(a);
      if (a.errCode === 400) {
        navigate("/user-verification", { state: { email: values.email } });
      } else if (localStorage.getItem("userToken") !== "undefined") {
        if (process.env.REACT_APP_DEBUG === "true")
          console.log("Login successful");
        if (nextScreen) {
          navigate(nextScreen);
        } else navigate("/home");
      } else if (a.errCode === 401) {
        setFieldError("password", "Contrasenya incorrecta");
      } else if (a.errCode === 404) {
        setFieldError("email", "E-mail no trobat");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-loginPage">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="rounded-xl flex flex-col items-center">
                <img
                  src={logo}
                  className="w-1/3 h-auto block mx-auto mb-3"
                  alt="Logo"
                />
                <h2 className="text-white mb-4 text-5xl flex items-center text-center">
                  Hola de nou!
                </h2>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  submitButton={{ label: "Envia" }}
                >
                  {({ isSubmitting, submitForm, errors, touched }) => (
                    <Form>
                      <div className="font-bold text-base mt-7">
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
                          <div className="text-red-500">{errors.email}</div>
                        )}
                      </div>
                      <div className="font-bold text-base mt-7">
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
                          <div className="text-red-500">{errors.password}</div>
                        )}
                      </div>

                      <div className="mt-7 mb-7 text-xl text-center">
                        <p className="mb-1">
                          <Link
                            to="/forgot-password"
                            className="text-grayColor"
                          >
                            Has oblidat les teves credencials?
                          </Link>
                        </p>
                        <p className="mb-0">
                          <Link to="/hacker-form" className="text-grayColor">
                            Encara no tens compte?
                          </Link>
                        </p>
                      </div>
                      <div className="flex justify-center mt-3">
                        <Button type="submit" primary lg>
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
