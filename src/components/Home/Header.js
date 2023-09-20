import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import userlog from "src/icons/user.png";
import llhlogo1 from "src/icons/llhlogow.png";
import "src/components/Home/Header.css";
export function Header({ inside, outsides }) {
  return (
    <div id="theBoxNav">
      <div id="navmobile" className="fadable">
        <div id="top">
          <button className="togglet" onClick={() => StatNav(false)}>
            <i className="fa-solid fa-xmark"/>
          </button>
          <LinkR to="/" id="loglnk">
            <img id="userimage" src={userlog}/>{" "}
          </LinkR>
        </div>
        <div id="content">
          <ul id="nostyle">
            {inside.map((item, index) => (
              <li key={index}>
                <LinkS to="{item.url}" key={index}>
                  {item.name}
                </LinkS>
              </li>
            ))}

            {outsides.map((outside, index) => (
              <li key={index}>
                <LinkR to="{outside.url}" key={index}>
                  {outside.name}
                </LinkR>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav id="navegador">
        <ul className="navlink" id="barsbtn">
          <li>
            <button className="toggle">
              <i className="fas fa-bars" onClick={() => StatNav(true)}/>
            </button>
          </li>
        </ul>

        <ul className="navlink" id="icon1nav">
          <li>
            <LinkR to="/" id="logoLink">
              <img id="llhlogo" src={llhlogo1}/>{" "}
            </LinkR>
          </li>
        </ul>

        <ul className="navlink" id="icon2nav">
          <li>
            <LinkR to="/" id="loglnk">
              <img id="userimage" src={userlog}/>{" "}
            </LinkR>
          </li>
        </ul>

        <ul className="navlink" id="firstnavlink">
          <div id="pepe">
            <li>
              {inside.map((item, index) => (
                <LinkS to="{item.url}" key={index}>
                  {item.name}
                </LinkS>
              ))}

              {outsides.map((outside, index) => (
                <LinkR to="{outside.url}" key={index}>
                  {outside.name}
                </LinkR>
              ))}
            </li>
          </div>
        </ul>
      </nav>
      <div id="semicircle">
        <LinkR to="/" id="logoLink2">
          <img id="llhlogo" src={llhlogo1}/>{" "}
        </LinkR>
      </div>
    </div>
  );
}

function StatNav(val) {
  console.log("ñeñe");
  const menu = document.getElementById("navegador");
  const mobileDiv = document.getElementById("navmobile");
  const circle = document.getElementById("semicircle");

  if (val) {
    menu.style.display = "none";

    mobileDiv.className = "fade-in";

    circle.style.display = "none";
  } else {
    menu.style.display = "block";
    mobileDiv.className = "fadable";
    circle.style.display = "block";
  }
}
