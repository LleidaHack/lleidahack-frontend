import React from 'react'
import { useNavigate } from 'react-router-dom';


const HackepsGestor = () => {
  const navigate = useNavigate();

  const resumen = [
    {title: "Nom del Event", data: "Hackeps2024"},
    {title: "Id Event", data: "23"},
    {title: "Data d'inici", data: "23/03/2022"},
    {title: "Data de finalització", data: "23/03/2022"},
    {title: "Nº de participants", data: "45"},
    {title: "Nº de grups", data: "23"},
    {title: "Hackers Acceptats", data: "45"},
    {title: "Hackers Rebutjats", data: "23"},
    {title: "Hackers Pendents", data: "7"},
  ]

  function redirectHackDash() {
    navigate("/hackeps-dashboard")
  }

  return (
    <div>
      <h1 className='text-4xl '>Hackeps Dash</h1>
      <div className=" center flex ">
          <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
      </div>
              
      <div className='mt-12 border-3 rounded-lg mx-8 flex flex-row py-12 px-24 justify-between text-base flex-wrap'>
        {resumen.map(item => (
          <div className='w-4/12' key={item.title}>
            <ul>
              <li>
                <strong>{item.title}: </strong>
                {item.data}
              </li>
            </ul>
          </div>
        ))}
      <div className='flex flex-row w-full justify-end mt-5'>
        <button className="bg-primaryLanding text-white rounded-lg p-2 " onClick={redirectHackDash}>Gestionar..</button>
      </div>
      </div>
    </div>
  )
}

export default HackepsGestor