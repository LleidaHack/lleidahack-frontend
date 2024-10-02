import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Home/Sponsors.css";
import { getAllCompanies, getCompanyByTier } from "src/services/CompanyService";
import Button from "src/components/buttons/Button";

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

function redirectToURL(id) {
  const targ = `/hackeps/sponsors/${id}`;
  window.open(targ, "_blank", "noopener,noreferrer");
}

/*End Imports 😭*/

const Sponsors = () => {
  const [groups, setGroups] = useState([[], [], []]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let imgs = [[], [], []];

        const tiers = [1, 2, 3];
        const companyDataTiers = await Promise.all(
          tiers.map((i) => getCompanyByTier(i)),
        );

        tiers.forEach((tier, indexT) =>
          companyDataTiers[indexT].forEach((pos, index) => {
            imgs[indexT][index] = {
              image: pos.image,
              importance: tier,
              url: pos.website,
              id: pos.id,
            };
          }),
        );
        setGroups(imgs);
      } catch (error) {
        console.log("El error obtenido es:", error);
      }
    };

    fetchData();
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
          {groups.map((group) => (
            <div className="flex flex-wrap justify-center gap-4 p-4">
              {group.map((company, index) => (
                <img
                  key={index}
                  src={company.image}
                  alt={`Logo empresa`}
                  className={`sponsor-group-group-${company.importance} bg-white p-3 max-h-48 object-contain border rounded-2xl border-gray-200 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-x-[3px] hover:-translate-y-[4px] cursor-pointer`}
                  onClick={() => redirectToURL(company.id)}
                />
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
