import React from "react";
import HSkeleton from "../others/HSkeleton";
import "./ProfilePic.css";

function is_not_empty(icon) {
  return !(icon === "string" || icon === "");
}

const ProfilePfp = ({ hacker, defaultColor, bgcolor, is_team, border }) => {
  return (
    <>
      {is_not_empty(hacker.image) ? (
        <img
          id={is_team ? null : "profile-image"}
          className={`${bgcolor ? `bg-${bgcolor}` : ""} ${
            border ? "border " : ""
          }${is_team ? "team-member-image" : "profilePfpStyle"}`}
          src={hacker.image}
          alt=""
        />
      ) : (
        <i
          className={`fa-user fa-solid fa-8x mx-auto ${defaultColor}DefaultPfpFill`}
        />
      )}
    </>
  );
};

const HeaderPfp = ({ icon, validToken }) => {
  return (
    <>
      {validToken && is_not_empty(icon) ? (
        <img className="Profile profileImage d-flex" src={icon} alt="" />
      ) : (
        <i
          className={`fa-user fa-solid d-flex ${
            validToken ? "profileImage" : ""
          }`}
        />
      )}
    </>
  );
};

const ProfilePic = ({
  hacker = { image: "" },
  icon,
  validToken,
  size = "big",
  bgcolor,
  teamMembers,
  defaultColor = "white",
  border = false,
}) => {
  return (
    <>
      {hacker ? (
        size === "big" ? (
          <ProfilePfp
            is_team={teamMembers}
            hacker={hacker}
            defaultColor={defaultColor}
            bgcolor={bgcolor}
            border={border}
          />
        ) : size === "small" ? (
          <HeaderPfp icon={icon} validToken={validToken} />
        ) : (
          <></>
        )
      ) : (
        <HSkeleton height={"150px"} width={"150px"} circle={true} />
      )}
    </>
  );
};

export default ProfilePic;
