import Header from "src/components/Header/Header.js";
import Footer from "src/components/Footer/Footer.js";
import "src/components/Forms/HackerForm.css";
import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import * as Yup from "yup";
import { CheckBoxField, FormikStepper, InputField, SelectField } from "formik-stepper";
import { signupHacker } from "src/services/HackerService";
import { Formik, Form, Field, ErrorMessage } from "formik";


const validationSchema = Yup.object().shape({
  study: Yup.string().required("Nom requerit"),
  school: Yup.string().required("Cognoms requerits"),
  from: Yup.string().required("Cognoms requerits"),

  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  phone: Yup.string().required("Telèfon requerit"),
  shirtSize: Yup.string().required("Talla de camiseta requerida"),
  nickname: Yup.string().required("Nickname requerit"),
});



export const InscripcioForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const [isUrl, setIsUrl] = useState(false);
  const onSubmit = async (values, { setSubmitting }) => {
    const pfp = isUrl ? urlImage : avatar;
    const hacker = {
      study: [values.firstName, values.lastName].join(" "),
      school: values.nickname,
      from: "string",
      food_restrictions: "",
      email: values.email,
      telephone: values.phone,
      address: "",
      shirt_size: values.shirtSize,
      meet_us: values.meet,
      image: pfp,
      is_image_url: isUrl,
      github: "",
      linkedin: "",
    };
    console.log(hacker);
    signupHacker(hacker);
    setSubmitting(false);
  };

  const handleImageChange = (event) => {
    setAvatar(event.base64);
    setIsUrl(false);
  };
  const handleImageUrlChange = (event) => {
    setUrlImage(event.target.value);
    setIsUrl(true);
  };

  return (
    <div id="hackerForm" className="custom-form">
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit}
        isSubmiting={true}
        initialValues={{
          study: "",
          school: "",
          from: "",
          email: "",
          nickname: "",
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
        <FormikStepper.Step label="Formació">
          <Row>
        
            <Col>
              <h1 className="white-color">Formació</h1>
              <InputField name="study" type="text" label="Que estudies o has estudiat?" />
              <InputField name="school" type="text" label="Centre d'estudis" />
              <InputField name="from" type="text" label="D'on vens?" />
             
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Detalls">
          <Row>
           
            <Col>
              <h1 className="white-color">Detalls</h1>
             
              <div>
                <SelectField
                  name="shirtSize"
                  label="Talla de samarreta"
                  options={[
                    { value: "S", label: "S" },
                    { value: "M", label: "M" },
                    { value: "L", label: "L" },
                    { value: "XL", label: "XL" },
                  ]}
                />
              </div>
              <div>
                <SelectField
                  name="meet"
                  label="Com ens has conegut?"
                  options={[
                    { value: "Xarxes Socials", label: "XXSS" },
                    { value: "Amic", label: "friends" },
                    { value: "Altres edicions", label: "last_editions" },
                    { value: "Altre mitjà", label: "other" },
                  ]}
                />
              </div>
              <InputField name="alergies" type="text" label="Tens alguna restricció alimentària o alèrgia?" />
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Perfil públic">
        <Row>
           
           <Col>
             <h1 className="white-color">Perfil públic</h1>
             <p className="white-color"> Vols que les empreses de Lleida et coneguin? (Opcional)</p>
            <br></br>
             
             <InputField name="linkedin" type="text" label="Enllaç de LinkedIn" />
             <InputField name="github" type="text" label="Enllaç de Github" />
             <InputField name="devpost" type="text" label="Enllaç de Devpost" />

             <label htmlFor="textareaField" className="white-color">Tens expeciència en altres hackatons?</label>
                <Field
                    as="textarea" // Usa "textarea" para el campo de texto
                    id="textareaField"
                    name="Comment"
                    rows={4} // Personaliza el número de filas según tus necesidades
                    placeholder="Tens expeciència en altres hackatons? Algun projecte personal que vulguis compartir? Explica'ns què t'apassiona i deixa aquí els enllaços de les teves xarxes socials."
                    className="BoxForm"
                />
           </Col>
         </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Definir Grups">
        <Row>
           
           <Col>
             <h1 className="white-color">Definir Grups</h1>
            <br></br>
             
             
           </Col>
         </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Termes i condicions">
        <Row>
           
           <Col>
           <h1 className="white-color">Termes i Condicions</h1>
           <br></br>
            <div className="TermsSpace">
                <p className="white-color box"> Al marcar el seguent check, acceptes els termes i condicións de l'esdeveniment juntament amb el compromís d'asistir a l'esdeveniment.</p>
                <p className="white-color box">Podrás trobar els terminis i condicions en els seguents apartats</p>
                <p className="white-color box">Terminis i condicions</p>
                <br></br>
                
            </div>
            <label>
          <input
            name="healthBackground"
            type="checkbox"
            value="test2"
          />
          Acceptes els termes i condicion per a poder participar a la 7ª edicio de la Hackeps
        </label>
            
           </Col>
         </Row>
        </FormikStepper.Step>
      </FormikStepper>
    </div>
  );
};

export default InscripcioForm;

