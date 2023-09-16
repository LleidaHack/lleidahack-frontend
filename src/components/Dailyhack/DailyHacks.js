import React, { useEffect, useState } from "react";
import "src/components/Dailyhack/DailyHacks.css";

import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import { Formik, Form, Field, ErrorMessage } from "formik";
import pergamino from "src/icons/pergamino.png";

import { getHackeps } from "src/services/EventService.js";
import { me } from "src/services/AuthenticationService";
import { getDailyhackById } from "src/services/EventManagementService";
import { addDailyhack } from "src/services/EventManagementService";

const validationSchema = Yup.object().shape({
  //nick: Yup.string().required("Nom / Nickname requerit"),
  repositori: Yup.string().required(
    "Et falta l'enllaç del teu repositori de Github",
  ),
});

const HackerPanel = () => {
  return (
    <Col className="hacker-panel platiss">
      <Row>
        <svg
          className="peperonis"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={300}
          stroke="#000"
          viewBox="0 -7 64 64"
        >
          <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth={2}>
            <path d="M57 28c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h46c1.1 0 2 .9 2 2v25ZM58 32c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2L1 47c0 1.1.9 2 2 2h58c1.1 0 2-.9 2-2l-5-15ZM3 43.9h59" />
            <path d="M53.1 25c0 1.1-.9 2-2 2H13c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2l.1 18ZM23 40h18M18.2 40H21M13.1 40H16M8 40h3M10.2 36H13M15 36h3M20 36h3M25 36h3M30 36h3M35 36h3M40 36h3M46 36h3M51 36h3M48 33h3M43 33h3M38 33h3M33 33h3M28 33h3M23 33h3M18.1 33H21M13 33h3M43 40h2.8M48 40h2.9M53 40h3M27.5 10.2l-9.2 9.2M21.4 10.2l-5.7 4.6" />
          </g>
        </svg>
      </Row>
    </Col>
  );
};

