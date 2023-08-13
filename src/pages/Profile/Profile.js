import React from "react";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "src/palette.css";
import Modal from 'react-bootstrap/Modal';

//import "./main.css"; // TODO: No existeix aquest fitxer

import userIcon from "src/icons/user2.png";
import qrIcon from "src/icons/qr.png";

import Calendar from "react-calendar/dist/umd/Calendar";
import Medals from "src/components/Medals/Medals";
import Team from "src/components/Team/Team";
import LinkAccounts from "src/components/LinkAccounts/LinkAccounts";
import Join from "src/components/Join/Join";
import QrCode from 'src/components/Home/QrCode.js';
import Header from "src/components/Header/Header.js"

const Profile = () => {
  const { id } = useParams();

  const name = "Nom cognom";
  const usrImage = userIcon;

  const yearsMember = "x";

  const startDate = new Date(2022, 10, 25);
  const endDate = new Date(2022, 10, 27);

  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const handleShowQR = () => setShowQR(true);
  const handleCloseQR = () => setShowQR(false);

  const members = [{"name": "AAA", "imageUrl": "aa", "profileLink": "bb"},
  {"name": "AAA", "imageUrl": "aa", "profileLink": "bb"},
  {"name": "AAA", "imageUrl": "aa", "profileLink": "bb"},
  {"name": "AAA", "imageUrl": "aa", "profileLink": "bb"},
  {"name": "AAA", "imageUrl": "aa", "profileLink": "bb"},
  {"name": "AAA", "imageUrl": "aa", "profileLink": "bb"},
  {"name": "AAA", "imageUrl": "aa", "profileLink": "bb"}]

  console.log(id);

  return (
    <>
    <div className="p-bg-black py-5 text-white">
      <Header />
      <div className="container-fluid container-xxl">
        {/* User info and qr */}
        <div className="row align-middle mx-auto my-3">
          {/* User Image */}
          <div className="col-12 col-xl-4 m-auto text-center">
            <img
              style={{ height: `150px` }}
              className="bg-white border rounded-circle m-auto"
              src={usrImage}
            />
          </div>
          {/* Center Column */}
          <div className="col-12 col-xl-4 px-0 my-3 text-center">
            <div className="row ">
              <h3 className="text-center">Benvingut/da, hacker!</h3>
            </div>
            <div className="row my-3">
              <h1>- {name} -</h1>
            </div>
            <div className="row">
              <span className="text-center">
                Membre desde fa {yearsMember} anys
              </span>
            </div>
          </div>
          {/* QR Column */}
          <div className="col-12 col-xl-4 mx-auto">
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

          </div>
        </div>

        {/* Accounts link */}
        <LinkAccounts/>

        {/* Join Box */}
        <Join/>

        <Team teamName={"Team test"} teamCode={"123456"} members={members} />

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
      <QrCode url="www.google.com" />
    </Modal>
    </>
  );
};

export default Profile;
