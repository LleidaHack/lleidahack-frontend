import React, { useEffect } from "react";
import "src/components/hackeps/Team/Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "src/components/buttons/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  addHackerGroup,
  addHackerToGroupByCode,
  getHackerGroupById,
  removeHackerFromGroup,
  setHackerGroupLeader,
} from "src/services/HackerGroupService";
import { getHackeps } from "src/services/EventService";
import ProfilePic from "src/components/hackeps/ProfilePic/ProfilePic";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import PopupBody from "src/components/emergentPopup/PopupBody";

const Team = (props) => {
  const [team, setTeam] = useState(props.team);
  let is_user = props.is_user;

  useEffect(() => {
    setTeam(props.team);
  }, [props.team]);

  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const handleShowCreateTeam = () => setShowCreateTeam(true);
  const handleCloseCreateTeam = () => setShowCreateTeam(false);

  const {
    register: registerJoinTeam,
    handleSubmit: handleSubmitJoinTeam,
    formState: { errors: errorsJoinTeam },
  } = useForm({
    mode: "onChange",
  });

  const {
    register: registerCreateTeam,
    handleSubmit: handleSubmitCreateTeam,
    formState: { errors: errorsCreateTeam },
  } = useForm({
    mode: "onChange",
  });

  const [showJoinTeam, setShowJoinTeam] = useState(false);
  const handleShowJoinTeam = () => setShowJoinTeam(true);
  const handleCloseJoinTeam = () => setShowJoinTeam(false);
  const [err, setErr] = useState("");
  const [JoinErrorMessage, setJoinErrorMessage] = useState("");
  async function handleKick(member) {
    await removeHackerFromGroup(member.id, team.id);
    setTeam(await getHackerGroupById(team.id));
  }

  async function handleMakeLeader(member) {
    await setHackerGroupLeader(team.id, member.id);
    setTeam(await getHackerGroupById(team.id));
  }

  async function handleLeave() {
    let a = await removeHackerFromGroup(
      localStorage.getItem("userID"),
      team.id,
    );
    if (a.errCode) {
      setErr(a.errMssg);
    } else {
      setTeam(null);
    }
  }

  async function joinTeam(val) {
    console.log("wefwefwefwefw");
    let a = await addHackerToGroupByCode(
      val.teamCode ? val.teamCode.replace(/[# ]/g, "") : "",
      localStorage.getItem("userID"),
    );
    if (a.success) {
      setTeam(await getHackerGroupById(a.added_group_id));
      setShowJoinTeam(false);
    } else {
      setJoinErrorMessage(a.errMssg);
    }
  }

  async function createTeam(val) {
    console.log("wefwefwefwefw");
    const team = {
      name: val.teamName,
      description: val.teamDesc,
      leader_id: localStorage.getItem("userID"),
      event_id: (await getHackeps()).id,
    };
    let a = await addHackerGroup(team);
    if (a.success) {
      setTeam(await getHackerGroupById(a.group_id));
      setShowCreateTeam(false);
    }
  }

  function TeamButtons() {
    const handleSubmitJoinTeam2 = (data) => {
      console.log("JKOIN team submit");
      joinTeam(data);
    };

    const handleSubmitCreateTeam2 = (data) => {
      console.log("Create team submit");
      createTeam(data);
    };

    return (
      <>
        {is_user && (
          <div className="p-bg-grey text-center mt-5 m-0 p-3 contss flex md:flex-row flex-col">
            <TitleGeneralized marginBot="2" padTop="0" primary>
              Inscripcions
            </TitleGeneralized>
            <div className="gap-2 flex ">
              <Button primary onClick={handleShowJoinTeam}>
                Ja tinc un equip
              </Button>
              <Button primary secondary onClick={handleShowCreateTeam}>
                Crear l'equip
              </Button>
            </div>
          </div>
        )}

        <PopupBody
          crossColor="gray-300"
          isOpen={showJoinTeam}
          onClose={handleCloseJoinTeam}
          children={
            <div className="team-form-container">
              <TitleGeneralized className="text-black text-2xl">
                {" "}
                Unir-se a un equip{" "}
              </TitleGeneralized>
              <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmitJoinTeam((data) =>
                  handleSubmitJoinTeam2(data),
                )}
              >
                <label className="text-black">
                  Codi de l'equip (#XXXXXXXXXX):
                  <input
                    className={`${errorsJoinTeam.teamCode ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                    placeholder="#1234567890"
                    {...registerJoinTeam("teamCode", {
                      required: "El codi de l'equip és obligatori",
                    })}
                  />
                  {errorsJoinTeam.teamCode && (
                    <span className="text-red-400">
                      {errorsJoinTeam.teamCode.message}
                    </span>
                  )}
                </label>

                <Button primary type="submit">
                  Unirse a l'equip
                </Button>
                <p className="text-red-400">{JoinErrorMessage}</p>
              </form>
            </div>
          }
        />

        <PopupBody
          crossColor="gray-300"
          isOpen={showCreateTeam}
          onClose={handleCloseCreateTeam}
          children={
            <div className="team-form-container">
              <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmitCreateTeam((data) =>
                  handleSubmitCreateTeam2(data),
                )}
              >
                <TitleGeneralized className="text-black text-2xl">
                  {" "}
                  Unir-se a un equip{" "}
                </TitleGeneralized>
                <label className="text-black">
                  Nom de l'equip:
                  <input
                    className={`${errorsCreateTeam.teamName ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                    placeholder=""
                    {...registerCreateTeam("teamName", {
                      required: "El nom de l'equip és obligatori",
                    })}
                  />
                  {errorsCreateTeam.teamName && (
                    <span className="text-red-400">
                      {errorsCreateTeam.teamName.message}
                    </span>
                  )}
                </label>

                <label className="text-black">
                  Descripció:
                  <input
                    className={`${errorsCreateTeam.teamDesc ? "bg-pink-100" : "bg-white"} min-h-10 px-2 text-base mt-2`}
                    placeholder=""
                    {...registerCreateTeam("teamDesc", {
                      required: "La descripció de l'equip és obligatori",
                    })}
                  />
                  {errorsCreateTeam.teamDesc && (
                    <span className="text-red-400">
                      {errorsCreateTeam.teamDesc.message}
                    </span>
                  )}
                </label>

                <Button primary type="submit">
                  Crear equip
                </Button>
              </form>
            </div>
          }
        />
      </>
    );
  }

  function TeamInfo() {
    return (
      <div className="Alineador">
        <div className="p-bg-grey text-center mt-5 m-0 p-3 containerinf">
          <TitleGeneralized padTop="0" primary>
            {team.name} {team.code && `Codi: #${team.code}`}
          </TitleGeneralized>
          <Container className="">
            <Row className="justify-content-center">
              {team.members.map((member, index) => (
                <Col className="col-xxl-3 cards" key={index}>
                  <div className="p-3 text-center bg-white smallCard">
                    <ProfilePic hacker={member} size="big" bgcolor="black" />
                    <p className="team-member-name">{member.name}</p>
                    {String(member.id) === localStorage.getItem("userID") ? (
                      ""
                    ) : (
                      <>
                        <Button
                          className="my-2"
                          primary
                          sm
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
                          <>
                            <Button
                              primary
                              sm
                              onClick={() => handleKick(member)}
                            >
                              Expulsar
                            </Button>

                            <Button
                              className="my-2"
                              sm
                              primary
                              onClick={() => handleMakeLeader(member)}
                            >
                              Fer líder
                            </Button>
                          </>
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
          {is_user && (
            <>
              <Button primary onClick={() => handleLeave()}>
                Sortir del grup
              </Button>
              <p style={{ color: "#c00" }}>{err}</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return <>{team ? <TeamInfo /> : <TeamButtons />}</>;
};
export default Team;
