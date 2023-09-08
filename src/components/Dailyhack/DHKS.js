import React, { useState } from 'react';
import "src/components/Dailyhack/DHKSS.css"
import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import { Formik, Form, Field, ErrorMessage  } from 'formik';

const validationSchema = Yup.object().shape({
  nick: Yup.string().required("Nom / Nickname requerit"),
  repositori: Yup.string().required("Et falta l'enllaç del teu repositori de Github"),
  
 
});


const HackerPanel = () => {
  return (
    <Col className="hacker-panel">
      <Row>
        
            <svg className="peperonis"
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
  return (
    <div id="hackerForm" className="custom-form-Dailyhack">
      <FormikStepper
        /// Accept all Formik props
        onSubmit={(values, actions) => {
      //Hacer que al pulsar el submit, se ejecute el servicio de envio y se muestre un loading de minimo 2 segundos.
      //Cuando finalize la respuesta, si es afirmativa, se editará la componente mostrando en la pagina un texto de Enviado con exito junto a un boton de Volver a Inicio.
      //Si la respuesta es Negativa, le saldrá un texto de "Algo ha salido mál, vuelve a Introducir la Informacion. Si el problema perciste contacta con nosotros des del apartado de Contacto. y un boton de Volver a la Página."
      onBotonClic(false, actions);  //Se enviará true o false ya para indicar si algo salió mal o no cambiando el true o false
          console.log("submit!");
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
          style: { background: "var(--primary)" },
        }}
      >
        <FormikStepper.Step label="Informació personal">
          <Row>
            <HackerPanel></HackerPanel>
            <Col>
            <div className='piterrs'>
            <label htmlFor="Reposit" className="blackt">Nom / Nickname</label>

              <Field 
                name="nick" 
                type="text" 
                id="namenick" 
                placeholder="Nom / NickName"
                className="BoxForm"
               />
              <ErrorMessage name="nick" component="div" className="error-message" />

              <br></br>
              <br></br>

              <label htmlFor="Reposit" className="blackt">Repositori GitHub</label>
              <Field 
                name="repositori" 
                type="text" 
                id="Reposit" 
                placeholder="Repositori del dailyhack.."
                className="BoxForm"
              />
              <ErrorMessage name="repositori" component="div" className="error-message" />


              <br></br>
              <br></br>

              <label htmlFor="textareaField" className="blackt">Comentaris</label>
              <Field
                  as="textarea" // Usa "textarea" para el campo de texto
                  id="textareaField"
                  name="Comment"
                  rows={4} // Personaliza el número de filas según tus necesidades
                  placeholder="Puedes dejarnos cualquier comentario aqui..."
                  className="BoxForm"
              />
              
              
            </div>
              
            </Col>
          </Row>
        </FormikStepper.Step>
      </FormikStepper>
    </div>
  );
};


















const DHKS = () => {
  const [estadoPadre, setEstadoPadre] = useState(false);
  const [correct, setCorrect] = useState(false); // Usar estado para rastrear correct

  
  const cambiarEstadoPadre = (value, actions) => {
    setCorrect(value);
    console.log("El valor es:", value)
    console.log("La accion es:", actions)
    setEstadoPadre(!estadoPadre);
  };
  const handleRefreshClick = () => {
    window.location.reload();
  };

    return (
      <div className="BGPhather">
        {!estadoPadre ? (
          <>
                      <h1 className="title2 title-underline">Dailyhack Section</h1>
                        <section className="informative">
                            <div className="Part1">
                                <div className="IntroText">
                                
                                
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu porta quam. Mauris libero justo, dictum non est sed, 
                                    interdum finibus ligula. Morbi consectetur, odio nec dapibus pharetra, arcu dui tincidunt libero, at sodales dolor 
                                    dui et urna. Integer ac tincidunt massa, nec bibendum nisl. Etiam sed turpis rutrum ligula faucibus aliquet. 
                                    Aliquam egestas massa pharetra dolor feugiat, congue aliquam nibh semper. Sed pharetra nisi porttitor nisi pulvinar efficitur. 
                                    Mauris non justo et nibh iaculis convallis vitae et quam. Sed ut purus dolor. Aenean justo enim, consectetur vel efficitur eu, 
                                    porttitor quis nisl. Suspendisse vestibulum sapien in libero aliquet, a blandit arcu suscipit. Pellentesque varius non odio 
                                    tincidunt convallis
                                    </p>
                                </div>

                                <div className="fotovidIntro">
                                <img src="https://t9z6z8s3.rocketcdn.me/wp-content/uploads/2017/01/Hackathon.png"></img>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>

                        </section>
                        <br></br>
                        <br></br>
                        <section className="upload">
                            <br></br>
                            <h2>¿Vols presentar el teu repositori?</h2>

                            <br></br>
                            <HackerStepperForm onBotonClic={cambiarEstadoPadre}></HackerStepperForm>
                        </section>
                        <br></br>
                        <br></br>
                        </>

        ) : (
          <>
            {!correct ? (
                 <section className="informative">
                 <div className="Part2">
                  
                      <div className='iconBox'>
                      <div className="wrapper">
                        <svg className="crossmarker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="cross__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark_check" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"/></svg>
                      </div>                      
                        <h2>Error registrant la teva Participació.</h2>
                        <p>Sembla que algo ha fallat mentre registravem la teva participació.</p>
                        <p><i>Torna a intentar registrar novament el teu repositori. En cas que segueixi fallant, contacta amb nosaltres.</i></p>
                      </div>

                      <div className='infbuttonok'>
                        
                          <button onClick={handleRefreshClick} className='contacta' >Intentar novament</button>
                        
                      </div>

                 </div>
              </section>
            ) : (
              <section className="informative">
                 <div className="Part2">
                  
                      <div className='iconBox'>
                        <div className="wrapper"> 
                          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                          </svg>
                        </div>                        
                        <h2>Participació registrada correctament</h2>
                        <p>En breus rebràs un correu electrònic de confirmació a la teva bustia d'entrada.</p>
                        <p><i>Si no ho reps, comproba la bustia de spam.</i></p>
                      </div>

                      <div className='infbuttonok'>
                      <Link to="/">
                          <button  className='contacta' >Tornar al Inici</button>
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
  
export default DHKS;