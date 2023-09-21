import "src/components/Forms/HackerForm.css";
import "formik-stepper/dist/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import * as Yup from "yup";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import { signupHacker } from "src/services/HackerService";
import FileBase from "react-file-base64";
import userIcon from "src/icons/user2.png";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Nom requerit"),
  lastName: Yup.string().required("Cognoms requerits"),
  birthDate: Yup.date().required("Data de naixment requerida"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  phone: Yup.string().required("Telèfon requerit"),
  shirtSize: Yup.string().required("Talla de camiseta requerida"),
  nickname: Yup.string().required("Nickname requerit"),
});

const HackerPanel = () => {
  return (
    <Col className="hacker-panel">
      <Row>
        <img src={require("src/imgs/hacker_image.svg").default} alt="Hacker" />
      </Row>
      <Row>
        <h2 className="hacker-panel-title">Hacker</h2>
      </Row>
    </Col>
  );
};

export const HackerStepperForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const [isUrl, setIsUrl] = useState(false);
  const onSubmit = async (values, { setSubmitting }) => {
    const pfp = isUrl ? urlImage : avatar;
    const hacker = {
      name: [values.firstName, values.lastName].join(" "),
      nickname: values.nickname,
      password: "123456789",
      birthdate: values.birthDate,
      food_restrictions: "",
      email: values.email,
      telephone: values.phone,
      address: "",
      shirt_size: values.shirtSize,
      image: pfp,
      is_image_url: isUrl,
      github: "",
      linkedin: "",
    };
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
    <div id="hackerForm" className="custom-form" style={{ flex: 1 }}>
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit}
        isSubmiting={true}
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
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
        <FormikStepper.Step label="Informació personal">
          <Row>
            <HackerPanel />
            <Col>
              <h1 className="white-color">Crear compte</h1>
              <InputField name="firstName" type="text" label="Nom" />
              <InputField name="lastName" type="text" label="Cognoms" />
              <InputField
                name="birthDate"
                type="date"
                label="Data de naixement"
              />
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Contacte">
          <Row>
            <HackerPanel />
            <Col>
              <h1 className="white-color">Crear compte</h1>
              <InputField name="phone" type="text" label="Telèfon" />
              <InputField name="email" type="email" label="E-mail" />
              <div>
                <SelectField
                  name="shirtSize"
                  label="Talla de samarreta"
                  options={[      
                    { value: "S", label: "S" },
                    { value: "M", label: "M" },
                    { value: "L", label: "L" },
                    { value: "XL", label: "XL" },
                    { value: "XXL", label: "XXL" },
                    { value: "XXXL", label: "XXXL" },
                  ]}
                />
              </div>
            </Col>
          </Row>
        </FormikStepper.Step>
        <FormikStepper.Step label="Avatar">
          <Row>
            <Col>
              {isUrl && urlImage !== "" ? (
                <img
                  style={{ height: "150px", width: "150px" }}
                  className="avatar-image bg-white rounded-circle m-auto"
                  src={urlImage}
                  alt="avatar"
                />
              ) : avatar ? (
                <img
                  style={{ height: "150px", width: "150px" }}
                  className="avatar-image bg-white rounded-circle m-auto"
                  src={avatar}
                  alt="avatar"
                />
              ) : (
                <img
                  style={{ height: "150px", width: "150px" }}
                  className="avatar-image bg-white rounded-circle m-auto"
                  src={userIcon}
                  alt="avatar"
                />
              )}

              <div>
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                  type="text"
                  id="imageUrl"
                  onChange={handleImageUrlChange}
                />
              </div>
              <FileBase
                id="avatarInput"
                type="file"
                multiple={false}
                onDone={handleImageChange}
              />
            </Col>
            <Col>
              <h1 className="white-color">Crear compte</h1>
              <InputField name="nickname" type="text" label="Nickname" />
            </Col>
          </Row>
        </FormikStepper.Step>
      </FormikStepper>
    </div>
  );
};
