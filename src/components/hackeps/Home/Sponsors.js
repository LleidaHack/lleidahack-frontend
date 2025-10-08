import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Home/Sponsors.css";
import Button from "src/components/buttons/Button";
import LogoSponsors from "../Sponsors/LogoSponsors";

/*IMAGES IMPORTS*/
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import { getEventSponsors } from "src/services/EventService";
import { getCompanyByTier } from "src/services/CompanyService";

// Datos mock para pruebas sin backend

function redirectToURL(url) {
  if (!url) return;

  // Si la url es absoluta, ábrela directamente
  if (/^https?:\/\//i.test(url)) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  // Si ya empieza por "/hackeps/", no lo duplicamos
  let path = url.startsWith("/hackeps/")
    ? url
    : "/hackeps/" + url.replace(/^\/+/, ""); // Quita posibles barras iniciales

  // Construye la URL absoluta con el mismo dominio
  const absoluteUrl = `${window.location.origin}${path}`;
  window.open(absoluteUrl, "_blank", "noopener,noreferrer");
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

    setLoading(true);

    // Intentaremos un máximo de 2 veces (Intento 1 y un Reintento)
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        // 1. OBTENCIÓN DE DATOS COMPLETA
        const challengerData = await getCompanyByTier(2);
        const [tier1, tier3] = await Promise.all([
          getCompanyByTier(1),
          getCompanyByTier(3),
        ]);
        const sponsorsData = [tier1, tier3];

        // 2. COMPROBACIÓN
        const dataIsEmpty = challengerData.length === 0 || sponsorsData.every(group => group.length === 0);

        if (dataIsEmpty && attempt < 2) {
          console.warn(`Intento ${attempt} fallido. Reintentando...`);

          continue; 
        }

        // 3. ACTUALIZACIÓN DE ESTADO Y SALIDA
        setChallenger(challengerData || []);
        setSponsors(sponsorsData || []);
        
        if (dataIsEmpty && attempt === 2) {
          console.error("Los datos siguen vacíos tras el último reintento.");
        }
        
        setLoading(false);
        return; 

      } catch (error) {
        console.error("Error fetching data:", error);
        break; 
      }
    }
    setLoading(false);
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
