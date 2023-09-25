import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "src/palette.css";
import "./Profile.css";
import Modal from "react-bootstrap/Modal";
import HSkeleton from "src/components/others/HSkeleton";

//import "./main.css"; // TODO: No existeix aquest fitxer

import qrIcon from "src/icons/qr.png";

import Calendar from "react-calendar/dist/umd/Calendar";
import Medals from "src/components/Medals/Medals";
import Team from "src/components/Team/Team";
import LinkAccounts from "src/components/LinkAccounts/LinkAccounts";
import Join from "src/components/Join/Join";
import QrCode from "src/components/Home/QrCode.js";
import { getHackerById, getHackerGroups } from "src/services/HackerService";
import { getHackerGroupMembers } from "src/services/HackerGroupService";

const Profile_component = () => {
  let { hacker_id } = useParams();
  const [isUser, setIsUser] = useState(
    hacker_id === localStorage.getItem("userID")
  );
  const startDate = new Date(2022, 10, 25);
  const endDate = new Date(2022, 10, 27);

  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  const [showQR, setShowQR] = useState(false);
  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);

  const [hacker, setHacker] = useState(null);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    if (process.env.REACT_APP_DEBUG === "true")
      console.log("hacker id:" + hacker_id);
    if (!hacker_id) {
      setIsUser(true);
      hacker_id = localStorage.getItem("userID");
    }
    getHackerById(hacker_id)
      .then(async (response) => {
        setHacker(response);
        const response_1 = await getHackerGroups(hacker_id);
        return response_1;
      })
      .then(async (response) => {
        if (response.length) setTeam(response[0]);
        console.log(team);
        return response.length
          ? await getHackerGroupMembers(response[0].id).then((response) => {
              return response;
            })
          : [];
      })
      .then((response) => {
        setTeam({
          ...team,
          members: response,
        });
      });
  }, []);

  function generateMemberTime(creationDate) {
    let first = new Date(creationDate);
    let now = Date.now();

    let seconds = (now - first) / 1000;
    let days = seconds / 60 / 60 / 24;

    if (days > 365) return `${~~(days / 365)} anys`;

    if (days > 30) return `${~~(days / 30)} mesos`;

    return `${~~days} dies`;
  }

  return (
    <>
      <div className="p-bg-black text-white">
        <div className="container-xxl pt-3">
          {/* User info and qr */}
          <div className="row align-middle mx-auto mb-3">
            {/* User Image */}
            <div className="col-12 col-xl-4 m-auto text-center">
              {hacker ? (
                <img
                  style={{ aspectRatio: "1/1", width: "15vh" }}
                  className="bg-white border rounded-circle m-auto"
                  src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
                />
              ) : (
                <HSkeleton height={"150px"} width={"150px"} circle={true} />
              )}
            </div>
            {/* Center Column */}
            <div className="col-12 col-xl-4 px-0 my-3 text-center">
              <div className="row ">
                <h3 className="text-center">Benvingut/da, hacker!</h3>
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
            <div className="col-12 col-xl-4 mx-auto">
              {hacker ? (
                <div
                  className="container qr-container p-bg-primary p-2 text-center m-auto"
                  onClick={handleShowQR}
                >
                  <div className="row">
                    <div className="col-6 my-auto col-sm-12">
                      Mostra el teu tiquet
                    </div>
                    <div className="col-6 col-sm-12 my-auto">
                      <img
                        style={{ aspectRatio: "1/1", width: "70%" }}
                        className="px-2 mx-auto my-auto"
                        src={qrIcon}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <HSkeleton height={"100%"} />
              )}
            </div>
          </div>

          {/* Accounts link */}
          <LinkAccounts />

          {isUser ? <Join /> : <></>}

          <Team team={team} is_user={isUser} has_team={Boolean(team)} />

          {/* Calendar and Achievements */}
          <div className="row m-5 gy-5 bottom-container text-center m-auto">
            {/* <div className="col-12 col-xl-6">
              <Medals />
            </div> */}
            <div className="col-12 col-xl-12 d-flex justify-content-center">
              <div className="calendar-container mx-auto">
                <Calendar
                  value={[startDate, endDate]}
                  locale={"ca"}
                  minDetail={"month"}
                />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      <Modal show={showQR} onHide={handleCloseQR} centered>
        <QrCode url="{hacker.qrCode}" />
      </Modal>
    </>
  );
};

export default Profile_component;
