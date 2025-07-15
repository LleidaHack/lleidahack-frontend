import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Home/Sponsors.css";
import Button from "src/components/buttons/Button";
import LogoSponsors from "../Sponsors/LogoSponsors";

/*IMAGES IMPORTS*/
import useit from "src/icons/sponsors logos/1st/aww8G0J7_400x400.jpg";
import insdo from "src/icons/sponsors logos/1st/Logo INSDO_transparente.png";
import GFT from "src/icons/sponsors logos/1st/GFT_Logo_CMYK.jpg";
import eCityclic from "src/icons/sponsors logos/1st/Logo eCityclic OK.png";
import uniLleida from "src/icons/sponsors logos/1st/Logo_Universitat_de_Lleida.png";
import escolaPolitecnica from "src/icons/sponsors logos/1st/Logo-nou-eps.jpg";
import paeria from "src/icons/sponsors logos/1st/paeria_0.png";
/*----...---2nds--..-..-----*/
import Alter from "src/icons/sponsors logos/2nd/Alter Software.jpeg";
import actium from "src/icons/sponsors logos/2nd/logo-actium.jpg";
import VallCompanys from "src/icons/sponsors logos/2nd/Vall Companys.png";
import Cosantex from "src/icons/sponsors logos/2nd/logo-cosantex-com.jpg";
import intech3d from "src/icons/sponsors logos/2nd/intech3D_logo.png";
import alumni from "src/icons/sponsors logos/2nd/alumni.jpg";
import fruilar from "src/icons/sponsors logos/2nd/fruilar-gran-3.png";
import plusfresc from "src/icons/sponsors logos/2nd/plusfresc-logo.jpg";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

// Datos mock para pruebas sin backend
const mockSponsorsData = [
  // Tier 1 (Principales)
  [
    {
      id: 1,
      image: useit,
      importance: 1,
      url: "https://example.com",
      name: "UseIT",
    },
    {
      id: 2,
      image: insdo,
      importance: 1,
      url: "https://example.com",
      name: "INSDO",
    },
    {
      id: 3,
      image: GFT,
      importance: 1,
      url: "https://example.com",
      name: "GFT",
    },
    {
      id: 4,
      image: eCityclic,
      importance: 1,
      url: "https://example.com",
      name: "eCityclic",
    },
    {
      id: 5,
      image: uniLleida,
      importance: 1,
      url: "https://example.com",
      name: "Universitat de Lleida",
    },
    {
      id: 6,
      image: escolaPolitecnica,
      importance: 1,
      url: "https://example.com",
      name: "Escola Politècnica",
    },
    {
      id: 7,
      image: paeria,
      importance: 1,
      url: "https://example.com",
      name: "Paeria",
    },
  ],
  // Tier 2 (Secundarios)
  [
    {
      id: 8,
      image: Alter,
      importance: 2,
      url: "https://example.com",
      name: "Alter Software",
    },
    {
      id: 9,
      image: actium,
      importance: 2,
      url: "https://example.com",
      name: "Actium",
    },
    {
      id: 10,
      image: VallCompanys,
      importance: 2,
      url: "https://example.com",
      name: "Vall Companys",
    },
    {
      id: 11,
      image: Cosantex,
      importance: 2,
      url: "https://example.com",
      name: "Cosantex",
    },
    {
      id: 12,
      image: intech3d,
      importance: 2,
      url: "https://example.com",
      name: "Intech3D",
    },
    {
      id: 13,
      image: alumni,
      importance: 2,
      url: "https://example.com",
      name: "Alumni",
    },
    {
      id: 14,
      image: fruilar,
      importance: 2,
      url: "https://example.com",
      name: "Fruilar",
    },
    {
      id: 15,
      image: plusfresc,
      importance: 2,
      url: "https://example.com",
      name: "PlusFresc",
    },
  ],
  // Tier 3 (si tienes más sponsors)
  [],
];

function redirectToURL(url) {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

const Sponsors = () => {
  const [groups, setGroups] = useState([[], [], []]);

  useEffect(() => {
    // Simulamos la carga de datos sin backend
    const loadMockData = () => {
      try {
        // Usamos los datos mock directamente
        setGroups(mockSponsorsData);
      } catch (error) {
        console.log("Error cargando datos mock:", error);
      }
    };

    loadMockData();
  }, []);

  return (
    <div className="sponsors bg-secondaryHackeps">
      <div className="gostHunter" id="sponsors"></div>
      {/* Title and content for Partners */}
      <TitleGeneralized padTop="4" underline>
        Sponsors
      </TitleGeneralized>
      <p>Vols participar?</p>
      <p>No ho dubtis, contacta amb nosaltres!</p>
      <Link to={"/contacte"}>
        <Button primary lg>
          Contacta
        </Button>
      </Link>
      <section className="justify-center w-full">
        <div className="flex flex-col pt-8 gap-y-6 text-xs">
          {groups.map((group, tier) => (
            <div key={tier} className="flex flex-wrap justify-center gap-4 p-4">
              {group.map((company, index) => (
                <div
                  key={company.id || index}
                  className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-x-[3px] hover:-translate-y-[4px]"
                  onClick={() => redirectToURL(company.url)}
                >
                  <LogoSponsors
                    image={company.image}
                    name={company.name || `Empresa ${index + 1}`}
                    small={company.importance === 2}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <br />
    </div>
  );
};

export default Sponsors;
