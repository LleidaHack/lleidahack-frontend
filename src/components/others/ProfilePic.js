import React from "react";
import HSkeleton from "./HSkeleton";

const Profile_pfp = ({hacker}) => {
  return (<>
    {hacker ? (
        !(hacker.image === "string" || hacker.image === "") ? (
          <img
            style={{ width: "45%" }}
            className="bg-white border mx-auto rounded-circle m-auto"
            id="profile-image"
            src={hacker.image}
            alt=""
          />
        ) : (
          <i className="fa-solid fa-user fa-8x mx-auto" />
        )
      ) : (
        <HSkeleton height={"150px"} width={"150px"} circle={true} />
      )}
    </>); 
};

const Header_pfp = ({icon, validToken}) => {
    return (
        <>
        {validToken ? 
              <div className="profileImage2 d-flex">
                {icon !== "string" ? 
                  <img
                    className="Profile"
                    src={icon}
                    alt="foto de perfil"
                  />
                 : 
                  <i className="fa-solid fa-user m-auto" />
                }
              </div>
            : 
              <i className="fa-solid fa-user" />
            }
        </>   
    ); 
  };

const ProfilePic = ({hacker, icon, is_profile, is_header, validToken}) => {
    return (
        <>
            {is_profile ? 
                <Profile_pfp hacker={hacker}/>
            : is_header ?
                <Header_pfp icon={icon} validToken={validToken}/>
            : <></>
            }
        </>
    );
};

export default ProfilePic;
