import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "src/palette.css";
import Modal from 'react-bootstrap/Modal';
import HSkeleton from 'src/components/others/HSkeleton';

//import "./main.css"; // TODO: No existeix aquest fitxer

import userIcon from "src/icons/user2.png";
import qrIcon from "src/icons/qr.png";

import Calendar from "react-calendar/dist/umd/Calendar";
import Medals from "src/components/Medals/Medals";
import Team from "src/components/Team/Team";
import LinkAccounts from "src/components/LinkAccounts/LinkAccounts";
import Join from "src/components/Join/Join";
import QrCode from 'src/components/Home/QrCode.js';
import Header from "src/components/Header/Header.js";
import { getHackerById } from "src/services/HackerService";

const Profile = () => {
  const { hacker_id } = useParams();

  const name = "Nom cognom";
  const usrImage = userIcon;

  const yearsMember = "x";

  const startDate = new Date(2022, 10, 25);
  const endDate = new Date(2022, 10, 27);

  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);

  const [hacker, setHacker] = useState(null)
  const [team, setTeam] = useState(null)

  function loadHacker() {
    console.log(hacker_id);
    getHackerById(hacker_id).then((response) => {
      setHacker(response);
      return response;
    }).then((response) => {
      let fetched_team = {teamName: "Team name", teamCode: "123456", members: []}
      let num_members = 6;
      for(let i=0; i<num_members; i++) {
        fetched_team.members.push({"name": "AAA", "imageUrl": "aa", "profileLink": "bb"});
      }
      setTeam(fetched_team);
    })
  }

  useEffect(() => {
    console.log(hacker_id);
    getHackerById(hacker_id).then((response) => {
      setHacker(response);
      return response;
    }).then((response) => {
      let fetched_team = {teamName: "Team name", teamCode: "123456", members: []}
      let num_members = 6;
      for(let i=0; i<num_members; i++) {
        fetched_team.members.push({"name": "AAA", "imageUrl": "aa", "profileLink": i});
      }
      setTeam(fetched_team);
      //setTeam({'id': null});
    })
  }, []);

  return (
    <>
    <div className="p-bg-black text-white">
      <Header />
      <div className="container-fluid container-xxl">
        {/* User info and qr */}
        <div className="row align-middle mx-auto my-3">
          {/* User Image */}
          <div className="col-12 col-xl-4 m-auto text-center">
            { hacker ? 
                <img
                style={{ height: `150px` }}
                className="bg-white border rounded-circle m-auto"
                src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
              />
              : <HSkeleton height={'150px'} width={'150px'} circle={true} />
             }
          </div>
          {/* Center Column */}
          <div className="col-12 col-xl-4 px-0 my-3 text-center">
            <div className="row ">
              <h3 className="text-center">Benvingut/da, hacker!</h3>
            </div>
            <div className="row my-3">
              <h1>- {hacker ? hacker.name : <HSkeleton width={"50%"} inline />} -</h1>
            </div>
            <div className="row">
              <span className="text-center">
                Membre desde fa {hacker ? "PENDENT" : <HSkeleton width={"5%"} inline />} anys
              </span>
            </div>
          </div>
          {/* QR Column */}
          <div className="col-12 col-xl-4 mx-auto">
          { hacker ?
          <a href="#" onClick={handleShowQR}>
            <div className="container qr-container p-bg-primary p-2 text-center m-auto">
              <div className="row">
                  <div className="col-6 my-auto col-sm-12">
                    Mostra el teu tiquet
                  </div>
                  <div className="col-6 col-sm-12">
                    <img width="66px" className="m-auto px-2" src={qrIcon} />
                  </div>
              </div>
            </div>
            </a>
          : <HSkeleton height={"100%"} />
          }
          </div>
        </div>

        {/* Accounts link */}
        <LinkAccounts/>

        {/* Join Box */}
        <Join/>

        { team ? <Team team={team} /> : <></> }

        {/* Calendar and Achievements */}
        <div className="row m-5 gy-5 bottom-container text-center m-auto">
          <div className="col-12 col-xl-6">
            <Medals />
          </div>
          <div className="col-12 col-xl-6">
            <div className="calendar-container">
              <Calendar
                value={[startDate, endDate]}
                locale={"ca"}
                minDetail={"month"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal show={showQR} onHide={handleCloseQR} centered>
      <QrCode url="{hacker.qrCode}" />
    </Modal>
    </>
  );
};

export default Profile;
