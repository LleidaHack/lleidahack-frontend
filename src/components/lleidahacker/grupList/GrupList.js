import {React, useEffect, useState} from 'react'
import icon from 'src/assets/img/programmersen.png';
import plus from 'src/assets/img/plus.png';
import GrupsCardBoxProfile from "src/components/lleidahacker/grupsCardBox/grupsCardBoxProfile";
import PopupBody from '../emergentPopup/PopupBody';

const GrupList = ({id, me}) => {
    const [myself, setMyself] = useState(me);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editionGrups, setEditionGrups] = useState([]);
    const [listGrups, setListGrups] = useState([]);
    
    function getGroupsInfo(){
        //Hacer una llamada a la API para obtener la información de los grupos y clasificar la informacion para el front.
        const editionGrupsList = [ //Exemple de la lista de editions
            {role:"President/a", name:"Junta", status:"Añadido"},
            {role:"President/a", name:"Junta", status:"Eliminado"},
            {role:"President/a", name:"Junta", status:"Modificado"},
        ]

        const listGrupsList = [
            {role:"President/a", name:"Junta", image:icon, bgcolor:"grayNeutral", textColor:"black", opacity:100},
            {role:"membre", name:"Devs", image:icon, bgcolor:"grayNeutral", textColor:"black", opacity:100}, 
            {role:"membre", name:"Marketing", image:icon, bgcolor:"grayNeutral", textColor:"black", opacity:100},
            {role:"membre", name:"Contactes", image:icon, bgcolor:"grayNeutral", textColor:"black", opacity:100},
            {role:"membre", name:"TechMeetings", image:icon, bgcolor:"grayNeutral", textColor:"black", opacity:100},


        ]
        setListGrups(listGrupsList)
    }


    const grups = [
        {role:"President/a", nom:"Junta", image:icon},
        {role:"President/a", nom:"Junta", image:icon},
        {role:"President/a", nom:"Junta", image:icon},
    ]

    
    useEffect(() => {
        setMyself(true)
    }, [id]);

    function addGroup() {
        getGroupsInfo()
        setIsPopupOpen(true)
    }

    function refreshGroups() {
        console.log("wefwef")
        setIsPopupOpen(false)
    }

    async function modifyDatas(key) {
        console.log("Modificar datos" + key)
        const grupsInfo = grups[key]
        
        //Crear una lista con los cambios como por ejemplo quitar del grupo, añadir al grupo, cambiar rol para que al darle al guardar se procesen los datos.
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
                <div className='Legenda flex flex-row justify-end justify-between self-center w-2/4 mt-5'>
                    <div className='flex flex-row gap-1 '>
                        <p className='self-center'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M0 0 C4.62 0 9.24 0 14 0 C14 4.62 14 9.24 14 14 C9.38 14 4.76 14 0 14 C0 9.38 0 4.76 0 0 Z " fill="#FF7430" transform="translate(1,1)"/>
                            </svg>
                        </p>
                        <p>Selected</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p className='self-center'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M0 0 C4.62 0 9.24 0 14 0 C14 4.62 14 9.24 14 14 C9.38 14 4.76 14 0 14 C0 9.38 0 4.76 0 0 Z " fill="#e4e6eb" transform="translate(1,1)"/>
                            </svg>
                        </p>
                        <p>Unselected</p>
                    </div>
                </div>
                <div className='border-3 min-h-8 rounded-lg mt-1 flex flex-row gap-4 text-base flex-wrap py-8 px-4 mx-4'>
                    {listGrups.map((grup, key) => (
                        <div onClick={() => modifyDatas(key)}>
                            <GrupsCardBoxProfile key={grup.key} 
                            size={"small"} 
                            role={grup.name} 
                            image={grup.image} 
                            bgcolor={grup.bgcolor }
                            textColor={grup.textColor}
                            opacity={grup.opacity} 
                            changeColor={true}
                            click={false}/>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col w-full'>
                    <div className='title2 mt-5 px-6 mb-3'>
                        <p className='text-2xl mb-1'>Historial de Canvis</p>
                        <div className=" center flex ">
                            <div className="w-4/12 border-1 border-primaryLanding rounded-lg" />
                        </div>
                    </div>
                    <div className='canvisRealitzats mb-5 px-6'>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Grup</th>
                                    <th className="px-4 py-2">Rol</th>
                                    <th className="px-4 py-2">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {editionGrups.map((grup, key) => (
                                    <tr key={key}>
                                        <td className="border px-4 py-2">{grup.name}</td>
                                        <td className="border px-4 py-2">{grup.role}</td>
                                        <td className="border px-4 py-2">{grup.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex flex-row w-full justify-end'>
                        <button className='bg-primaryLanding text-white rounded-lg px-4 py-2 mr-6'>Guardar</button>
                    </div>
                </div>
            </div>
        </PopupBody>
    </div>
    )
}

export default GrupList

