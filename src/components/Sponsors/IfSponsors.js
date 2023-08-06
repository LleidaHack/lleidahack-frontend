import React from 'react'
import './IfSponsors.css'
import { Link } from 'react-router-dom';

const InfoSponsors = (id) => {
    let SpnName = "LleidaHack"  //Nom del Sponsor
    let text   //Variable necesaria per a realizar la concatenació de codi HTML depenent de si te web o no.
    let linkedintag = "https://www.lleidahack.dev"  //Enllaç del likedin tag de la empresa.
    let correu = "https://www.lleidahack.dev" //Correu de la empresa 
    let webtag = "https://www.lleidahack.dev"  //Web de la empresa
    let xarxes = false   //Variable que servira per a informar si la empresa te enllaç web o no. Per defecte false. Si te web, s'ha de posar true

    //Get de los datos a partir de la id + asignació de variables. Si no hi ha web, ficar el xarxes a false
    




    
    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png',
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png','https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png','https://upload.wikimedia.org/wikipedia/commons/7/7b/Lleida.net_logo_no_claim.png',
        'https://cdn.freebiesupply.com/logos/large/2x/ajuntament-de-lleida-logo-png-transparent.png',
        'https://www.diputaciolleida.cat/wp-content/uploads/2021/01/DLL-for%C3%A7a_municipis-1024x568.png',
        // ... y así sucesivamente con tal de meter la cantidad de logos disponibles que se obtendran de base de datos. (Se puede obtener simplementa el año y concatenarlo a un enlace junto a un bucle for que añada tantas insignias como se obtengan.)
      ];

    if(xarxes){
        text = [<a href= {linkedintag} target="_blank" className='rel'>
            <i class="fa-brands fa-linkedin"></i> LinkedIn  
        </a> , '|' ,
        <a href={webtag} target="_blank" className='rel'>
            <i class="fa-solid fa-globe"></i> Web  
        </a>];
        
    }else{
        text = [<a href={linkedintag} target="_blank" className='rel'>
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
                <img className='peperoni' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Lleida_%2840262867523%29.jpg" />
            </section>
            <br></br>
            <section className='redesYOthers p-bg-grey'>
                <p className='text-aftTitle'>📩 {correu} |   
                    {text}
                </p>
            </section>
            <section className='descriptions'>
                <br></br>
                <h2>Descripció</h2>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit non, rutrum penatibus inceptos fusce sagittis auctor enim. 
                    Nullam nunc viverra ac et ultricies leo cursus enim lacinia, penatibus ligula suscipit eros auctor congue dignissim 
                    velit vitae, mi maecenas integer sollicitudin eleifend ridiculus mus nisl. Fringilla dis sociosqu vehicula ac nascetur 
                    sem tempor risus donec vulputate quis, eu maecenas fames parturient congue molestie vivamus eget primis pharetra.
                </p>
                <br></br>
            </section>
            <section className='businesActivity'>
                <br></br>
                <h2 >Historial d'activitats</h2>
                
                <br></br>
                <div className='logos'>
                    {images.map((image, index) => (
                    <img key={index} src={image} alt={`Imagen ${index}`} />
                    ))}
                </div>
            </section>

            <br></br>
            <br></br>
        </div>
    )
}

export default InfoSponsors