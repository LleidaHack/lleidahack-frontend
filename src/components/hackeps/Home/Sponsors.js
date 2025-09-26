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
import { getEventSponsors } from "src/services/EventService";
import { getCompanyByTier } from "src/services/CompanyService";

// Datos mock para pruebas sin backend

function redirectToURL(url) {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

const Sponsors = () => {
  const [challenger, setChallenger] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const event = localStorage.getItem("event");
    async function fetchData() {
      if (!event) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const challengerData = await getCompanyByTier(2);
        const sponsorsData = [
          await getCompanyByTier(1),
          await getCompanyByTier(3),
        ];

        setChallenger(challengerData || []);
        setSponsors(sponsorsData || []);
      } catch (error) {
        console.error("Error fetching sponsors data:", error);
        setChallenger([]);
        setSponsors([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="sponsors bg-secondaryHackeps">
      <div className="gostHunter" id="sponsors"></div>
      {/* Title and content for Partners */}
      <TitleGeneralized
        padTop="0"
        underline
        textNone
        className="text-primaryHackeps font-semibold pl-2"
      >
        Sponsors
      </TitleGeneralized>
      <div>
        <section className="justify-center w-full">
          <TitleGeneralized
            textNone
            className="text-primaryHackeps font-semibold text-left"
          >
            Reptes Proposats per...
          </TitleGeneralized>
          <p className="mt-4 mb-8 max-w-2xl mx-auto text-base text-gray-600">
            Descobreix els reptes tècnics i creatius que les següents empreses
            han proposat per a la nostra hackathon.
          </p>
          <div className="flex flex-col pt-8 gap-y-6 text-xs">
            <div className="flex flex-wrap justify-center gap-4 p-4">
              {loading ? (
                <div className="text-center text-gray-500 py-8">
                  Carregant reptes de sponsors...
                </div>
              ) : challenger.length > 0 ? (
                challenger.map((company, index) => (
                  <div
                    key={company.id || index}
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-x-[3px] hover:-translate-y-[4px]"
                    onClick={() => redirectToURL(`sponsors/${company.id}`)}
                  >
                    <LogoSponsors
                      image={company.image}
                      name={company.name || `Empresa ${index + 1}`}
                      small={false}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  No hi ha reptes disponibles actualment.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="justify-center w-full">
          <TitleGeneralized
            textNone
            className="text-primaryHackeps font-semibold text-left"
          >
            Amb la col·laboració de...
          </TitleGeneralized>
          <p className="mt-4 mb-8 max-w-2xl mx-auto text-base text-gray-600">
            Volem agrair especialment a les empreses que han col·laborat amb
            nosaltres per fer possible aquest esdeveniment.
          </p>
          <div className="flex flex-col pt-8 gap-y-6 text-xs">
            {loading ? (
              <div className="text-center text-gray-500 py-8">
                Carregant sponsors...
              </div>
            ) : sponsors.some((group) => group.length > 0) ? (
              sponsors.map((group, tier) => (
                <div
                  key={tier}
                  className="flex flex-wrap justify-center gap-4 p-4"
                >
                  {group.map((company, index) => (
                    <div
                      key={company.id || index}
                      className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-x-[3px] hover:-translate-y-[4px]"
                      onClick={() => redirectToURL(`sponsors/${company.id}`)}
                    >
                      <LogoSponsors
                        image={company.image}
                        name={company.name || `Empresa ${index + 1}`}
                        small={company.tier === 3}
                      />
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                No hi ha sponsors disponibles actualment.
              </div>
            )}
          </div>
        </section>
      </div>

      <p>
        T'agradaria ser un dels nostres col·laboradors o presentar un repte?
      </p>
      <p>No ho dubtis, contacta amb nosaltres!</p>
      <Link to={"/contacte"}>
        <Button className="bg-secondaryColorButton text-white border-none" lg>
          Contacta
        </Button>
      </Link>

      <br />
    </div>
  );
};

export default Sponsors;
