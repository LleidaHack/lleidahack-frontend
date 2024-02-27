import React from "react";
import HSkeleton from "../others/HSkeleton";
import "./ProfilePic.css";

const ProfilePfp = ({ hacker, defaultColor, bgcolor, is_team, border }) => {
  return (
    <>
      {!(hacker.image === "string" || hacker.image === "") ? (
        <img
          id={is_team ? null : "profile-image"}
          className={`
            bg-${bgcolor} 
            ${border ? "border" : ""} 
            ${is_team ? "team-member-image" : "profilePfpStyle"}
          `}
          src={hacker.image}
          alt=""
        />
      ) : (
        <i
          className={`fa-solid fa-user fa-8x mx-auto ${defaultColor}DefaultPfpFill`}
        />
      )}
    </>
  );
};

const HeaderPfp = ({ icon, validToken }) => {
  return (
    <>
      {validToken ? (
        icon !== "string" ? (
          <img className="Profile profileImage2 d-flex" src={icon} alt="" />
        ) : (
          <i className="fa-solid fa-user m-auto profileImage2 d-flex" />
        )
      ) : (
        <i className="fa-solid fa-user" />
      )}
    </>
  );
};

const ProfilePic = ({
  hacker = { image: "" },
  icon,
  validToken,
  size = "big",
  bgcolor = "white",
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
      ) : size === "big" ? (
        <HSkeleton height={"150px"} width={"150px"} circle={true} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfilePic;
