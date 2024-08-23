import React, { useEffect } from 'react'
import icon from 'src/assets/img/programmersen.png';
import GrupsCardBox from "src/components/lleidahacker/grupsCardBox/grupsCardBox";

const GrupList = (id) => {

    useEffect(() => {
        
    }, [id])

    const grups = [
        {role:"President/a", nom:"Junta", image:{icon}},
        {role:"President/a", nom:"Junta", image:{icon}},
    ]

      return (
        <div>
          <h1 className='text-4xl '>Gestor de Membres</h1>
          <div className=" center flex ">
              <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
          </div>
                    
            <div className='mt-12 border-3 rounded-lg mx-8 flex flex-row py-16 px-16 gap-5 text-base h-119'>
                {grups.map((grup) => (
                    <GrupsCardBox name={grup.name} role={grup.role} image={grup.image} bgcolor={"primaryLanding"} opacity={100} drive={null} whatsapp={null}/>
                ))}
            </div>
        </div>
      )
}

export default GrupList

