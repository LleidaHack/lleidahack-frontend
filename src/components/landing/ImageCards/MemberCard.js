import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MemberCard = ({ name, role, bgColor, github, linkedin, photo }) => {
  return (
    <div className={`${bgColor} py-10 px-8 rounded-xl flex flex-col items-center text-center shadow-md font-mono h-full w-full max-w-[350px] mx-auto transition-all duration-300 hover:shadow-xl`}>
      
      <div className="w-44 h-44 bg-white rounded-full mb-6 overflow-hidden shadow-md flex items-center justify-center border-4 border-white/30">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <h3 className="font-bold text-2xl leading-tight mb-3 uppercase tracking-tighter">
          {name}
        </h3>
        <p className="text-base mb-6 text-gray-800 uppercase font-black opacity-90 tracking-wide">{role}</p>
      </div>
      
      <div className="flex gap-6 mt-auto pt-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-black">
          <FaGithub size={32} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-black">
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;