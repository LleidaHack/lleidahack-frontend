import React from "react";
import "./Contacte.css";
import logo from "../../icons/imagotip_lleidahack_blanc.png";
import instagramLogo from "../../icons/instagram.png";
import linkedinLogo from "../../icons/linkedin.png";
import twitterLogo from "../../icons/twitter.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nom requerit"),
  email: Yup.string()
    .email("El correu ha de ser una adreça de correu vàlida.")
    .required("El camp de correu és obligatori."),
  subject: Yup.string().required("El títol del missatge és requerit."),
  message: Yup.string().required("El missatge és requerit."),
});

const ContactePage = () => {
  const handleSubmit = (values) => {
    // Aquí puedes manejar la lógica de envío del formulario.
    console.log(values);
  };

  return (
    <div className="container-all">
      <h1 className="title-contacte">Contacte</h1>
      <div className="contact-container">
        <div className="logo-container">
          <h2 className="title-logo">Esdeveniment organitzat per LleidaHack</h2>
          <img src={logo} alt="Logo" className="logo" />
          <div className="social-logos">
            <a
              href="https://www.instagram.com/lleidahack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="social-logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/lleidahack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
            </a>
            <a
              href="https://www.twitter.com/lleidahack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="Twitter" className="social-logo" />
            </a>
          </div>
        </div>
        <div className="form-container">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="formik-field">
                <label htmlFor="name">Nom:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="formik-field">
                <label htmlFor="email">Correu:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="formik-field">
                <label htmlFor="subject">Títol del missatge:</label>
                <Field type="text" id="subject" name="subject" />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="formik-field">
                <label htmlFor="message">Missatge:</label>
                <Field as="textarea" id="message" name="message" rows="4" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="button-submit-container">
                <button className="button-submit" type="submit">
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactePage;
