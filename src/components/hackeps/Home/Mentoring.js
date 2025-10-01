import React from "react";
import { Link } from "react-router-dom";
import MentorImage from "src/assets/Mentor.png";
import TimonImage from "src/assets/TIMON.png";
import Button from "src/components/buttons/Button";
import TitleGeneralized from "src/components/hackeps/TitleGeneralized/TitleGeneralized";

const Mentoring = () => {
  return (
    <section className="px-6 md:px-16 pb-32 pt-5 bg-secondaryHackeps">
      <div className="container mx-auto mb-20 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 pr-0 md:pr-20 items-center">
          {/* Columna izquierda - Texto (más ancha) */}
          <div className="lg:col-span-3 space-y-6 pr-0 md:pr-20">
            <TitleGeneralized
              padTop="0"
              underline
              alignText="center"
              textNone
              className="text-primaryHackeps font-semibold"
            >
              Vols postular com a mentor?
            </TitleGeneralized>

            <div className="space-y-4 text-grayStrongHackeps leading-relaxed text-left md:text-base text-sm text-justify">
              <p>
                A la nostra hackató, els mentors són el motor de la creativitat
                i el creixement. Són les persones que, amb la seva experiència i
                coneixements, ajuden els participants a trobar el camí correcte
                i a fer realitat els seus projectes més ambiciosos.
              </p>
              <p>
                Si et consideres una persona proactiva i t'agrada acompanyar els
                altres en els seus reptes, et convidem a formar part de la
                nostra comunitat de mentors. No es tracta només d'oferir
                solucions, sinó de fer les <b>preguntes adequades</b> i ajudar
                els equips a descobrir el seu propi potencial.
              </p>
              <p>El teu rol serà fonamental per:</p>
              <ul>
                <li>
                  <b>Inspirar:</b> Serveix de guia i motivació per als equips.
                </li>
                <li>
                  <b>Guiar:</b> Ajuda a organitzar les idees i a trobar
                  solucions a problemes tècnics o de disseny.
                </li>
                <li>
                  <b>Connectar:</b> Crea sinergies entre participants i fomenta
                  un ambient de col·laboració.
                </li>
              </ul>
              <p>
                Si estàs preparat per a una experiència enriquidora on podràs
                donar i rebre coneixement, t'esperem!
              </p>
              <p>
                <strong>
                  [Contacta'ns i explica'ns per què vols ser mentor]
                </strong>
              </p>
            </div>
          </div>

          {/* Columna central - Timón (oculto en móvil) */}
          <div className="w-72 opacity-90 lg:col-span-1 hidden lg:flex items-center justify-center lg:mr-56">
            <img
              src={TimonImage}
              alt="TIMON decorativo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Columna derecha - Mentor e imagen */}
          <div className="lg:col-span-1 flex flex-col items-center space-y-8 lg:ml-64">
            {/* Imagen de mentor */}
            <div className="md:mt-0 mt-5 w-36 md:w-48 flex items-center justify-center">
              <img
                src={MentorImage}
                alt="Mentor ilustración"
                className="w-full h-full object-contain"
              />
            </div>

            <Link to={"/contacte-mentor"}>
              <Button
                className="bg-secondaryColorButton text-white border-none"
                lg
              >
                Contacta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentoring;