import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "src/palette.css";
import "./Profile.css";
import Modal from "react-bootstrap/Modal";
import HSkeleton from "src/components/LoadingSkeleton/HSkeleton";
import { getHackerById, getHackerGroups } from "src/services/HackerService";
import {
  getHackeps,
  getEventIsHackerRegistered,
  getEventIsHackerAccepted,
} from "src/services/EventService";
import EditProfile from "./EditProfile";
import qrIcon from "src/icons/qr-black.png";

//import Medals from "src/components/Medals/Medals";
//import Calendar from "react-calendar/dist/umd/Calendar";
import Team from "src/components/Team/Team";
import LinkAccounts from "src/components/LinkAccounts/LinkAccounts";
import Join from "src/components/Join/Join";
import QrCode from "src/components/Home/QrCode.js";
import { getHackerGroupById } from "src/services/HackerGroupService";
import UserNotFound from "./UserNotFound";
import ProfilePic from "../ProfilePic/ProfilePic";
import { Button } from "react-bootstrap";

const ProfileComponent = () => {
  let { hacker_id } = useParams();
  const [isUser, setIsUser] = useState(
    hacker_id === localStorage.getItem("userID"),
  );

  const [showQR, setShowQR] = useState(false);
  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);

  const [hacker, setHacker] = useState(null);
  const [team, setTeam] = useState(null);
  const [event, setEvent] = useState(null);
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let event_id;
    getHackeps().then((response) => {
      event_id = response.id;
      getEventIsHackerAccepted(event_id, hacker_id).then((response) => {
        if (response) {
          setEvent({ event_id: event_id, accepted: true, registered: true });
        } else {
          getEventIsHackerRegistered(event_id, hacker_id).then((response) => {
            if (response) {
              setEvent({
                event_id: event_id,
                accepted: false,
                registered: true,
              });
            } else {
              setEvent({
                event_id: event_id,
                accepted: false,
                registered: false,
              });
            }
          });
        }
      });
    });
    if (process.env.REACT_APP_DEBUG === "true")
      console.log("hacker id:" + hacker_id);
    if (!hacker_id) {
      setIsUser(true);
      hacker_id = localStorage.getItem("userID");
    }
    getHackerById(hacker_id).then(async (response) => {
      setHacker(await response);
      setQrCode(await response.code);
      const response_1 = await getHackerGroups(hacker_id);
      if (response_1 && !response_1.message) {
        for (let i = 0; i < response_1.length; i++) {
          if (response_1[i].event_id === event_id) {
            setTeam(await getHackerGroupById(response_1[i].id));
            break;
          }
        }
      }
    });
  }, [useParams()]);

  function logOut() {
    localStorage.clear();
  }

  function generateMemberTime(creationDate) {
    let first = new Date(creationDate);
    let now = Date.now();

    let seconds = (now - first) / 1000;
    let days = seconds / 60 / 60 / 24;

    if (days > 365) return `${~~(days / 365)} anys`;

    if (days > 30) return `${~~(days / 30)} mesos`;

    return `${~~days} dies`;
  }
  if (hacker)
    if (hacker.message === "Hacker not found") return <UserNotFound />;

  return (
    <>
      <div className="p-bg-black text-white main-screen">
        <div className="container-xxl pt-3 peter">
          {/* User info and qr */}
          <div className="row align-middle mx-auto mb-3">
            {/* User Image */}
            <div className="col-12 col-xl-4 m-auto text-center">
              <ProfilePic
                id="profile-pic-big"
                hacker={hacker}
                size="big"
                defaultColor="white"
                bgcolor="white"
                border={true}
                is_profile={true}
              />
              <br />
              <br />
              {isUser && (
                <Link to="/home" className="logOut" onClick={logOut}>
                  <button className="logOut-button">
                    <i className="fas fa-sign-out"></i> Tancar sessió
                  </button>
                </Link>
              )}
            </div>

            {/* Center Column */}
            <div className="col-12 col-xl-4 px-0 my-3 text-center">
              <div className="row ">
                {isUser && (
                  <h3 className="text-center">Benvingut/da, hacker!</h3>
                )}
              </div>
              <div className="row my-3">
                <div className="col-xxl-1 col-2 d-flex">
                  <h1 className="text-center m-auto">-</h1>
                </div>
                <h1 className="col-xxl-10 col-8">{hacker && hacker.name}</h1>
                <div className="col-xxl-1 col-2 d-flex">
                  <h1 className="text-center m-auto">-</h1>
                </div>
              </div>
              <div className="row">
                <span className="text-center">
                  Membre desde fa{" "}
                  {hacker ? generateMemberTime(hacker.created_at) : ""}
                </span>
              </div>
            </div>
            {/* QR Column */}
            <div className="col-12 col-xl-4 mx-auto text-dark">
              {isUser &&
                event &&
                event.accepted &&
                (hacker ? (
                  <div
                    className="container qr-container p-bg-primary p-2 text-center m-auto"
                    onClick={handleShowQR}
                  >
                    <div className="row">
                      <div className="col-6 my-auto col-xl-12">
                        Mostra el teu tiquet
                      </div>
                      <div className="col-6 col-xl-12 my-auto">
                        <img
                          style={{
                            aspectRatio: "1/1",
                            width: "70%",
                            fill: "black",
                            backgroundColor: "transparent",
                          }}
                          className="px-2 p-0 pt-xl-4 mx-auto my-auto"
                          src={qrIcon}
                          alt="codi qr"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <HSkeleton height={"100%"} />
                ))}
            </div>
          </div>

          {/* Accounts link */}
          {hacker && <LinkAccounts hacker={hacker} />}

          <div className="espaiEdit">
            <div className="ajustarEdit">
              {hacker && <EditProfile hacker={hacker} />}
            </div>
          </div>

          {isUser && (
            <div className="ordenar-horitzontal">
              <Join event={event} />
            </div>
          )}

          {event && event.registered && <Team team={team} is_user={isUser} />}

          {/* Calendar and Achievements */}
          <div className="row m-5 gy-5 bottom-container text-center m-auto">
            {/* <div className="col-12 col-xl-6">
              <Medals />
            </div> */}
            {/* <div className="col-12 col-xl-12 d-flex justify-content-center">
              <div className="calendar-container mx-auto">
                <Calendar
                  value={[startDate, endDate]}
                  locale={"ca"}
                  minDetail={"month"}
                />
              </div>
            </div> */}
          </div>
          <br />
        </div>
      </div>

      <Modal show={showQR} onHide={handleCloseQR} centered>
        <QrCode url={qrCode} />
      </Modal>
    </>
  );
};

export default ProfileComponent;
