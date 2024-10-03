import React from "react";
import { useState } from "react";
import { updateHacker } from "src/services/HackerService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SelectField } from "formik-stepper";
import FileBase from "react-file-base64";
import Row from "react-bootstrap/Row";
import userIcon from "src/icons/user2.png";
import Button from "src/components/buttons/Button";

const EditProfile = (props) => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [cvFile, setCvFile] = useState("");

  const [pfpImage, setImage] = useState(props.hacker.image);
  const [isSending, setIsLoading] = useState(false);
  const [isPfpTooLarge, setPfpTooLarge] = useState(false);
  const [isCvTooLarge, setCvTooLarge] = useState(false);
  const [hasImageChanged, setHasImageChanged] = useState(false);
  const [cvFileChanged, setcvFileChanged] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setCvTooLarge(parseFloat(event.size) > 1024);
    setCvFile(file);
    setcvFileChanged(true);
  };

  const clearFile = () => {
    setCvFile("");
    setCvTooLarge(false);
    setcvFileChanged(true);
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
    setHasImageChanged(true);
    setPfpTooLarge(parseFloat(event.size) > 1024);
    setImage(event.base64);
  };

  const handleImageUrlChange = (event) => {
    setHasImageChanged(true);
    setImage(event.target.value.trim());
  };

  const handleEditProfileSubmit = async (values) => {
    const data = {
      id: props.hacker.id,
      shirt_size: values.size,
      linkedin: values.linkedin,
      github: values.github,
    };
    if (hasImageChanged) {
      data.image = pfpImage;
    }
    if (cvFileChanged) {
      data.cv = cvFile;
    }

    setIsLoading(true);
    let result = await updateHacker(data);
    setIsLoading(false);

    if (result.success) {
      window.location.reload();
    } else {
      console.warn("hi ha hagut un error", result.errMssg);
      setSubmitError(result.errMssg);
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
                    size: props.hacker.shirt_size,
                    //imageUrl: props.hacker.image.startsWith("http") && props.hacker.image,
                    github: props.hacker.github,
                    linkedin: props.hacker.linkedin,
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

                      {isCvTooLarge && (
                        <label htmlFor="cvinfo_file" className="text-red-600">
                          El CV no pot ser més gran que 1mb
                        </label>
                      )}
                    </div>
                    <Row>
                      <div
                        className="col-12 col-xxl-6 d-flex flex-column "
                        style={{ marginTop: "7%", marginBottom: "1%" }}
                      >
                        <img
                          style={{
                            height: "250px",
                            width: "250px",
                            objectFit: "cover",
                            display: "block",
                          }}
                          className="avatar-image bg-white rounded-circle m-auto"
                          src={pfpImage || userIcon}
                          alt="avatar"
                        />
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
                        {isPfpTooLarge && (
                          <label htmlFor="avatarInput" className="text-red-600">
                            La imatge no pot ser més gran que 1mb
                          </label>
                        )}
                      </div>
                    </Row>

                    <div
                      className="button-submit-container"
                      style={{ marginTop: "2%" }}
                    >
                      {isCvTooLarge || isPfpTooLarge ? (
                        <Button
                          id="submitUpdateProfile"
                          outline
                          disabled
                          type="submit"
                        >
                          Actualitzar
                        </Button>
                      ) : (
                        <Button
                          id="submitUpdateProfile"
                          outline
                          secondary
                          type="submit"
                        >
                          {isSending ? "Actualitzant..." : "Actualitzar"}
                        </Button>
                      )}
                      {submitError !== "" && (
                        <label
                          htmlFor="submitUpdateProfile"
                          className="text-red-600"
                        >
                          Hi ha hagut un error, contactan's! <br />{" "}
                          {submitError}
                        </label>
                      )}
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
