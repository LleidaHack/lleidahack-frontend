import React from "react";
import Header from "src/components/lleidahacker/header/header";

import MemberGestor from "src/components/lleidahacker/memberGestor/MemberGestor";
import HackepsGestor from "src/components/lleidahacker/hackepsGestor/HackepsGestor";
import LogsLleidaHacker from "src/components/lleidahacker/logsLleidaHacker/LogsLleidaHacker";
import LogsWeb from "src/components/lleidahacker/logsWeb/LogsWeb";

const AdminPanelPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="header-events bg-background-patron px-10 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
        <div className="header-events__content ">
          <h1 className="header-events__title text-5xl">Admin Panel</h1>
        </div>
      </div>
      <div className="flex flex-col px-16 mt-5 gap-5">
        <MemberGestor />
        <HackepsGestor />
        <div className="flex flex-row gap-4 justify-center">
          <div>
            <LogsLleidaHacker />
          </div>
          <div>
            <LogsWeb />
          </div>
        </div>
      </div>

      {/* <h1 className='text-center text-5xl mt-5'>Accesos</h1>
        <div className='mt-5 border-3 rounded-lg mx-16 flex flex-row py-16 px-16 gap-5'>
            {grups.map((grup) => (
                <GrupsCardBox name={grup.name} role={grup.role} image={grup.image} bgcolor={grup.bgcolor} opacity={grup.opacity} drive={grup.github} whatsapp={grup.linkedIn}/>
            ))}
        </div> */}
    </div>
  );
};

export default AdminPanelPage;
