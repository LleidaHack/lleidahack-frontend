import React, { useEffect, useState } from "react";
import "src/components/Sponsors/IfSponsors.css";
import { getCompanyById, getCompanyEvents } from "src/services/CompanyService";
//import UserCircle from "./others/circles";

let images = [
  /*'https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png',
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png','https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png','https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png',*/
  // ... y así sucesivamente con tal de meter la cantidad de logos disponibles que se obtendran de base de datos. (Se puede obtener simplementa el año y concatenarlo a un enlace junto a un bucle for que añada tantas insignias como se obtengan.)
];

const InfoSponsors = ({ id }) => {
  const [infoCompany, setInfoCompany] = useState(null);
  const [events, setInfoCompany2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await getCompanyById(id);
        setInfoCompany(companyData);
        console.log("La información obtenida es:", companyData);
        try {
          const companyEvents = await getCompanyEvents(id);
          setInfoCompany2(companyEvents);
          companyEvents.map((events, index) => (images[index] = events.image));
        } catch (errors) {
          console.log("El error obtenido es:", errors);
        }
      } catch (error) {
        console.log("El error obtenido es:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!infoCompany) {
    return <div className="The-Grand-Phather">Cargando...</div>;
  }

  console.log("la longitud de la tabla es:", infoCompany.name);
  if (Object.keys(infoCompany).length > 0) {
    //Pagina que es mostrará si amb la id s'ha obtingut alguna cosa

    let SpnName = infoCompany.name; //Nom del Sponsor
    let text; //Variable necesaria per a realizar la concatenació de codi HTML depenent de si te web o no.
    let linkedintag = infoCompany.linkdin; //Enllaç del likedin tag de la empresa.
    let correu = infoCompany.address; //Correu de la empresa
    let webtag = infoCompany.website; //Web de la empresa
    let imgLogo = infoCompany.logo;
    let description = infoCompany.description;
    let edicions = []; //Aqui afegir les edicions en les que han participat (2020, 2021, 2022, 2023,....)
    let xarxes = false; //Variable que servira per a informar si la empresa te enllaç web o no. Per defecte false. Si te web, s'ha de posar true
    if (webtag.length > 0) {
      xarxes = true;
    }

    /*const users = [
      {
        imageSrc:
          "https://cdn.openart.ai/stable_diffusion/8bf72432bf8515ebdac9fa6f921cddaa94a61ecf_2000x2000.webp",
        name: "Manolo Mallin",
        description:
          "Es un muchayo muy majo que se le da bien darle patadas a la pelota. De vez en cuando, juega a la nintento y se hecha unas risas con el gato",
      },
      {
        imageSrc:
          "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR5flXcU-23Auy8k0wNejkPSmb3yq5vinWZoGuexKZro3FCOHnbFC0FrGcdDO6hG5TF",
        name: "Javier Mallin",
        description:
          "Javier Gerardo Milei  es un economista, político y docente argentino, líder del espacio político La Libertad Avanza.",
      },
      {
        imageSrc:
          "https://concertmusicfestival.com/wp-content/uploads/2022/12/TINI_1000x1000.jpg",
        name: "Tini Tini Tini",
        description:
          "Martina Stoessel​​ , conocida artísticamente como Tini, es una actriz, cantante y compositora argentina",
      },

      // Agrega más usuarios aquí
    ];*/

    if (edicions.length > 0) {
      images = edicions;
    }

    if (xarxes) {
      text = [
        <a href={linkedintag} target="_blank" rel="noreferrer" className="rel">
          <i class="fa-brands fa-linkedin" /> LinkedIn
        </a>,
        "|",
        <a href={webtag} target="_blank" rel="noreferrer" className="rel">
          <i class="fa-solid fa-globe" /> Web
        </a>,
      ];
    } else {
      text = [
        <a href={linkedintag} target="_blank" rel="noreferrer" className="rel">
          <i class="fa-brands fa-linkedin" /> LinkedIn
        </a>,
      ];
    }

    return (
      <div className="The-Grand-Phather">
        <section className="SpnTitle">
          <h1 className="title-Info-sponsors">- {SpnName} -</h1>
          <br />

          <p class="text-aftTitle">
            Benvingut/da <br /> al panell de patrocinador
          </p>
          <br />
        </section>
        <section className="Imagecontener">
          <img className="peperoni" src={imgLogo} alt="Logo de la empresa" />
        </section>
        <br />
        <section className="redesYOthers p-bg-grey">
          <p className="text-aftTitle2 ">
            📩 {correu} |{text}
          </p>
        </section>
        <section className="descriptions">
          <br />
          <h2>Descripció</h2>
          <br />
          <p>{description}</p>
          <br />
        </section>

        {/*<section className="descriptions">
          <br/>
          <h2>Representants de l'Empresa</h2>
          <br/>
          <p>
            Com a representants de l'empresa conteu amb els seguents membres
            juntament amb la seva eina de contacte d'empresa
          </p>
          <br/>
          <div className="circle-list">
            {users.map((user, index) => (
              <UserCircle
                key={index}
                imageSrc={user.imageSrc}
                name={user.name}
                description={user.description}
              />
            ))}
          </div>
            </section>*/}

        <br />
        <br />

        <section className="businesActivity">
          <br />
          <h2>Historial d'activitats</h2>

          <br />
          <div className="logos">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index}`} /> //Editar aixo per a que sigui una url fixa i nomes camvii la edicio Eg: C/wefwf/efwef/2021.jpg, C/wefwf/efwef/2022.jpg...
            ))}
          </div>
        </section>
        <br />
        <br />
      </div>
    );
  } else {
    //Info que es mostra si amb la id, els resultats no son concoents
    console.log("El nombre del sponsor es: ", infoCompany.name);

    let errorImages = [
      "https://media.tenor.com/Wv6zVQPZFtcAAAAC/error.gif",
      "https://media.tenor.com/hI4TN7nt06oAAAAC/error.gif",
      "https://media.tenor.com/89X5kccfNy0AAAAC/theoffice-michaelscott.gif",
      "https://media.tenor.com/JKPJy9fQiAAAAAAi/cat-diragana.gif",
      "https://media.tenor.com/nKPZSs1a6WMAAAAC/back-pocket-skadi.gif",
      "https://media.tenor.com/ENxVWo1KcnsAAAAC/error.gif",
    ];
    let errorImage =
      errorImages[Math.floor(Math.random() * (errorImages.length + 1))];

    return (
      <div className="The-Grand-Phather">
        <section className="Imagecontener2">
          <h1 className="title-Info-sponsors">Oh No, Something happened..</h1>
          <br />
          <img className="peperoni" src={errorImage} alt="Gif" />
        </section>

        <section className="NotFound">
          <h1 className="title-Info-sponsors">😶🪑🐾🐣</h1>
          <h1 className="title-Info-sponsors">ERROR! Sponsore Not Found</h1>
          <p>GIF</p>
        </section>
      </div>
    );
  }
};

export default InfoSponsors;
