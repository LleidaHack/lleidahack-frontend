import React from "react";
import "../../../src/palette.css";

import userIcon from "../../icons/user2.png";
import qrIcon from "../../icons/qr.png";
import logo from "../../icons/logo.png";
import medal from "../../icons/medal_example.png"

import Calendar from "react-calendar/dist/umd/Calendar";

const Profile = () => {
  const name = "Nom cognom";
  const usrImage = userIcon;

  const yearsMember = "x";

  const startDate = new Date(2022, 10, 25);
  const endDate = new Date(2022, 10, 27);

  return (
    <div className="p-bg-black py-5 text-white">
      <div className="container-fluid container-xxl">
        {/* User info and qr */}
        <div className="row align-middle my-3">
          {/* User Image */}
          <div className="col-4 text-end">
            <img
              style={{ height: `150px` }}
              className="bg-white border rounded-circle m-auto float-end"
              src={usrImage}
            />
          </div>
          {/* Center Column */}
          <div className="col-4 px-0 text-center">
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
          <div className="col-4">
            <div
              style={{ width: `130px`, height: `150px` }}
              className="container p-bg-red p-2 text-center m-auto float-start"
            >
              <span>Mostra el teu tiquet</span>
              <img className="w-75 m-auto p-3" src={qrIcon} />
            </div>
          </div>
        </div>

        {/* Accounts link */}
        <div
          className="row p-bg-grey p-3 text-center m-auto mt-5"
          style={{ width: `35%` }}
        >
          <div className="col-sm-8 align-middle text-start m-auto pe-0">
            Vincula els teus <br /> comptes per la Hack!
          </div>
          <div className="col-sm-4 m-auto px-0">
            <i class="bi bi-github fa-3x me-3"></i>
            <i class="bi bi-linkedin fa-3x me-3"></i>
          </div>
        </div>

        {/* Join Box */}
        <div
          className="row p-bg-grey p-5 text-center m-auto mt-5"
          style={{ width: `35%` }}
        >
          <div className="col-12 p-bg-grey">
            <div className="row">
              <img className="p-5" src={logo} alt="" />
            </div>
            <div className="row text-center">
              <a
                href=""
                style={{ width: `fit-content`, textDecoration: `none` }}
                className="py-2 px-4 m-auto text-white p-bg-red"
              >
                Uneix-te
              </a>
            </div>
          </div>
        </div>

        {/* Calendar and Achievements */}
        <div className="row m-5 w-50 mt-5 text-center m-auto">
          <div className="col-6">
            <div className="container w-100 react-calendar p-4">
                <h2>Medalles</h2>
                <div className="container mt-2 text-center m-0">
                    <div className="row m-auto">
                        <div className="col-4 mt-2 text-center "><img className=" m-auto" src={medal} alt="" /></div>
                        <div className="col-4 mt-2 text-center "><img className=" m-auto" src={medal} alt="" /></div>
                        <div className="col-4 mt-2 text-center "><img className=" m-auto" src={medal} alt="" /></div>
                        <div className="col-4 mt-2 text-center "><img className=" m-auto" src={medal} alt="" /></div>
                        <div className="col-4 mt-2 text-center "><img className=" m-auto" src={medal} alt="" /></div>
                    </div>
                   
                    
                </div>
            </div>
          </div>
          <div className="col-6">
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
