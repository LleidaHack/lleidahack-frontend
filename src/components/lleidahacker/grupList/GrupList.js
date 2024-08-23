import {React, useEffect, useState} from 'react'
import icon from 'src/assets/img/programmersen.png';
import plus from 'src/assets/img/plus.png';
import GrupsCardBoxProfile from "src/components/lleidahacker/grupsCardBox/grupsCardBoxProfile";
import PopupBody from '../emergentPopup/PopupBody';
import AddGroupMenu from '../addGroupMenu/AddGroupMenu';

const GrupList = ({id, me}) => {
    const [myself, setMyself] = useState(me);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    useEffect(() => {
        setMyself(true)
    }, [id])

    const grups = [
        {role:"President/a", nom:"Junta", image:icon},
    ]

    function addGroup() {
        console.log("Añadir grupo")
        setIsPopupOpen(true)
    }

    function refreshGroups() {
        console.log("wefwef")
        setIsPopupOpen(false)
    }

    return (
    <div>
        <h1 className='text-4xl '>Gestor de Membres</h1>
        <div className=" center flex ">
            <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
        </div>
                
        <div className='mt-12 border-3 rounded-lg mx-8 flex flex-row py-16 px-16 gap-5 text-base flex-wrap'>
            {grups.map((grup) => (
                <GrupsCardBoxProfile size={"normal"} name={grup.nom} role={grup.role} image={grup.image} bgcolor={"primaryLanding"} opacity={100}/>
            ))}
            {myself === true ?
                <>
                    <div className='flex justify-center rounded-full h-28 w-28 self-center'>
                        <img src={plus} alt="icon" className='opacity-80 rounded-full self-center w-16 h-16 object-cover cursor-pointer hover:opacity-100' onClick={addGroup}/>
                    </div>
                </>
            : null}


        </div>
        <PopupBody isOpen={isPopupOpen} onClose={refreshGroups}>
            <div className='flex flex-col'>
                <div className='titles'>
                    <p className='text-3xl mb-1'>+ Nous grups</p>
                    <div className=" center flex ">
                        <div className="w-4/12 border-2 border-primaryLanding rounded-lg" />
                    </div>
                </div>
                <div className='border-3 min-h-8 rounded-lg mt-4 flex flex-row gap-3 text-base flex-wrap py-8 px-4'>
                    {grups.map((grup) => (
                        <GrupsCardBoxProfile key={grup.key} size={"small"} role={grup.role} image={grup.image} bgcolor={"primaryLanding"} opacity={100}/>
                    ))}
                </div>
            </div>
        </PopupBody>
    </div>
    )
}

export default GrupList

