import React from 'react'
import GrupsCardBox from "src/components/lleidahacker/grupsCardBox/grupsCardBox";
import image1 from "src/assets/img/programmersen.png";
import { useNavigate } from 'react-router-dom';

const MemberGestor = () => {
  const navigate = useNavigate();
  const grups = [
    {role:"Junta", nickName:"Jor-d1-07239", nom:"Jordi", cognom:"Perez Asturion", id:0},
    {role:"Devs", nickName:"iTS-jUST.jua", nom:"Juan", cognom:"Carlos de Asturias", id:1},
    {role:"Marketing", nickName:"wHere-Is.Julia", nom:"Julia", cognom:"De los Montes de Asturias", id:2},
    {role:"Contactes", nickName:"Elena-N0T-Found", nom:"Elena", cognom:"Campos de Guinea", id:3},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega",  id:4},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega", id:5},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega", id:6},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega", id:7},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega", id:8},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega", id:9},
    {role:"Techmeetings", nickName:"iS-IT*fREDERIKO", nom:"Frederico", cognom:"Garcia de la Vega", id:10},



]
  return (
    <div>
      <h1 className='text-4xl '>Gestor de Membres</h1>
      <div className=" center flex mt-3 ">
          <div className="w-6/12 border-2 border-primaryLanding rounded-lg" />
      </div>
                
        <div className='mt-16 border-3 rounded-lg mx-8 flex flex-row py-16 px-16 gap-5 text-base h-119 overflow-y-scroll'>
          <table className="w-full border-separate border-spacing-y-2  truncate text-wrap	">
            <thead>
              <tr>
                <th ><p className='mr-5 static'>NickName</p></th>
                <th><p className='mr-5'>Nom i Cognom</p></th>
                <th><p className='mr-5'>Rol</p></th>
              </tr>
            </thead>
            <tbody className=''>
              <tr> {/*Camp buid per crear separacuió dins la tabla. Metode molt guarro xd */}
                <td className='opacity-0'>.</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {grups.map((grupo, index) => (
                <tr key={index} className=' cursor-pointer hover:underline'  onClick={() => navigate("/lleidahacker/" + grupo.id)}>
                  <td className=' text-ellipsis ml-2'><p className='mr-5'>{grupo.nickName}</p></td>
                  <td className=' text-ellipsis ml-2'><p className='mr-5'>{grupo.nom} {grupo.cognom}</p></td>
                  <td><p className='mr-5'>{grupo.role}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default MemberGestor