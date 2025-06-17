import React from "react";
import HSkeleton from "../LoadingSkeleton/HSkeleton";
import def from "src/imgs/default.png";

function is_not_empty(icon) {
  return !(icon === "string" || icon === "");
}

const StandardPfp = ({ hacker, bgcolor, extra_id, border, is_profile }) => {
  return (
    <>
      {is_not_empty(hacker.image) ? (
        <img
          id={extra_id}
          className={`${bgcolor ? `bg-${bgcolor}` : ""} ${
            border ? "border " : ""
          }${is_profile ? "rounded-full w-5/12 mx-auto aspect-square" : "team-member-image"} object-cover`}
          src={hacker.image}
          alt=""
          style={{ objectFit: "cover", display: "block" }}
        />
      ) : (
        <img
          id={extra_id}
          className={`${bgcolor ? `bg-white` : ""} ${
            border ? "border " : ""
          }${is_profile ? "rounded-full w-5/12 mx-auto aspect-square" : "team-member-image"}`}
          src={def}
          alt=""
          style={{ objectFit: "cover", display: "block" }}
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
  id,
  border = false,
  is_profile = false,
}) => {
  return (
    <>
      {hacker ? (
        size === "big" ? (
          <StandardPfp
            extra_id={id}
            hacker={hacker}
            bgcolor={bgcolor}
            border={border}
            is_profile={is_profile}
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
