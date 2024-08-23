import {React, useEffect, useState} from 'react'
import {useParams}  from "react-router-dom";
import LoadSection from 'src/components/hackeps/LoadSection/Loadsection';
import {getUserById} from 'src/services/UserService';


const LleidahackerProfile = () => {
    let { id } = useParams();
    const [lleidaHacker, setLleidaHacker] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLleidaHacker = async () => {
            let lleidaHacker = await getUserById(id);
            setLleidaHacker(lleidaHacker);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        }
        fetchLleidaHacker();
    }, [id]);
      
    

  return (
    <div>
      {loading === true ? (
        <div>
           <LoadSection /> {/*Cambiar despres i ficar una loading de lleidahacker */}
        </div>
      ) : (
        <div className='flex flex-row w-screen'>
          <div className='align-left'>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default LleidahackerProfile