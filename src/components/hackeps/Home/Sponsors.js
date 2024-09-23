import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Home/Sponsors.css";
import { getAllCompanies } from "src/services/CompanyService";
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

function redirectToURL(url) {
  window.open(url, "_blank");
}

/*End Imports 😭*/

let imgs2 = [
  { image: GFT, importance: 2, url: "https://www.gft.com/es/es" },
  { image: eCityclic, importance: 1, url: "https://www.ecityclic.com/ca" },
  { image: paeria, importance: 2, url: "https://www.paeria.cat/" },
  { image: uniLleida, importance: 1, url: "https://www.udl.cat/ca/" },
  { image: escolaPolitecnica, importance: 2, url: "https://www.eps.udl.cat/ca/" },
  { image: insdo, importance: 1, url: "https://www.insdosl.com" },
  { image: useit, importance: 2, url: "https://www.useit.es" },
];

let imgs1 = [
  { image: VallCompanys, importance: 1, url: "https://vallcompanys.es/ca/" },
  { image: Alter, importance: 2, url: "https://altersoftware.es/" },
  { image: GFT, importance: 2, url: "https://www.gft.com/es/es" },
  { image: actium, importance: 2, url: "https://www.actiumdigital.es/" },
  { image: Cosantex, importance: 2, url: "https://www.cosantex.com/" },
  { image: intech3d, importance: 2, url: "https://intech3d.es/" },
  { image: alumni, importance: 2, url: "https://alumni.udl.cat/" },
  { image: fruilar, importance: 2, url: "https://www.fruilar.com/es" },
  { image: plusfresc, importance: 2, url: "https://www.plusfresc.cat/" },
];

const Sponsors = () => {
  const [infoCompany, getInfoAll] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await getAllCompanies();
        getInfoAll(companyData);
        companyData.map((pos, index) => {
          if (index < 4) {
            //imgs1[index] = {image: pos.image, url:pos.website}
          } else {
            //imgs2[index - 4] = {image: pos.image}
          }
        });
      } catch (error) {
        console.log("El error obtenido es:", error);
      }
    };

    fetchData();
  }, []);

  const groups = {
    1: [],
    2: [],
  };

  imgs2.forEach((img) => {
    groups[img.importance].push(
      <img
        key={img.image}
        src={img.image}
        alt={`Logo ${img.importance}`}
        className="bg-white pepers"
        onClick={() => redirectToURL(img.url)}
      />,
    );
  });

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
      <section className="spnsection">
      <div className="sponsors-container">
          <div
            className="sponsor-group-group-1"
          >
            {groups[1]}
          </div>
          <div className="sponsor-group-group-2">{groups[2]}</div>
        </div>
      </section>
      <br />

    </div>
  );
};

export default Sponsors;

