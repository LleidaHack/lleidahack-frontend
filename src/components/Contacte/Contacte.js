import React, { useEffect, useState } from "react";
import "src/components/Contacte/Contacte.css";
import logo from "src/icons/imagotip_lleidahack_blanc.png";
import instagramLogo from "src/icons/instagram.png";
import linkedinLogo from "src/icons/linkedin.png";
import twitterLogo from "src/icons/X.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { contacte } from "src/services/AuthenticationService";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nom requerit"),
  email: Yup.string()
    .email("El correu ha de ser una adreça de correu vàlida.")
    .required("El camp de correu és obligatori."),
  subject: Yup.string().required("El títol del missatge és requerit."),
  message: Yup.string().required("El missatge és requerit."),
});

const ContactePage = () => {
  const [mailSended, setMailSended] = useState(false);
  const [mailStatus, setMailStatus] = useState(null);

  const handleSubmit = async (values) => {
    const onMail = await contacte(
      values.name,
      values.subject,
      values.email,
      values.message,
    );
    //TODO: IMPORTANT CONFIGURAR AIXO CORRECTAMENT QUAN EL SERVEI FUNCIONI.

    if (onMail.succes) {
      setMailStatus(true); //primer fiquem que el estat es correcte
      setMailSended(true); //Despres indiquem que ja es pot carregar la pagina de status
    } else {
      setMailStatus(false); //primer fiquem que el estat es incorrecte
      setMailSended(true); //Despres indiquem que ja es pot carregar la pagina de status
    }
  };

  const retry = () => {
    setMailSended(false);
  };

  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-all">
      {!mailSended ? (
        <>
          <h1 className="title-contacte">Contacte</h1>
          <div className="contact-container">
            <div className="logo-container">
              <h2 className="title-logo">
                Esdeveniment organitzat per LleidaHack
              </h2>
              <img src={logo} alt="Logo" className="logo" />
              <div className="social-logos">
                <a
                  href="https://www.twitter.com/lleidahack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterLogo}
                    alt="Twitter"
                    className="social-logo"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/lleidahack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="social-logo"
                  />
                </a>
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
              </div>
            </div>
            <div className="form-container-contacte">
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
                <Form className="form-contacte">
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
        </>
      ) : (
        <>
          {!mailStatus ? (
            <>
              <div className="valerr">
                <div className="iconBox">
                  <div>
                    <svg
                      className="crossmarker"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      <circle
                        className="cross__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="checkmark_check"
                        fill="none"
                        d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"
                      />
                    </svg>
                  </div>
                  <h2>Error enviant el teu missatge.</h2>
                  <p>
                    Sembla que algo ha fallat mentre registravem el teu
                    missatge.
                  </p>
                  <p>
                    <i>
                      Torna a intentar-ho novament. En cas que segueixi fallant,
                      contacta amb nosaltres utilitzant <br></br> les nostres
                      xarxes socials que trobarás a la part inferior de la
                      pantalla.
                    </i>
                  </p>
                </div>

                <div className="infbuttonok">
                  <button onClick={retry} className="contacta">
                    Intentar novament
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="valerr">
                <div className="iconBox">
                  <div>
                    <svg
                      className="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      {" "}
                      <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />{" "}
                      <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      />
                    </svg>
                  </div>
                  <h2>Missatge enviat correctament.</h2>
                  <p>
                    Gracies per contactar amb LleidaHack. <br></br>
                    El teu missatge s'ha enviat correctament.<br></br>En cas que
                    necesitesim ficar-nos en contacte amb tu, ho fariem amb el
                    correu que ens has proporcionat.
                  </p>
                  <p></p>
                </div>

                <div className="infbuttonok">
                  <Link to="/#home">
                    <button onClick={retry} className="contacta">
                      Tornar al inici
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContactePage;
