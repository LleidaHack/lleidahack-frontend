import React from 'react';
import "./teamcard.css";
import image from "src/icons/sponsors logos/1st/logo_EURECAT.png"

const LleidaHackTeamCard = ({member}) => {
  return (
    <div className='MemberCard'>
        <img src={image} alt={member.name} className='MemberCard_img' />
        <h2 className='MemberCard_name'>{member.name}</h2>
        <p className='MemberCard_rol'>{member.rol}</p>
    </div>
  )
}

export default LleidaHackTeamCard