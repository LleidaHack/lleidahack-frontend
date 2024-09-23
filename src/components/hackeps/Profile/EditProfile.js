import React from "react";
import { useState } from "react";
import { updateHacker } from "src/services/HackerService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikStepper, InputField, SelectField } from "formik-stepper";
import FileBase from "react-file-base64";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import userIcon from "src/icons/user2.png";
import Button from "src/components/buttons/Button";

const EditProfile = (props) => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [cvFile, setCvFile] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [urlImage, setUrlImage] = useState(props.hacker.image);
  const [isUrl, setIsUrl] = useState(props.hacker.is_image_url);

  const sizeOptions = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
    { value: "XXXL", label: "XXXL" },
  ];

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

  const onEditButtonClick = () => {
    setShowEditProfile(!showEditProfile);
  };

  const handleImageChange = (event) => {
    setAvatar(event.base64);
    setIsUrl(false);
  };
  const handleImageUrlChange = (event) => {
    setUrlImage(event.target.value);
    setIsUrl(true);
  };

  const handleEditProfileSubmit = async (values) => {
    const pfp = isUrl ? urlImage : avatar;
    const data = {
      id: props.hacker.id,
      food_restrictions: values.food,
      shirt_size: values.size,
      linkedin: values.linkedin,
      github: values.github,
      studies: values.studies,
      study_center: values.center,
      location: values.location,
      cv: cvFile,
      image: pfp,
      is_image_url: isUrl,
      update_user: true,
    };

    let result = await updateHacker(data);
    if (result.success) {
      window.location.reload();
    }
  };

  return (
    <>
      {props.hacker && (
        <div className="row align-middle mx-auto mb-3 col-12">
          {showEditProfile ? (
            <div>
              <Button secondary outline onClick={onEditButtonClick}>
                <i className="fas fa-sign-out"></i> Close
              </Button>

              <div className="form-container">
                <Formik
                  enableReinitialize
                  initialValues={{
                    food: props.hacker.food_restrictions,
                    size: props.hacker.shirt_size,
                    //image: profile.image,
                    //is_image_url: profile.is_image_url,
                    receive_emails: props.hacker.receive_emails,
                    github: props.hacker.github,
                    linkedin: props.hacker.linkedin,
                    studies: props.hacker.studies,
                    center: props.hacker.study_center,
                    location: props.hacker.location,
                    cvinfo: props.hacker.cv,
                  }}
                  onSubmit={handleEditProfileSubmit}
                >
                  <Form>
                    <div
                      className="formik-field "
                      style={{ marginTop: "5%", color: "black" }}
                    >
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

                    <div className="subfield text-textSecondaryHackeps">
                      <label htmlFor="linkedin">Enllaç de LinkedIn</label>
                      <Field type="text" id="linkedin" name="linkedin" />
                      <ErrorMessage
                        name="linkedin"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div
                      className="subfield text-textSecondaryHackeps"
                      style={{ marginTop: "8%" }}
                    >
                      <label htmlFor="linkedin">Enllaç de GitHub</label>
                      <Field type="text" id="github" name="github" />
                      <ErrorMessage
                        name="github"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div
                      className="file-input-container text-textSecondaryHackeps"
                      style={{ marginTop: "8%" }}
                    >
                      <label htmlFor="cvinfo_file">
                        Adjunta el teu CV (Opcional)
                      </label>
                      <div className="file-input-container">
                        <FileBase
                          type="file"
                          id="cvinfo_file"
                          name="cvinfo_file"
                          onDone={handleFileChange}
                        />
                      </div>
                      {cvFile && (
                        <div className="file-info">
                          <span className="file-name">{cvFile.name}</span>
                          <Button primary onClick={clearFile}>
                            &#10005;
                          </Button>
                        </div>
                      )}
                    </div>
                    <Row className="">
                      <div
                        className="col-12 col-xxl-6 d-flex flex-column "
                        style={{ marginTop: "7%", marginBottom: "1%" }}
                      >
                        {isUrl && urlImage !== "" ? (
                          <img
                            style={{ height: "250px", width: "250px" }}
                            className="avatar-image bg-white rounded-circle m-auto"
                            src={urlImage}
                            alt="avatar"
                          />
                        ) : avatar ? (
                          <img
                            style={{ height: "250px", width: "250px" }}
                            className="avatar-image bg-white rounded-circle m-auto"
                            src={avatar}
                            alt="avatar"
                          />
                        ) : (
                          <img
                            style={{ height: "250px", width: "250px" }}
                            className="avatar-image bg-white rounded-circle m-auto"
                            src={userIcon}
                            alt="avatar"
                          />
                        )}
                      </div>

                      <div className=" mb-3 mb-xxl-0 align-self-center text-textSecondaryHackeps">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                          className="mb-1"
                          type="text"
                          id="imageUrl"
                          placeholder="https://..."
                          onChange={handleImageUrlChange}
                        />
                        <div className="file-input-container">
                          <FileBase
                            id="avatarInput"
                            type="file"
                            multiple={false}
                            onDone={handleImageChange}
                          />
                        </div>
                      </div>
                    </Row>

                    <div
                      className="button-submit-container"
                      style={{ marginTop: "2%" }}
                    >
                      <Button outline secondary type="submit">
                        Actualitzar
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          ) : (
            <Button outline secondary onClick={onEditButtonClick}>
              <i className="fas fa-pen-to-square"></i> Editar perfil
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default EditProfile;
