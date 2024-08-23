import React from 'react'


const HackerListHackeps = () => {
//TODO: Pensa com diseñar la mostra dels grups amb els membres i la seva info.
  return (
    <div>
        <h1 className='text-4xl '>Participants i Grups</h1>
        <div className=" center flex ">
            <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
        </div>
        <div className='mt-12 border-3 rounded-lg mx-8 flex flex-col py-12 px-24 justify-between text-base flex-wrap'>
            <h1 className='text-2xl '>Participants sense grup</h1>
            <div className=" center flex mb-5">
                <div className="w-4/12 border-1 border-primaryLanding rounded-lg" />
            </div>
            <div className='Membres-sense-grup'>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Nom</th>
                            <th>Mail</th>
                            <th>Telefon</th>
                            <th>Edat</th>
                            <th>Talla</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
            
            <h1 className='text-2xl mt-5'>Grup</h1>
            <div className=" center flex mb-5">
                <div className="w-4/12 border-1 border-primaryLanding rounded-lg" />
            </div>
            <div className='Membres-amb-grup'>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Nom Grup</th>
                            <th>Grup</th>
                            <th>Acceptat</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default HackerListHackeps