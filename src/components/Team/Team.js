import React from "react";
import "src/components/Team/Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import user from "src/icons/user.png";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Team = (props) => {
  const team = props.team;

  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const handleShowCreateTeam = () => setShowCreateTeam(true);
  const handleCloseCreateTeam = () => setShowCreateTeam(false);

  const [showJoinTeam, setShowJoinTeam] = useState(false);
  const handleShowJoinTeam = () => setShowJoinTeam(true);
  const handleCloseJoinTeam = () => setShowJoinTeam(false);

  const isInTeam = team.id != null;

  function TeamButtons() {
    const validationSchemaJoinTeam = Yup.object().shape({
      teamCode: Yup.string()
        .required("Codi de l'equip requerit")
        .matches(
          /^#[0-9]{6}$/,
          "El format ha de ser #XXXXXX on les Xs són números",
        ),
    });

    const handleSubmitJoinTeam = (values) => {
      console.log(values);
    };

    const validationSchemaCreateTeam = Yup.object().shape({
      teamName: Yup.string().required("Nom d'equip requerit"),
    });

    const handleSubmitCreateTeam = (values) => {
      console.log(values);
    };

    return (
      <>
        <Container className="p-bg-grey text-center mt-5 m-0 p-3">
          <h1>Inscripcions</h1>
          <Row className="justify-content-center">
            <Button
              className="m-3 team-button team-button-fit"
              onClick={handleShowJoinTeam}
            >
              Ja tinc un equip
            </Button>
            <Button
              className="m-3 team-button team-button-fit"
              onClick={handleShowCreateTeam}
            >
              Crear l'equip
            </Button>
          </Row>
        </Container>

        <Modal show={showJoinTeam} onHide={handleCloseJoinTeam} centered>
          <Modal.Header closeButton className="team-modal-no-border">
            <Modal.Title>Inscripció</Modal.Title>
          </Modal.Header>
          <Modal.Body className="team-modal-no-border">
            <div className="team-form-container">
              <Formik
                initialValues={{
                  teamCode: "#",
                }}
                validationSchema={validationSchemaJoinTeam}
                onSubmit={handleSubmitJoinTeam}
              >
                <Form>
                  <div className="formik-field">
                    <label htmlFor="teamCode" className="black-color">
                      Codi de l'equip (#XXXXXX):
                    </label>
                    <Field type="text" id="teamCode" name="teamCode" />
                    <ErrorMessage
                      name="teamCode"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="button-submit-container">
                    <Button className="team-button" type="submit">
                      Envia
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={showCreateTeam} onHide={handleCloseCreateTeam} centered>
          <Modal.Header closeButton className="team-modal-no-border">
            <Modal.Title>Inscripció</Modal.Title>
          </Modal.Header>
          <Modal.Body className="team-modal-no-border">
            <div className="team-form-container">
              <Formik
                initialValues={{
                  teamName: "",
                }}
                validationSchema={validationSchemaCreateTeam}
                onSubmit={handleSubmitCreateTeam}
              >
                <Form>
                  <div className="formik-field">
                    <label htmlFor="teamName" className="black-color">
                      Nom de l'equip:
                    </label>
                    <Field type="text" id="teamName" name="teamName" />
                    <ErrorMessage
                      name="teamName"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="button-submit-container">
                    <Button className="team-button" type="submit">
                      Envia
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  function TeamInfo() {
    return (
      <Container className="p-bg-grey text-center mt-5 m-0 p-3">
        <h1>
          {team.teamName} (Codi: #{team.teamCode})
        </h1>
        <p>El teu equip:</p>
        <Container className="p-2">
          <Row className="g-3 justify-content-center">
            {team.members.map((member, index) => (
              <Col className="col-3" key={index}>
                <div className="p-3 text-center bg-white">
                  <img
                    className="team-member-image bg-black"
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                    alt=""
                  />
                  <p className="team-member-name">{member.name}</p>
                  <Button className="team-button" href={member.profileLink}>
                    Veure perfil
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    );
  }

  return <>{isInTeam ? <TeamInfo /> : <TeamButtons />}</>;
};
export default Team;
