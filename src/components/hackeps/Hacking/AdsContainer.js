import {React, useEffect, useState} from 'react'


const AdsContainer = ({color, title, element1, element2}) => {
    
    const [show, setShow] = useState(true);
    function hideAdvice(){
        if(show){
            setShow(false);
            document.querySelector('.Corredera-Anuncis').style.display = 'none';
        }
    }
    useEffect(() => {
        if(!show){
            document.querySelector('.Corredera-Anuncis').style.display = 'block';
        }
    } , [])


  return (
    <>
        <div className={`Corredera-Anuncis bg-green-500 w-[80vw] h-full  rounded-lg flex flex-col absolute left-1/2 transform -translate-x-1/2 z-[20] shadow-2xl opacity-90`}>
            {/* Aixo es mostrara per damunt de lo que hi hagi al top side, animacions o lo que sigui. */}
            
            <div className='X button mb-2 text-red-600 font-semibold text-end mt-2 mr-4 text-3xl cursor-pointer	'>
                <p onClick={hideAdvice}>×</p>
            </div>
            <div className='Titol-Activitat text-center	font-extrabold'>
                <h2 className='text-4xl '>{title} </h2>  
            </div>
            <div className='flex flex-row w-full pl-8 mt-2'>
                
                <div className='CounterActivity mt-2 flex-1 justify-items-center pr-8'>
                    <p className='EventStatus text-xl'>La activitat comença dintre de </p>
                    <div className='items-end'>{element2}</div>
                    
                    {/* <CounterActivity type={1} targetTime={targetTime}/> */}
                </div>
                <div className='Descripcio flex-1 border-l-2 border-black pl-8 '>
                    <div className='text-xl'>{element1}</div>
                </div>
            </div>      
            {/* Fins aqui el AdsContainer */}
            
        </div>
    </>
  )
}

export default AdsContainer