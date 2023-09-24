
import React, {useState } from "react";
import "src/components/ForgetPassword/forgetPassword.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "src/icons/hackLogoWellDone.png";
import { resetPassword } from "src/services/AuthenticationService";



const validationSchema = Yup.object().shape({
    email: Yup.string().required("Correu requerit"),
});


const ForgetPassword = ({nextScreen}) => {
    const [status, setStatus] = useState("none");

    const handleSubmit = async (values) => {
        console.log("El email es:", values.email)
        const sendingQuest = await resetPassword(values.email)
        
        if(sendingQuest.message == "User not found"){
            setStatus("notfound")
        }else if(sendingQuest.message == "User not verified"){
            setStatus("notverified")
        }else if(sendingQuest.message == "Succes"){
            setStatus("succes")
        }
      //Hay que  hacerlo de manera que las respuestas correctas o incorrectas generen una 2a pantalla de confirmacion, igual que con los dailyhacks
    };
  
    return (
      <div className="login-page">
        <div className="content">
          <Container>
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="login-container">
                  <img src={logo} className="App-logo" alt="logo" />
                  <br></br>
                  <h2 className="mb-4 h2-title">Necesites ajuda per a iniciar sesió?</h2>
                  <Formik
                    initialValues={{ email: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    submitButton={{ label: "Envia" }}
                  >
                    {({ isSubmitting, submitForm, errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <label htmlFor="email">Introdueix el teu correu electrónic</label>
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Correu electrónic"
                            className={`form-control ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                          />
                          {touched.email && errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
                        </div>
                   
  
                        <div className="redirects">
                          <p>Rebrás un correu electrónic per amb les instruccions per a poder recuperar el teu compte</p>
                        </div>
                        <div className="button-container">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-default"
                            onClick={submitForm}
                          >
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
    );
  };
  
  export default ForgetPassword;
  


