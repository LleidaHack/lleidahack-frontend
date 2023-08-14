import React, { useEffect, useState } from 'react';
import './IfSponsors.css'
import {getCompanyById} from '../../services/CompanyService'
const InfoSponsors = ({id}) => {
    const [infoCompany, setInfoCompany] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const companyData = await getCompanyById(id);
          setInfoCompany(companyData);
          console.log('La información obtenida es:', companyData);
        } catch (error) {
          console.log('El error obtenido es:', error);
        }
      };
  
      fetchData();
    }, [id]);
  
    console.log('cargando');
  
    if (!infoCompany) {
        return <div className="The-Grand-Phather">Cargando...</div>;
    }
    
    console.log("la longitud de la tabla es:", infoCompany.name)
    if(Object.keys(infoCompany).length > 0){  //Pagina que es mostrará si amb la id s'ha obtingut alguna cosa
        
        let SpnName = infoCompany.name //Nom del Sponsor
        let text   //Variable necesaria per a realizar la concatenació de codi HTML depenent de si te web o no.
        let linkedintag = infoCompany.linkedin  //Enllaç del likedin tag de la empresa.
        let correu = infoCompany.adress //Correu de la empresa 
        let webtag = infoCompany.website  //Web de la empresa
        let imgLogo = infoCompany.logo
        let description = infoCompany.description
        let edicions = []  //Aqui afegir les edicions en les que han participat (2020, 2021, 2022, 2023,....)
        let xarxes = false //Variable que servira per a informar si la empresa te enllaç web o no. Per defecte false. Si te web, s'ha de posar true
        if(webtag.length > 0){
            xarxes = true
        }
       
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
        if(edicions.length > 0){
            images = edicions
        }

        if(xarxes){
            text = [<a href= {linkedintag} target="_blank" rel="noreferrer" className='rel'>
                <i class="fa-brands fa-linkedin"></i> LinkedIn  
            </a> , '|' ,
            <a href={webtag} target="_blank" rel="noreferrer" className='rel'>
                <i class="fa-solid fa-globe"></i> Web  
            </a>];
            
        }else{
            text = [<a href={linkedintag} target="_blank" rel="noreferrer" className='rel'>
                <i class="fa-brands fa-linkedin"></i> LinkedIn  
            </a>];
        }
        
        return (
            <div className='The-Grand-Phather'>
                <section className='SpnTitle'>
                
                    <h1 className='title-Info-sponsors'>- {SpnName} -</h1>
                    <br></br>
                
                    <p class="text-aftTitle">Benvingut/da <br></br> al panell de patrocinador</p>
                    <br></br>
                </section>
                <section className='Imagecontener'>
                    <img className='peperoni' src={imgLogo} alt='Logo de la empresa' />
                </section>
                <br></br>
                <section className='redesYOthers p-bg-grey'>
                    <p className='text-aftTitle2 '>📩 {correu} |   
                        {text}
                    </p>
                </section>
                <section className='descriptions'>
                    <br></br>
                    <h2>Descripció</h2>
                    <br></br>
                    <p>{description}
                    </p>
                    <br></br>
                </section>
                <section className='businesActivity'>
                    <br></br>
                    <h2 >Historial d'activitats</h2>
                    
                    <br></br>
                    <div className='logos'>
                        {images.map((image, index) => (
                        <img key={index} src={image} alt={`Imagen ${index}`} />  //Editar aixo per a que sigui una url fixa i nomes camvii la edicio Eg: C/wefwf/efwef/2021.jpg, C/wefwf/efwef/2022.jpg... 
                        ))}
                    </div>
                </section>
                <br></br>
                <br></br>
            </div>
        )
        
    }else{  //Info que es mostra si amb la id, els resultats no son concoents
        console.log("El nombre del sponsor es: ", infoCompany.name)
        
        let errorImages = [
            'https://media.tenor.com/Wv6zVQPZFtcAAAAC/error.gif',
            'https://media.tenor.com/hI4TN7nt06oAAAAC/error.gif',
            'https://media.tenor.com/89X5kccfNy0AAAAC/theoffice-michaelscott.gif',
            'https://media.tenor.com/JKPJy9fQiAAAAAAi/cat-diragana.gif',
            'https://media.tenor.com/nKPZSs1a6WMAAAAC/back-pocket-skadi.gif',
            'https://media.tenor.com/ENxVWo1KcnsAAAAC/error.gif',
        ];
        let errorImage = errorImages[Math.floor(Math.random() * (errorImages.length + 1))]

        return(
            <div className='The-Grand-Phather'>

                <section className='Imagecontener2'>
                <h1 className='title-Info-sponsors'>Oh No, Something happened..</h1>
                <br></br>
                    <img className='peperoni' src={errorImage} alt='Gif' />
                </section>

            <section className='NotFound'>
                <h1 className='title-Info-sponsors'>😶🪑🐾🐣</h1>
                <h1 className='title-Info-sponsors'>ERROR! Sponsore Not Found</h1>
                <p>GIF</p>
            </section>

            </div>
        )
    }
    
}

export default InfoSponsors