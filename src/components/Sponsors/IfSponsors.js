import React from 'react'
import './IfSponsors.css'
import { Link } from 'react-router-dom';

const InfoSponsors = (id) => {

    let pepe = "LleidaHack"
    let xarxes = true
    let text

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
        // ... y así sucesivamente
      ];

    if(xarxes){
        text = [<a href="https://www.lleidahack.dev" target="_blank" className='rel'>
            <i class="fa-brands fa-linkedin"></i> LinkedIn  
        </a> , '|' ,
        <a href="https://www.lleidahack.dev" target="_blank" className='rel'>
            <i class="fa-solid fa-globe"></i> Web  
        </a>];
        
    }else{
        text = [<a href="https://www.lleidahack.dev" target="_blank" className='rel'>
            <i class="fa-brands fa-linkedin"></i> LinkedIn  
        </a>];
    }
    
    return (
        <div className='The-Grand-Phather'>
            <section className='SpnTitle'>
              
                <h1 className='title-Info-sponsors'>- {pepe} -</h1>
                <br></br>
             
                <p class="text-aftTitle">Benvingut/da <br></br> al panell de patrocinador</p>
                <br></br>
            </section>
            <section className='Imagecontener'>
                <img className='peperoni' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Lleida_%2840262867523%29.jpg" />
            </section>
            <br></br>
            <section className='redesYOthers p-bg-grey'>
                <p className='text-aftTitle'>📩 lotfi.bouakel@lleidahack.dev |   
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