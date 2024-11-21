import React, { useEffect, useState } from 'react'

const CounterActivity = ({type, time}) => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  useEffect(() => {
    if (typeof time === 'string' && time.includes(":")) {
      const tiempo = time.split(":");
      setHoras(parseInt(tiempo[0]));
      setMinutos(parseInt(tiempo[1]));
    }
  }, [time])

  return (
    <>
      {type === 1 && 
        <div className='flex flex-col'>
        <div className='digit1 bg-white font-digits'></div>
        <div className='digit2'></div>
        <div className='digit3'></div>
        <div className='digit4'></div>
        <div className='digit5'></div>
        <div className='digit6'></div>
        </div>
      }
      {type === 2 && 
        <div>
          {horas}:{minutos}
        </div>
      }
      {type === 3 && 
        <div>
          CounterActivity
        </div>
      }
      {type !== 1 && type !== 2 && type !== 3 && 
        <div>
          Notype set
        </div>}
    </>
  )
}

export default CounterActivity
