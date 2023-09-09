import React, { useState } from 'react';
import "src/components/Dailyhack/main/maindailyhack.css"
import "src/components/Dailyhack/DHKSS.css"
import { Link } from "react-router-dom";



const HOMEDHKS = () => {

    return (
        <div className="BGPhather">
            <h1 className="title2 title-underline">Dailyhacks HACKEPS 2023</h1>
               <section className="informative">
                            <div className="Part1">
                                <div className="IntroTexte">
                                <h1 className='title2 left '> Que es un dailyhack?</h1>
                                
                                    <p>
                                    Aqui es on ve lo divertit. Un dailyhack son minireptes que proposep per par del organitzadors "LleidaHack" per tal de que aneu escalfant
                                    als reptes de l'esdeveniment.
                                    <br></br>
                                    <br></br>
                                    Al participar en un dailyhack, si veiem que entre tots els participants, el teu repositori destaca, t'enportarás el premi dedicat al dailyhack.
                                    </p>
                                </div>

                                <div className="fotovidIntro">
                                </div>
                              
                            </div>
                            <br></br>
                            <br></br>
                            <div className="Part1">
                                <div className="fotovidIntro">
                                </div>
                                
                                <div className="IntroTexte">

                                   

                                    <h1 className='title2 left '> Com participo?</h1>
                                
                                    <p>
                                    Per a participar als dailyhacks, haurás d'anar a la llista de dailyhacks que trobarás més abaix i seleccionar els que més t'agradin.
                                    No hi ha límit de participació.
                                    <br></br>
                                    <br></br>
                                    A cada dailyhack, trobarás una petita explicació de lo que intentem aconseguir juntament amb una bustia per a que cuan el finalitzis, ens enviis el teu repositori.
                                    <br></br>
                                    <br></br>
                                    ¡Una vegada iniciada la HackEPS, coneixereu els guañadors de cada repte!
                                    </p>
                                </div>
                            </div>

                        </section>
                        <section className="upload">
                            <h1 className="title3 title-underline">Dailyhacks </h1>

                            <div class="contenedorx">
                                <div class="tarjeta">
                                    <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2015/08/Hackaton-Aprendizaje.jpg" alt="Imagen 1"></img>
                                    <h2 className='title3'>Título 2</h2>
                                    <p>Texto de la tarjeta 2.</p>
                                    <Link to="/dailyhacks"> 
                                    <button className='contacta'>Mes Info</button>
                                    </Link>
                                </div>
                                <div class="tarjeta">
                                    <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2014/05/New-Picture3.png" alt="Imagen 2"></img>
                                    <h2 className='title3'>Título 2</h2>
                                    <p>Texto de la tarjeta 2.</p>
                                    <Link to="/dailyhacks">
                                    <button className='contacta'>Mes Info</button>
                                    </Link>
                                </div>
                                <div class="tarjeta">
                                    <img src="https://www.avanzaentucarrera.com/orientacion/comp/uploads/2021/03/AETC_Maraton-hackers.jpg" alt="Imagen 3"></img>
                                    <h2 className='title3'>Título 2</h2>
                                    <p>Texto de la tarjeta 2.</p>
                                    <Link to="/dailyhacks">
                                    <button className='contacta'>Mes Info</button>
                                    </Link>
                                    
                                </div>
                            </div>

                        </section>

                        <br></br>
                        <br></br>
                        <br></br>
        </div>
    );
};

export default HOMEDHKS;