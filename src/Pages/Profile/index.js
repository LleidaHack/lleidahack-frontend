import React from "react";
import "../../../src/palette.css";

import "./main.css";

import userIcon from "../../icons/user2.png";
import qrIcon from "../../icons/qr.png";

import Calendar from "react-calendar/dist/umd/Calendar";
import Medals from "../../components/Profile/Medals";
import LinkAccounts from "../../components/Profile/LinkAccountsContainer";
import Join from "../../components/Profile/JoinContaienr";
import AnnouncementPanel from "../../components/Profile/AnnouncementPanel";

import Header from "../../components/Header/Header.js"
import { getUserById } from "../../services/UserService";

const Profile = () => {
  // TODO: When authentication done, change -1 to stored user id
  // const user = getUserById(?????);

  const user = { name: "Nom Cognoms Cognoms" }


  // TODO: You can get the image id of the user i dont know the endpoint to the images
  const usrImage = user.image_id ? null : userIcon;


  // TODO: Looking in the backend shemas, it does not appear to be a member since or anything
  const yearsMember = "x";

  const startDate = new Date(2022, 10, 25);
  const endDate = new Date(2022, 10, 27);

  return (
    <div className="p-bg-black py-5 mt-5 text-white">
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
              alt="Foto de perfil"
            />
          </div>
          {/* Center Column */}
          <div className="col-12 col-xl-4 px-0 my-3 text-center">
            <div className="row ">
              <h3 className="text-center">Benvingut/da, hacker!</h3>
            </div>
            <div className="row my-3">
              <h1 className="col-xxl-1 col-2 text-center">-</h1>
              <h1 className="col-xxl-10 col-8">{user.name}</h1>
              <h1 className="col-xxl-1 col-2 text-center">-</h1>
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
                <div className="col-6 col-sm-12 my-auto">
                  <img width="66px" className="m-auto px-2" src={qrIcon} alt="Icona QR" />
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

        {/* TODO: If admin show new announcement message */}
        <AnnouncementPanel></AnnouncementPanel>
      </div>

    </div>
  );
};

export default Profile;
