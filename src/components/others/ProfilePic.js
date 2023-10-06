import React from "react";
import HSkeleton from "./HSkeleton";

const Profile_pfp = ({hacker}) => {
  return (<>
    {hacker ? (
        !(hacker.image === "string" || hacker.image === "") ? (
          <img
            style={{ width: "45%", aspectRatio:"1/1"}}
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
            {validToken ? icon !== "string" ? 
                  <img
                    className="Profile profileImage2 d-flex"
                    src={icon}
                    alt=""
                  />
                 : 
                  <i className="fa-solid fa-user m-auto profileImage2 d-flex" />
            : 
              <i className="fa-solid fa-user" />
            }
        </>   
    ); 
};

const Team_pfp = ({member}) => {
    return(<>
    {!(member.image === "string" || member.image === "") ? 
        <img
          className="team-member-image bg-black"
          src={member.image}
          alt=""
        />
     : 
        <i
          className="fa-solid fa-user fa-8x mx-auto"
          style={{ color: "#444" }}
        />
    }</>);
};

const ProfilePic = ({hacker={image:""}, icon, is_profile=false, is_header=false, validToken}) => {
    return (
        <>
            {is_profile ? 
                <Profile_pfp hacker={hacker}/>
            : is_header ?
                <Header_pfp icon={icon} validToken={validToken}/>
            : <Team_pfp member={hacker}/>
            }
        </>
    );
};

export default ProfilePic;
