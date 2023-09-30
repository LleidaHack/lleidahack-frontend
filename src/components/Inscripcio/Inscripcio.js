import React, { useState, useEffect } from "react";
import "src/components/Inscripcio/Inscripcio.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SelectField } from "formik-stepper";
import { registerHackerToEvent } from "src/services/EventManagementService";
import { getHackeps } from "src/services/EventService";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  studies: Yup.string().required("Aquest camp és obligatori"),
  center: Yup.string().required("Aquest camp és obligatori"),
  location: Yup.string().required("Aquest camp és obligatori"),
  size: Yup.string().required("Aquest camp és obligatori"),
  meet: Yup.string().required("Aquest camp és obligatori"),
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hackepsEvent = await getHackeps();
        setHackepsEvent(hackepsEvent);
      } catch (error) {
        console.log("El error obtenido es:", error);
      }
    };

    fetchData();
  }, []);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Nuevo estado para el mensaje de éxito
  const [showSuccessToast, setShowSuccessToast] = useState(false); // Nuevo estado para mostrar el toast de éxito

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log(values);
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
      };
      await registerHackerToEvent(
        localStorage.getItem("userID"),
        getHackeps(),
        data,
      );
      setSuccessMessage("El registre s'ha enviat correctament!");
      setShowSuccessToast(true);
      navigate("/perfil");
    } catch (error) {
      // Maneja los errores aquí y muestra el mensaje de error
      console.error("Error:", error);
      setErrorMessage(
        "Hi ha hagut un error als nostres servidors. Torna-ho a provar més tard.",
      );
    }
  };

  const [cvFile, setCvFile] = useState("");
  const [hackepsEvent, setHackepsEvent] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCvFile(file);
    console.log(file);
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
    <div className="container-all-inscripcio">
      <br />
      <div className="container-inscripcio">
        <h1 className="title-contacte title-underline">
          Inscripció HackEPS 2023
        </h1>
        <div className="form-container">
          <Formik
            initialValues={{
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
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="formik-field">
                <label htmlFor="studies">Què estudies o has estudiat?</label>
                <Field type="text" id="studies" name="studies" />
                <ErrorMessage
                  name="studies"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="formik-field">
                <label htmlFor="center">Centre d'estudis:</label>
                <Field type="text" id="center" name="center" />
                <ErrorMessage
                  name="center"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="formik-field">
                <label htmlFor="location">D'on vens?:</label>
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
                />
                <ErrorMessage
                  name="size"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="formik-field">
                <label htmlFor="food">
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
                />
              </div>
              <div className="formik-field">
                <label htmlFor="cvinfo_links">
                  Vols que les empreses de Lleida et coneguin? (Opcional)
                </label>
                <p className="subtitle">
                  Tens expeciència en altres hackatons? Algun projecte personal
                  que vulguis compartir? Explica'ns què t'apassiona i deixa aquí
                  els enllaços de les teves xarxes socials.
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
                <label htmlFor="cvinfo_file">
                  Adjunta el teu CV (Opcional)
                </label>
                <input
                  type="file"
                  id="cvinfo_file"
                  name="cvinfo_file"
                  onChange={handleFileChange}
                />
                {cvFile && (
                  <div className="file-info">
                    <span className="file-name">{cvFile.name}</span>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={clearFile}
                    >
                      &#10005;
                    </button>
                  </div>
                )}
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

export default InscripcioForm;
