import {React, useEffect, useState} from 'react'

const Body = () => {
    const [title, setTitle] = useState("HackEPS 2024")
    //Hacker una configuración con 4 perfiles de actividad (1. Hacking, 2. Anuncios de actividad en curso, 3. Comidas o cenas junto a las instrucciones del aula, 4. Modo noche( oscuro))
    //En Backend, una tabla con el itinerario y en frontend, un endpoint que actualize cada X tiempo buscando si hay nueva actividad que anunciar.
    //En frontend, la actualización dependerá de la hora local. Esto es para que todo se sincronize al mismo tiempo en todos los dispositivos.


    //Las configuraciones deben cambiar entre ellas de forma suave, con animaciones y sin saltos.

  return (
    <div className='w-screen h-screen overflow-hidden flex flex-column'>




    </div>
  )
}

export default Body