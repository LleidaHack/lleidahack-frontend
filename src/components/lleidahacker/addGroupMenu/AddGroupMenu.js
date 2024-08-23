import {React, useEffect, useState } from 'react'

const AddGroupMenu = (id, me) => {
    const [itsMe, setItsMe] = useState(false);
    
    useEffect(() => {
        setItsMe(me.id === id);
    }, [me.id, id]);
    
  return (
    <div>
        {itsMe === true ? (
            <>
            <p>No tienes acceso a añadir tus grupos</p>
            </>
        ) : (
            <>
            </>
        )}
    </div>
  )
}

export default AddGroupMenu