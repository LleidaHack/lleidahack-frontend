import React, { useState, useEffect } from "react";
import "src/components/hackeps/Inscripcio/Inscripcio.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SelectField } from "formik-stepper";
import { registerHackerToEvent } from "src/services/EventManagementService";
import { getHackeps } from "src/services/EventService";
import FailFeedback from "src/components/hackeps/Feedbacks/FailFeedback";
import SuccessFeedback from "src/components/hackeps/Feedbacks/SuccesFeedback";

import Button from "src/components/buttons/Button";

import FileBase from "react-file-base64";
import { getHackerById } from "src/services/HackerService";

import { getEventIsHackerRegistered } from "src/services/EventService";
import { updateHacker } from "src/services/HackerService";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const validationSchema = Yup.object().shape({
  studies: Yup.string().required("Aquest camp és obligatori"),
  center: Yup.string().required("Aquest camp és obligatori"),
  location: Yup.string().required("Aquest camp és obligatori"),
  size: Yup.string().required("Aquest camp és obligatori"),
  meet: Yup.string().required("Aquest camp és obligatori"),
  checkboxterms: Yup.boolean().oneOf(
    [true],
    "Has d'acceptar els termes i condicions per a continuar",
  ),
});

const InscripcioForm = () => {
  const sizeOptions = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
    { value: "XXXL", label: "XXXL" },
  ];

  const meetOptions = [
    { value: "Xarxes socials", label: "Xarxes socials" },
    { value: "Un amic", label: "Un amic" },
    { value: "Altres edicions", label: "Altres edicions" },
    { value: "Cartells publicitaris", label: "Cartells publicitaris" },
    { value: "Altre mitjà", label: "Altre mitjà" },
  ];

  const [cvFile, setCvFile] = useState("");
  const [hackepsEvent, setHackepsEvent] = useState(null);
  const [previousRegistration, setPreviousRegistration] = useState({
    studies: "",
    center: "",
    location: "",
    size: "",
    food: "",
    cvinfo: "",
    meet: "",
    linkedin: "",
    github: "",
    devpost: "",
    checkboxterms: "",
  });
  const [registered, setRegistered] = useState(false);

  //FeedbackStates
  const [submittRegister, setsubmittRegister] = useState(false); // Si se da al boton de Succes, se vuelve true, es decir, que le toca al feedback
  const [stateRegister, setStateRegister] = useState(false); //Muestra si el registro es correcto (true) o hay error (false)
  const [errRegister, setErrRegister] = useState(""); //Estado que almacena el tipo de error

  useEffect(() => {
    const fetchData = async () => {
      const hackepsEvent = await getHackeps();
      const me = await getHackerById(localStorage.getItem("userID"));
      setCvFile(me.cv);
      getEventIsHackerRegistered(hackepsEvent.id, me.id).then((response) => {
        if (response) {
          setRegistered(true);
        } else {
          setRegistered(false);
        }
      });
      setHackepsEvent(hackepsEvent);
      setPreviousRegistration(me);
      console.log(me);
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const data = {
      shirt_size: values.size,
      food_restrictions: values.food,
      cv: cvFile,
      description: values.cvinfo_links,
      github: values.github,
      linkedin: values.linkedin,
      studies: values.studies,
      study_center: values.center,
      location: values.location,
      how_did_you_meet_us: values.meet,
      update_user: true,
      terms_accepted: values.checkboxterms,
    };

    if (registered) {
      data.id = previousRegistration.id;
      updateHacker(data);
    } else {
      let registration = await registerHackerToEvent(
        localStorage.getItem("userID"),
        hackepsEvent.id,
        data,
      );
      if (registration.message) {
        setErrRegister("");
        if (registration.message === "Hacker already registered") {
          setErrRegister(
            "Ja estas registrat a aquest esdeveniment. En cas que es tracti d'un error, contacta amb nosatres.",
          );
        }

        setStateRegister(false);
      } else if (registration.detail) {
        setErrRegister(registration.detail);
        setStateRegister(false);
      } else {
        setStateRegister(true);
      }

      setsubmittRegister(true);
    }
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  const handleFileChange = (event) => {
    let file = event.base64;
    setCvFile(file);
  };

  const clearFile = () => {
    setCvFile("");
    // Clear the input field to allow selecting the same file again
    const inputElement = document.getElementById("cvinfo_file");
    if (inputElement) {
      inputElement.value = "";
    }
  };

  return (
    <div className="container-all-inscripcio bg-secondaryHackeps">
      {!submittRegister ? (
        <>
          <br />
          <div className="container-inscripcio">
            <TitleGeneralized underline={true}>
              Inscripció HackEPS 2023
            </TitleGeneralized>
            <div className="form-container">
              <Formik
                enableReinitialize
                initialValues={{
                  studies: previousRegistration.studies,
                  center: previousRegistration.study_center,
                  location: previousRegistration.location,
                  size: previousRegistration.shirt_size,
                  food: previousRegistration.food_restrictions,
                  cvinfo: previousRegistration.cv,
                  meet: previousRegistration.how_did_you_meet_us,
                  linkedin: previousRegistration.linkedin,
                  github: previousRegistration.github,
                  devpost: previousRegistration.cv,
                  checkboxterms: registered,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="formik-field">
                    <label
                      className="text-textSecondaryHackeps"
                      htmlFor="studies"
                    >
                      Què estudies o has estudiat?
                    </label>
                    <Field type="text" id="studies" name="studies" />
                    <ErrorMessage
                      name="studies"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <label
                      className="text-textSecondaryHackeps"
                      htmlFor="center"
                    >
                      Centre d'estudis:
                    </label>
                    <Field type="text" id="center" name="center" />
                    <ErrorMessage
                      name="center"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <label
                      className="text-textSecondaryHackeps"
                      htmlFor="location"
                    >
                      D'on vens?:
                    </label>
                    <Field type="text" id="location" name="location" />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <SelectField
                      id="size"
                      name="size"
                      label="Talla de samarreta:"
                      options={sizeOptions}
                      placeholder="La meva talla de samarreta és..."
                      labelColor="#000000"
                    />
                    <ErrorMessage
                      name="size"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <label className="text-textSecondaryHackeps" htmlFor="food">
                      Tens alguna restricció alimentària o alèrgia?
                    </label>
                    <Field type="text" id="food" name="food" />
                    <ErrorMessage
                      name="food"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="formik-field">
                    <SelectField
                      id="meet"
                      name="meet"
                      options={meetOptions}
                      label="Com ens has conegut?"
                      placeholder="Us he conegut per..."
                      labelColor="#000000"
                    />
                  </div>
                  <div className="formik-field">
                    <label
                      className="text-textSecondaryHackeps"
                      htmlFor="cvinfo_links"
                    >
                      Vols que les empreses de Lleida et coneguin? (Opcional)
                    </label>
                    <p className="subtitle text-textSecondaryHackeps">
                      Tens experiència en altres hackatons? Algun projecte
                      personal que vulguis compartir? Explica'ns què t'apassiona
                      i deixa aquí els enllaços de les teves xarxes socials.
                    </p>
                    <Field
                      as="textarea"
                      id="cvinfo_links"
                      name="cvinfo_links"
                      rows="4"
                    />

                    {/* Agrupamos los campos de LinkedIn, GitHub y Devpost uno debajo del otro */}
                    <div className="subfields-container">
                      <div className="subfield">
                        <Field
                          type="text"
                          id="linkedin"
                          name="linkedin"
                          placeholder="Enllaç de LinkedIn"
                        />
                        <ErrorMessage
                          name="linkedin"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>

                    <div className="subfields-container">
                      <div className="subfield">
                        <Field
                          type="text"
                          id="github"
                          name="github"
                          placeholder="Enllaç de GitHub"
                        />
                        <ErrorMessage
                          name="github"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>

                    <div className="subfields-container">
                      <div className="subfield">
                        <Field
                          type="text"
                          id="devpost"
                          name="devpost"
                          placeholder="Enllaç de Devpost"
                        />
                        <ErrorMessage
                          name="devpost"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="file-input-container">
                    <label
                      className="text-textSecondaryHackeps"
                      htmlFor="cvinfo_file"
                    >
                      Adjunta el teu CV (Opcional)
                    </label>
                    <FileBase
                      type="file"
                      id="cvinfo_file"
                      name="cvinfo_file"
                      onDone={handleFileChange}
                    />
                    {cvFile && (
                      <div className="file-info">
                        <span className="file-name text-textSecondaryHackeps">
                          {cvFile.name}
                        </span>
                        <Button delete onClick={clearFile}>
                          &#10005;
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="checkbox-container">
                    <br />
                    <br />
                    <Field
                      type="checkbox"
                      id="checkboxterms"
                      name="checkboxterms"
                    />
                    <label
                      className="text-textSecondaryHackeps"
                      htmlFor="checkboxterms"
                    >
                      Accepto els{" "}
                      <a href="/terms" target="_blank">
                        Termes i Condicions
                      </a>{" "}
                      de la HackEPS 2023
                    </label>
                    <br />
                    <br />
                    <ErrorMessage
                      name="checkboxterms"
                      component="div"
                      className="text-errorRed"
                    />
                  </div>
                  <div className="button-submit-container m-8 mt-2">
                    <Button primary type="submit">
                      {registered ? "Actualitza" : "Envia"}
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </>
      ) : (
        <>
          {!stateRegister ? (
            <>
              <FailFeedback
                title={`Error al registrar la teva participació.`}
                text={`Sembla que alguna cosa ha fallat mentre enregistràvem la teva participació al sistema`}
                hasButton={true}
                buttonLink={`/inscripcio`}
                buttonText={`Intentar novament`}
                italic={errRegister}
                onButtonClick={handleButtonClick}
              />
            </>
          ) : (
            <>
              <SuccessFeedback
                title="T'has registrat correctament a l'esdeveniment!"
                text={`El teu registre s'ha realitzat correctament. \n Quan siguis acceptat a l'esdeveniment rebràs un correu per a confirmar la teva assistència.\n Estigues atent! Tindrás 5 dies per confirmar-ho.`}
                hasButton={true}
                buttonLink="/perfil"
                buttonText="Inicia sessió"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default InscripcioForm;
