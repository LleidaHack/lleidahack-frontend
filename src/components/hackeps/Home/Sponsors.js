import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Home/Sponsors.css";
import { getAllCompanies } from "src/services/CompanyService";
import Button from "src/components/buttons/Button";

/*IMAGES IMPORTS*/
import Eurecat from "src/icons/sponsors logos/1st/logo_EURECAT.png";
import bonarea from "src/icons/sponsors logos/1st/bonArea_Agrupa.png";
import bofill from "src/icons/sponsors logos/1st/Logo_Fundació_Bofill.png";
import ingroup from "src/icons/sponsors logos/1st/Logo-Ingroup.png";
import restb from "src/icons/sponsors logos/1st/restb.jpeg";
/*----...---2nds--..-..-----*/
import Alter from "src/icons/sponsors logos/2nd/Alter Software.jpeg";
import EPS from "src/icons/sponsors logos/2nd/Eps Logo.jpg";
import GFT from "src/icons/sponsors logos/2nd/GFT_Logo_CMYK.jpg";
import eCityclic from "src/icons/sponsors logos/2nd/Logo eCityclic OK.png";
import paeria from "src/icons/sponsors logos/2nd/paeria_0.png";
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

let imgs1 = [
  { image: Eurecat, /*url: "1",*/ url: "https://eurecat.org/" },
  { image: bonarea, /*url: "2",*/ url: "https://www.bonarea.com/" },
  { image: bofill, /*url: "3",*/ url: "https://fundaciobofill.cat/" },
  { image: ingroup, /*url: "4",*/ url: "https://ingroup.biz/" },
  { image: restb, /*url: "5",*/ url: "https://restb.ai/" },
];

let imgs2 = [
  { image: VallCompanys, importance: 1, url: "https://vallcompanys.es/ca/" },
  { image: Alter, importance: 2, url: "https://altersoftware.es/" },
  { image: EPS, importance: 1, url: "https://www.eps.udl.cat/" },
  { image: paeria, importance: 1, url: "https://www.paeria.cat/" },
  { image: GFT, importance: 2, url: "https://www.gft.com/es/es" },
  { image: actium, importance: 2, url: "https://www.actiumdigital.es/" },
  { image: eCityclic, importance: 2, url: "https://www.ecityclic.com/ca" },
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
        <div className="cuadrados-container">
          {imgs1.map((pos, index) => (
            <div key={index + 1} className="cuadrado">
              <img
                src={pos.image}
                onClick={() => redirectToURL(pos.url)}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
      <br />
      <TitleGeneralized padTop="4" underline>
        Partners
      </TitleGeneralized>

      <section className="spnsection">
        <div className="sponsors-container">
          <div
            className="sponsor-group-group-1"
            style={{ marginBottom: "50px" }}
          >
            {groups[1]}
          </div>
          <div className="sponsor-group-group-2">{groups[2]}</div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
