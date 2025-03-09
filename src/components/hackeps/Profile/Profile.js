import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "src/palette.css";
import "./Profile.css";
import Modal from "react-bootstrap/Modal";
import HSkeleton from "src/components/hackeps/LoadingSkeleton/HSkeleton";
import { getHackerById, getHackerGroups } from "src/services/HackerService";
import {
  getHackeps,
  getEventIsHackerRegistered,
  getEventIsHackerAccepted,
  getEventHasHackerConfirmed,
} from "src/services/EventService";
import { getUserById } from "src/services/UserService";
import EditProfile from "./EditProfile";
import qrIcon from "src/icons/qr.png";

//import Medals from "src/components/Medals/Medals";
//import Calendar from "react-calendar/dist/umd/Calendar";
import Team from "src/components/hackeps/Team/Team";
import LinkAccounts from "src/components/hackeps/LinkAccounts/LinkAccounts";
import Join from "src/components/hackeps/Join/Join";
import QrCode from "src/components/hackeps/QrCode/QrCode.js";
import { getHackerGroupById } from "src/services/HackerGroupService";
import UserNotFound from "./UserNotFound";
import ProfilePic from "../ProfilePic/ProfilePic";
import Button from "src/components/buttons/Button";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const ProfileComponent = () => {
  let { hacker_id } = useParams();
  const [isUser, setIsUser] = useState(
    hacker_id === localStorage.getItem("userID"),
  );
  const [isHacker, setIsHacker] = useState(false);

  const [showQR, setShowQR] = useState(false);
  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);

  const [user, setUser] = useState(null);
  const [team, setTeam] = useState(null);
  const [event, setEvent] = useState(null);
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkIsHacker = (userCheck) => {
    return userCheck?.type === "hacker";
  };

  const checkIsLleidaHacker = () => {
    return user?.type === "lleida_hacker";
  };

  useEffect(() => {
    let event_id;
    getHackeps().then((response) => {
      event_id = response.id;
      let is_open = response.is_open;
      getEventIsHackerAccepted(event_id, hacker_id).then((response) => {
        if (response) {
          getEventHasHackerConfirmed(event_id, hacker_id).then((response) => {
            if (response) {
              setEvent({
                is_open: is_open,
                event_id: event_id,
                accepted: true,
                registered: true,
                confirmed: true,
              });
            } else {
              setEvent({
                is_open: is_open,
                event_id: event_id,
                accepted: true,
                registered: true,
                confirmed: false,
              });
            }
          });
        } else {
          getEventIsHackerRegistered(event_id, hacker_id).then((response) => {
            if (response) {
              setEvent({
                is_open: is_open,
                event_id: event_id,
                accepted: false,
                registered: true,
                confirmed: false,
              });
            } else {
              setEvent({
                is_open: is_open,
                event_id: event_id,
                accepted: false,
                registered: false,
                confirmed: false,
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
    getUserById(hacker_id).then(async (response) => {
      setUser(await response);
      setIsHacker(checkIsHacker(response));
    });
    if (isHacker) {
      getHackerById(hacker_id).then(async (response) => {
        setUser(await response);
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
    }
  }, [useParams(), isHacker]);

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
  if (user) if (user.errCode === 404) return <UserNotFound />;

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
                hacker={user}
                size="big"
                bgcolor="white"
                border={true}
                is_profile={true}
              />
              <br />
              <br />
              {isUser && (
                <Link to="/home" className="logOut" onClick={logOut}>
                  <Button secondary outline>
                    <i className="fas fa-sign-out"></i> Tancar sessió
                  </Button>
                </Link>
              )}
            </div>

            {/* Center Column */}
            <div className="col-12 col-xl-4 px-0 my-3 text-center">
              <div className="row ">
                {isUser && (
                  <h3 className="text-textSecondaryHackeps text-center underline decoration-primaryHackeps underline-offset-[5px] decoration-[5px] rounded pb-4">
                    Benvingut/da, hacker!
                  </h3>
                )}
              </div>
              <div className="row my-3">
                <div className="col-xxl-1 col-2 d-flex">
                  <TitleGeneralized className="m-auto" normal>
                    -
                  </TitleGeneralized>
                </div>
                <TitleGeneralized className="col-xxl-10 col-8" normal>
                  {user && user.name}
                </TitleGeneralized>
                <div className="col-xxl-1 col-2 d-flex">
                  <TitleGeneralized className="m-auto" normal>
                    -
                  </TitleGeneralized>
                </div>
              </div>
              <div className="row">
                <span className="text-center text-textSecondaryHackeps">
                  Membre desde fa{" "}
                  {user ? generateMemberTime(user.created_at) : ""}
                </span>
              </div>
            </div>
            {/* QR Column */}
            <div className="col-12 col-xl-4 mx-auto text-textSecondaryHackeps">
              {isUser &&
                event &&
                event.accepted &&
                (user ? (
                  <div
                    className="container qr-container text-textPrimaryHackeps p-bg-primary p-2 text-center m-auto"
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
          {user && (
            <>
              <LinkAccounts hacker={user} />
              <br />
            </>
          )}

          {isUser && (
            <div className="editSpace">
              <div className="editAjust">
                {user && <EditProfile hackerObj={user} />}
              </div>
            </div>
          )}

          {isHacker && (
            <div className="sort-horizontally">
              <Join event={event} />
            </div>
          )}

          {event && event.registered && isHacker && (
            <Team team={team} is_user={isUser} />
          )}

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
