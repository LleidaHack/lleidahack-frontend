import React, { useEffect } from "react";
import "src/components/Team/Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  addHackerGroup,
  addHackerToGroupByCode,
  getHackerGroupById,
  getHackerGroupMembers,
  removeHackerFromGroup,
} from "src/services/HackerGroupService";
import { getHackeps } from "src/services/EventService";

const Team = (props) => {
  const [team, setTeam] = useState(props.team);
  let is_user = props.is_user;

  useEffect(() => {
    setTeam(props.team);
  }, [props.team]);

  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const handleShowCreateTeam = () => setShowCreateTeam(true);
  const handleCloseCreateTeam = () => setShowCreateTeam(false);

  const [showJoinTeam, setShowJoinTeam] = useState(false);
  const handleShowJoinTeam = () => setShowJoinTeam(true);
  const handleCloseJoinTeam = () => setShowJoinTeam(false);

  async function handleKick(member) {
    await removeHackerFromGroup(member.id, team.id);
    setTeam(await getTeam(team.id));
  }

  const handleLeave = () => {
    removeHackerFromGroup(localStorage.getItem("userID"), team.id);
    setTeam(null);
  };

  async function joinTeam(val) {
    let a = await addHackerToGroupByCode(
      val.replace(/#/g, ""),
      localStorage.getItem("userID"),
    );
    if (a.success) {
      getTeam(a.added_id);
      setShowJoinTeam(false);
    }
  }

  async function createTeam(val) {
    const team = {
      name: val.teamName,
      description: val.teamDesc,
      leader_id: localStorage.getItem("userID"),
      event_id: (await getHackeps()).id,
    };
    let a = await addHackerGroup(team);
    if (a.success) {
      getTeam(a.group_id);
      setShowCreateTeam(false);
    }
  }

  async function getTeam(team_id) {
    let team = {};
    getHackerGroupById(team_id)
      .then(async (response) => {
        team = response;
        if (response) return await getHackerGroupMembers(response.id);
        return null;
      })
      .then(async (response) => {
        if (response) {
          if (response.members.length > 0)
            setTeam({
              ...team,
              members: [...response.members],
            });
        }
      });
  }

  function TeamButtons() {
    const validationSchemaJoinTeam = Yup.object().shape({
      teamCode: Yup.string()
        .required("Codi de l'equip requerit")
        .matches(
          /^#[A-Z]{10}$/,
          "El format ha de ser #XXXXXXXXXX on les Xs són lletres",
        ),
    });

    const handleSubmitJoinTeam = (values) => {
      joinTeam(values.teamCode);
    };

    const validationSchemaCreateTeam = Yup.object().shape({
      teamName: Yup.string().required("Nom d'equip requerit"),
    });

    const handleSubmitCreateTeam = (values) => {
      createTeam(values);
    };

    return (
      <>
        {is_user ? (
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
        ) : (
          ""
        )}
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
                      Codi de l'equip (#XXXXXXXXXX):
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
                  teamDesc: "",
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
                    <label htmlFor="teamDesc" className="black-color">
                      Descripció:
                    </label>
                    <Field type="text" id="teamDesc" name="teamDesc" />
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
      <div className="Alineador">
        <div className="p-bg-grey text-center mt-5 m-0 p-3 containerinf">
          <h1>
            {team.name} (Codi: #{team.code})
          </h1>
          <p>El teu equip:</p>
          <Container className="p-2">
            <Row className="g-3 justify-content-center">
              {team.members.map((member, index) => (
                <Col className="col-xxl-3 col-6 cards" key={index}>
                  <div className="p-3 text-center bg-white smallCard">
                    <img
                      style={{}}
                      className="team-member-image bg-black"
                      src={
                        member.is_image_url
                          ? member.image
                          : "https://xsgames.co/randomusers/avatar.php?g=pixel"
                      }
                      alt=""
                    />
                    <p className="team-member-name">{member.name}</p>
                    {String(member.id) === localStorage.getItem("userID") ? (
                      ""
                    ) : (
                      <>
                        <Button
                          className="team-button"
                          href={
                            "/hackeps/perfil/" + member.id /* //TODO hardcoded*/
                          }
                        >
                          Veure perfil
                        </Button>

                        {(
                          team
                            ? String(team.leader_id) ===
                              localStorage.getItem("userID")
                            : false
                        ) ? (
                          <Button
                            className="kick-button"
                            onClick={() => handleKick(member)}
                          >
                            Expulsar
                          </Button>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <Button className="leave-group" onClick={() => handleLeave()}>
            Sortir del grup
          </Button>
        </div>
      </div>
    );
  }

  return <>{team ? <TeamInfo /> : <TeamButtons />}</>;
};
export default Team;
