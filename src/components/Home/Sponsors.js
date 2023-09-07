import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/Home/Sponsors.css";
import {getAllCompanies} from "src/services/CompanyService";

/*IMAGES IMPORTS*/
import Eurecat from "src/icons/sponsors logos/1st/Eurecat_JPG.jpg"
import bonarea from "src/icons/sponsors logos/1st/bonArea_Agrupa.png"
import bofill from "src/icons/sponsors logos/1st/Logo_Fundació_Bofill.png"
import ingroup from "src/icons/sponsors logos/1st/Logo-Ingroup.png"
import restb from "src/icons/sponsors logos/1st/restb.jpeg"
/*----...---2nds--..-..-----*/
import Alter from "src/icons/sponsors logos/2nd/Alter Software.jpeg"
import EPS from "src/icons/sponsors logos/2nd/Eps Logo.jpg"
import GFT from "src/icons/sponsors logos/2nd/GFT_Logo_CMYK.jpg"
import eCityclic from "src/icons/sponsors logos/2nd/Logo eCityclic OK.png"
import paeria from "src/icons/sponsors logos/2nd/paeria_0.png"
import actium from "src/icons/sponsors logos/2nd/logo-actium.jpg"




/*End Imports 😭*/


let imgs1 = [
  {image: Eurecat, url: "1"},
  {image: bonarea, url: "2"},
  {image: bofill, url: "3"},    
  {image: ingroup, url: "4"},
  {image: restb, url: "5"},
];

let imgs2 = [
  {image: Alter, importance: 1},
  {image: EPS, importance: 1}, 
  {image: paeria, importance: 1}, 
  {image: GFT, importance: 2}, 
  {image: actium, importance: 2}, 
  {image: eCityclic, importance: 2}, 


  

]

const Sponsors = () => {


  const [infoCompany, getInfoAll] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await getAllCompanies();
        getInfoAll(companyData);
        {companyData.map((pos, index) => {
          if (index < 4){
            //imgs1[index] = {image: pos.image, url:pos.id}
          }else{
            //imgs2[index - 4] = {image: pos.image}
          }
        })}
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
      <img key={img.image} src={img.image} alt={`Logo ${img.importance}`} className="pepers" />
    );
  });


  return (
    <div className="sponsors">
      <div className="gostHunter" id="sponsors"></div>
      <h1 className="title1 title-underline">Sponsors</h1>
      <p>Vols participar?</p>
      <p>No dubtis, contacta amb nosaltres!</p>
      <button className="contacta">Contacta</button>

      <section className="spnsection">
        <div className="cuadrados-container">
        {imgs1.map((pos, index) => (
          
          <div key={index + 1} className="cuadrado">
            <Link to={`/sponsors/${pos.url}`}>
            <img src={pos.image} alt={`Image ${index + 1}`}/>
            </Link>
          </div>
          
        ))}
      </div>
      </section>

      <h1 className="title1 title-underline">Partners</h1>

      <section className="spnsection">
        <div className="sponsors-container">
          <div className="sponsor-group-group-1">
            {groups[1]}
          </div>
          <div className="sponsor-group-group-2">
            {groups[2]}
          </div>
         
      </div>
      </section>
    </div>
  );
};

export default Sponsors;
