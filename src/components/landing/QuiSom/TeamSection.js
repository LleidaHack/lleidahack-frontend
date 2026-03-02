import React from "react";
import MemberCard from "src/components/landing/ImageCards/MemberCard";

const TeamSection = () => {
  const teamData = {
    junta: [
      {
        name: "Pol Llinàs",
        role: "President",
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/pol-llinas-vaquer/",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQEt3ZMvju9FhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728896614919?e=1772064000&v=beta&t=NRAd4m3U9pctJkS0XnkEh53tq0y8rAlTCeawPnJmfHY",
      },
      {
        name: "Naïm Saadi Gallego",
        role: "Secretari",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Arnau Vernet Grifoll",
        role: "Tresorer",
        github: "#",
        linkedin: "#",
        photo: "",
      },
    ],
    caps: [
      {
        name: "Enric Eroles",
        role: "Cap de Logística",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Miriam Rodríguez",
        role: "Cap de Marketing",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Joel Ros Peropadre",
        role: "Cap de Tecnologia",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Oriol Agost Batalla",
        role: "Cap de Patrocini",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Ferran López Sierra",
        role: "Cap de Webmaster",
        github: "#",
        linkedin: "#",
        photo: "",
      },
    ],
    membres: [
      {
        name: "Nataly Jaya Salazar",
        role: "Membre de Marketing",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Nataly Jaya Salazar",
        role: "Membre de Marketing",
        github: "#",
        linkedin: "#",
        photo: "",
      },
      {
        name: "Nataly Jaya Salazar",
        role: "Membre de Marketing",
        github: "#",
        linkedin: "#",
        photo: "",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-20">
      {/* 1. LÍNIA TARONJA DE SEPARACIÓ */}
      <div className="flex justify-center mt-10">
        <div className="h-1.5 w-1/2 bg-orange-500 rounded-full"></div>
      </div>

      {/* SECCIÓ JUNTA */}
      <section className="mx-36">
        <h2 className="text-7xl font-mono font-black text-center mb-24 tracking-tighter uppercase">
          Junta
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {teamData.junta.map((m, i) => (
            <MemberCard key={i} {...m} bgColor="bg-orange-500" />
          ))}
        </div>
      </section>

      {/* SECCIÓ CAPS D'EQUIP */}
      <section className="mx-36">
        <h2 className="text-7xl font-mono font-black text-center mb-24 tracking-tighter uppercase">
          Caps d'Equip
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {teamData.caps.slice(0, 3).map((m, i) => (
            <MemberCard key={i} {...m} bgColor="bg-[#FFD1B9]" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamData.caps.slice(3).map((m, i) => (
            <MemberCard key={i} {...m} bgColor="bg-[#FFD1B9]" />
          ))}
        </div>
      </section>

      {/* SECCIÓ MEMBRES */}
      <section className="mx-36 relative pt-12 pb-32">
        <h2 className="text-7xl font-mono font-black text-center mb-24 tracking-tighter uppercase">
          Membres
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {teamData.membres.map((m, i) => (
            <MemberCard key={i} {...m} bgColor="bg-gray-400" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