export const HackerStepperForm = (props) => {
  const { onBotonClic } = props;
  const [Actualhack, setHack] = useState(null);
  const [identity, setIdentity] = useState(null);
  /*const [isDaily, setDailyReady] = useState(null); //comprobacio de estat*/




  useEffect(() => {
    const getData = async () => {
      const hackepse = await getHackeps();
      const istMeMario = await me();
      const getInfo = await getDailyhackById(hackepse.id, istMeMario.id);
      setHack(hackepse)
      setIdentity(istMeMario)
      let hasDailyhack = false
      if(getInfo.startsWith("https://github")){
        hasDailyhack = true
      }
      setDailyReady(hasDailyhack)
    };

    getData();
  }, []);

  return (
    <div id="hackerForm" className="custom-form-Dailyhack">
      <FormikStepper
        /// Accept all Formik props
        onSubmit={(values, actions) => {
          //Hacer que al pulsar el submit, se ejecute el servicio de envio y se muestre un loading de minimo 2 segundos.
          //Cuando finalize la respuesta, si es afirmativa, se editará la componente mostrando en la pagina un texto de Enviado con exito junto a un boton de Volver a Inicio.
          //Si la respuesta es Negativa, le saldrá un texto de "Algo ha salido mál, vuelve a Introducir la Informacion. Si el problema perciste contacta con nosotros des del apartado de Contacto. y un boton de Volver a la Página."
          console.log("submit!");

          const sendDailyHack = async () => {
            const res = await addDailyhack(
              Actualhack.id,
              identity.id,
              values.repositori,
            );
            if (Object.keys(res).length > 3) {
              onBotonClic(true, actions); //Se enviará true o false ya para indicar si algo salió mal o no cambiando el true o false
            } else {
              onBotonClic(false, actions); //Se enviará true o false ya para indicar si algo salió mal o no cambiando el true o false
            }
          };

          sendDailyHack();
        }} /// onSubmit Function
        initialValues={{
          nick: "",
          repositori: "",
          Comment: "",
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
          <div className="eulen">
            <div className="panel">
              <HackerPanel></HackerPanel>
            </div>
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

              <label htmlFor="Reposit" className="blackt">
                Repositori GitHub
              </label>
              <Field
                name="repositori"
                type="text"
                id="Reposit"
                placeholder="Repositori del dailyhack.."
                className="BoxForm"
              />
              <ErrorMessage
                name="repositori"
                component="div"
                className="error-message"
              />
              <p>
                Recorda que has d'afegir informació al ReadMe del repositori
              </p>

              <br></br>
              <br></br>
              {/*
                <label htmlFor="textareaField" className="blackt">Explicació + Exemples</label>
                <Field
                    as="textarea" // Usa "textarea" para el campo de texto
                    id="textareaField"
                    name="Comment"
                    rows={4} // Personaliza el número de filas según tus necesidades
                    placeholder="Haurás de deixar-nos una explicació de que has fet en aquest repositori i indicar-nos alguns exemples."
                    className="BoxForm"
                />
            */}
            </div>
          </div>
        </FormikStepper.Step>
      </FormikStepper>
    </div>
  );
};

const Dailyhacks = () => {
  const [estadoPadre, setEstadoPadre] = useState(false);
  const [correct, setCorrect] = useState(false); // Usar estado para rastrear correct

  const cambiarEstadoPadre = (value, actions) => {
    setCorrect(value);
    setEstadoPadre(!estadoPadre);
  };
  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <div className="BGPhather">
      {!estadoPadre ? (
        <>
          <h1 className="title2 title-underline">Dailyhack</h1>
          <section className="informative">
            <div className="Part1">
              <p>
                Molt bones, Hackers! Des de LleidaHack venim a presentar-vos el
                DailyHack d'aquest any! Alguns us preguntareu: que es això del
                DailyHack? Bé, tots els anys hem preparat abans de la HackEPS
                una serie de mini-reptes per tal d'anar calentant motors. Aquest
                any hem decidit modificar una mica aquest format, preparant un
                únic repte amb diversos premis!
              </p>
            </div>
            <br></br>

            <div className="Part1">
              <div className="IntroTexte">
                <h1 className="title2 left "> En que consisteix el repte?</h1>

                <p>
                  Fent un resum molt resumit, el repte consisteix a crear el
                  nostre propi llenguatge de signes i establir les normes
                  d'aquest, per després automatitzar-ne la traducció a
                  llenguatge escrit.
                  <br></br>
                  <br></br>A partir d'aquest dataset de kaggle:
                  https://www.kaggle.com/datasets/gti-upm/leapgestrecog que
                  consisteix en diverses imatges de mans en diferents posicions
                  es demana realitzar un projecte que consta de dues parts.
                </p>
                <br></br>
                <p> Trobaréu més informació al ReadMe del repositori:</p>
              </div>
              <div className="fotovidIntro">
                <img src={pergamino} alt="pergamino" className="pergar" />
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <p> Molta sort a tots, i que guanyi el millor!</p>
          </section>
          <br></br>
          <br></br>
          <section className="upload white">
            <br></br>
            <h2 className="title1">¿Vols presentar el teu repositori?</h2>

            <br></br>
            <HackerStepperForm
              onBotonClic={cambiarEstadoPadre}
            ></HackerStepperForm>
          </section>
          <br></br>
          <br></br>

          <section className="upload">
            <h1 className="title2 title-underline">Premis </h1>

            <div class="contenedorx">
              <div class="tarjeta ">
                <img
                  src="https://media.discordapp.net/attachments/991404325941289070/1150854311543316540/image_48.png?width=1014&height=675"
                  alt="Imagen 2"
                ></img>
                <h2 className="title3">1r</h2>
                <p className="descriptionss">
                  Razer Huntsman V2 (Purple Switch)
                </p>
              </div>
              <div class="tarjeta ">
                <img
                  src="https://media.discordapp.net/attachments/991404325941289070/1150854312533164133/image_47.png?width=539&height=404"
                  alt="Imagen 1"
                ></img>
                <h2 className="title3">2n </h2>
                <p className="descriptionss">Logitech G733 LIGHTSPEED</p>
              </div>
              <div class="tarjeta ">
                <img
                  src="https://media.discordapp.net/attachments/991404325941289070/1150854313036492800/image_46.png?width=1038&height=675"
                  alt="Imagen 3"
                ></img>
                <h2 className="title3">3r</h2>
                <p className="descriptionss">Razer Basilisk V3</p>
              </div>
              <br></br>
            </div>
          </section>
          <br></br>
          <br></br>
        </>
      ) : (
        <>
          {!correct ? (
            <section className="informative">
              <div className="Part2">
                <div className="iconBox">
                  <div className="wrapper">
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
                  <h2>Error registrant la teva Participació.</h2>
                  <p>
                    Sembla que algo ha fallat mentre registravem la teva
                    participació.
                  </p>
                  <p>
                    <i>
                      Torna a intentar registrar novament el teu repositori. En
                      cas que segueixi fallant, contacta amb nosaltres.
                    </i>
                  </p>
                </div>

                <div className="infbuttonok">
                  <button onClick={handleRefreshClick} className="contacta">
                    Intentar novament
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <section className="informative">
              <div className="Part2">
                <div className="iconBox">
                  <div className="wrapper">
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
                  <h2>Participació registrada correctament</h2>
                  <p>
                    En breus rebràs un correu electrònic de confirmació a la
                    teva bustia d'entrada.
                  </p>
                  <p>
                    <i>Si no ho reps, comproba la bustia de spam.</i>
                  </p>
                </div>

                <div className="infbuttonok">
                  <Link to="/">
                    <button className="contacta">Tornar al Inici</button>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default Dailyhacks;
