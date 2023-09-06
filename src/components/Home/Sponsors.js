import React, { useEffect, useState } from "react";
import "src/components/Home/Sponsors.css";
import {getAllCompanies} from "../../services/CompanyService";

let imgs1 = [
  {image: "https://www.risogallo.es/wp-content/uploads/2023/05/logo-carrefour.jpg", url: "1"},
  {image: "https://www.risogallo.es/wp-content/uploads/2023/05/logo-carrefour.jpg", url: "2"},
  {image: "https://www.risogallo.es/wp-content/uploads/2023/05/logo-carrefour.jpg", url: "3"},    
  {image: "https://www.risogallo.es/wp-content/uploads/2023/05/logo-carrefour.jpg", url: "4"},
  {image: "https://www.risogallo.es/wp-content/uploads/2023/05/logo-carrefour.jpg", url: "5"},

];

let imgs2 = [
  {image: "https://www.revistaaral.com/images/showid2/4847764?w=900&mh=700", importance: 3},
  {image: "https://brandemia.org/sites/default/files/inline/images/zara_nuevo_logo.jpg", importance: 2},
  {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wikipedia-logo-v2-es.svg/1200px-Wikipedia-logo-v2-es.svg.png", importance: 3},    
  {image: "https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Symbol.png", importance: 1},
  {image: "https://1000marcas.net/wp-content/uploads/2020/12/Microsoft-Excel-Logo.png", importance: 1},
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
    3: [],
  };

  imgs2.forEach((img) => {
    groups[img.importance].push(
      <img key={img.image} src={img.image} alt={`Logo ${img.importance}`} />
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
            <img src={pos.image} alt={`Image ${index + 1}`}/>
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
          <div className="sponsor-group-group-3">
            {groups[3]}
          </div>
      </div>
      </section>
    </div>
  );
};

export default Sponsors;
