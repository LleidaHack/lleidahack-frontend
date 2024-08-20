import React from 'react'
import Header from 'src/components/lleidahacker/header/header'
import GrupsCardBox from "src/components/lleidahacker/grupsCardBox/grupsCardBox";
import image1 from "src/assets/img/programmersen.png";


const AdminPanelPage = () => {
    const grups = [
        {name:"Junta", role:"Sense Accés", image:image1, whatsapp:"", drive:"", bgcolor:"primaryLanding", opacity:".70"},
        {name:"Devs", role:"member", image:image1, whatsapp:"", drive:"", bgcolor:"primaryLanding", opacity:"100"},
        {name:"Marketing", role:"Sense Accés", image:image1, whatsapp:"", drive:"", bgcolor:"primaryLanding", opacity:".70"},
        {name:"Contactes", role:"Sense Accés", image:image1, whatsapp:"", drive:"", bgcolor:"primaryLanding", opacity:".70"},
        {name:"Techmeetings", role:"Sense Accés", image:image1, whatsapp:"", gitdrivehub:"", bgcolor:"primaryLanding", opacity:".70"},
    ]


  return (
    <div className='flex flex-col w-full h-full'>
        <Header/>
        <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 ">
            <div className="header-events__content ">
                <h1 className="header-events__title">Admin Panel</h1>
            </div>
        </div>
        <h1 className='text-center text-5xl mt-5'>Accesos</h1>
        <div className='mt-5 border-3 rounded-lg mx-16 flex flex-row py-16 px-16 gap-5'>
            {grups.map((grup) => (
                <GrupsCardBox name={grup.name} role={grup.role} image={grup.image} bgcolor={grup.bgcolor} opacity={grup.opacity} drive={grup.github} whatsapp={grup.linkedIn}/>
            ))}
        </div>

    </div>
  )
}

export default AdminPanelPage