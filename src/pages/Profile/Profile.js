import React from "react";
import "../../../src/palette.css";

import "./Profile.css";

import userIcon from "../../icons/user2.png";
import qrIcon from "../../icons/qr.png";

import Calendar from "react-calendar/dist/umd/Calendar";
import Medals from "../../components/Medals/Medals";
import LinkAccounts from "../../components/LinkAccounts/LinkAccounts";
import Join from "../../components/Join/Join";

import Header from "../../components/Header/Header.js"

import { getUserById } from "../../services/UserService";

const Profile = () => {


  let user = { name: "Nom Cognom Cognom" };
  getUserById(localStorage.getItem("userID")).then((data) => {
    if (!user.id) return

    user = data;
  });

  if (user);

  console.log(user);

  const usrImage = userIcon;

  const yearsMember = "x";

  const startDate = new Date(2023, 10, 25);
  const endDate = new Date(2023, 10, 27);

  return (
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
              alt="Imatge de perfil"
            />
          </div>
          {/* Center Column */}
          <div className="col-12 col-xl-4 px-0 my-3 text-center">
            <div className="row ">
              <h3 className="text-center">Benvingut/da, hacker!</h3>
            </div>
            <div className="row my-3">
              <div className="col-1 align-self-center"><h1 className="text-center m-auto">-</h1></div>
              <div className="col-10"><h1 className="text-center m-auto">{user.name}</h1></div>
              <div className="col-1 align-self-center"><h1 className="text-center m-auto">-</h1></div>
            </div>
            <div className="row">
              <span className="text-center">
                Membre desde fa {yearsMember} anys
              </span>
            </div>
          </div>
          {/* QR Column */}
          <div className="col-12 col-xl-4 mx-auto">
            <div className="container qr-container p-bg-red p-2 text-center m-auto">
              <div className="row">
                <div className="col-6 my-auto col-sm-12">
                  Mostra el teu tiquet
                </div>
                <div className="col-6 col-sm-12">
                  <img width="66px" className="m-auto px-2" src={qrIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounts link */}
        <LinkAccounts />

        {/* Join Box */}
        <Join />

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
  );
};

export default Profile;
