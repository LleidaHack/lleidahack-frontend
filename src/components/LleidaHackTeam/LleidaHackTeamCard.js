import React from 'react';
import "./teamcard.css";

const LleidaHackTeamCard = ({member}) => {
    console.log(member.name);
  return (
    <div className='MemberCard'>
        <img src={member.img} alt={member.name} className='MemberCard_img' />
        <h2 className='MemberCard_name'>{member.name}</h2>
        <p className='MemberCard_rol'>{member.rol}</p>
    </div>
  )
}

export default LleidaHackTeamCard