import React, { useState } from "react";
import "src/components/hackeps/ForgetPassword/forgetPassword.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "src/icons/hackLogoWellDone.png";
import { resetPassword } from "src/services/AuthenticationService";
import Button from "src/components/buttons/Button";
import SuccessFeedback from "../Feedbacks/SuccesFeedback";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Correu requerit"),
});

const ForgetPassword = ({ nextScreen }) => {
  const [status, setStatus] = useState(false);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    // console.log("El email es:", values.email);
    const sendingQuest = await resetPassword(values.email);
    console.log(sendingQuest);
    if (sendingQuest.errCode) {
      if (sendingQuest.errCode === 404) {
        setFieldError(
          "email",
          "No s'ha trobat un compte asociat a aquest correu. Comprova que estigui tot correcte.",
        );
      } else if (sendingQuest.errCode === 400) {
        setFieldError(
          "email",
          "Sembla ser que encara no estas verificat. Comproba la teva bustia de spam.",
        );
      }
    } else if (sendingQuest.success) {
      setStatus(true);
    } else {
      setFieldError(
        "email",
        "Ha ocorregut un error, torna a intentar-ho més tard. Si l'error persisteix, contacta amb nosaltres",
      );
    }

    //Hay que  hacerlo de manera que las respuestas correctas o incorrectas generen una 2a pantalla de confirmacion, igual que con los dailyhacks
  };

  return (
    <>
      {!status ? (
        <div className="login-page bg-loginPage">
          <div className="content">
            <Container>
              <Row className="justify-content-center">
                <Col md={6}>
                  <div className="login-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <br></br>
                    <h2 className="mb-4 h2-title text-white">
                      Necesites ajuda per a iniciar sessió?
                    </h2>
                    <Formik
                      initialValues={{ email: "" }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                      submitButton={{ label: "Envia" }}
                    >
                      {({ isSubmitting, submitForm, errors, touched }) => (
                        <Form>
                          <div className="form-group">
                            <label
                              className="text-textPrimaryHackeps"
                              htmlFor="email"
                            >
                              Introdueix el teu correu electrònic
                            </label>
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Correu electrònic"
                              className={`form-control ${
                                touched.email && errors.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            {touched.email && errors.email ? (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>

                          <div className="redirects text-white">
                            <p>
                              Rebràs un correu electrònic per amb les
                              instruccions per a poder recuperar el teu compte
                            </p>
                          </div>
                          <div className="button-container">
                            <Button type="submit" primary md>
                              {isSubmitting
                                ? "Enviant enllaç..."
                                : "Envia enllaç d'accés"}
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
      ) : (
        <div className="bg-secondaryHackeps">
          <div className="content">
            <section className="informative text-white">
              <div className="Part2">
                <SuccessFeedback
                  title="Enllaç enviat correctament."
                  text={`En breus rebràs un correu electrònic amb un enllaç per a recuperar el teu compte.`}
                  italics="Si no ho reps, comproba la bustia de spam."
                  hasButton={true}
                  buttonLink="/"
                  buttonText="Tornar a l'Inici"
                />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
