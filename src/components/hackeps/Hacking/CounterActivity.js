import React, { useEffect, useState } from 'react'

const CounterActivity = ({ type, targetTime }) => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [tip, setTip] = useState(0);
  const [hoursLeft, setHoursLeft] = useState("0");
  const [minutesLeft, setMinutesLeft] = useState("0");
  const [secondsLeft, setSecondsLeft] = useState("0");
  const [dateEnd, setDateEnd] = useState("21/11/2024 23:59:00");


  useEffect(() => {
    setTip(type)
    console.log("CounterActivity",tip)
  }, [type])

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = Date.now(); // Tiempo actual en milisegundos
      const timeRemaining = targetTime - currentTime; // Tiempo restante en milisegundos

      if (timeRemaining <= 0) {
        // Si el tiempo ha expirado
        setHoursLeft("0");
        setMinutesLeft("0");
        setSecondsLeft("0");
        clearInterval(intervalId);
        return;
      }

      // Convertir el tiempo restante en horas, minutos y segundos
      const totalHours = Math.floor(timeRemaining / (1000 * 60 * 60)); // Total de horas, incluyendo días
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Actualizar el estado
      setHoursLeft(totalHours.toString().padStart(2, "0"));
      setMinutesLeft(minutes.toString().padStart(2, "0"));
      setSecondsLeft(seconds.toString().padStart(2, "0"));
    };

    // Inicia el intervalo de actualización cada segundo
    const intervalId = setInterval(updateCountdown, 1000);

    // Ejecuta una actualización inicial para evitar el retraso de 1 segundo
    updateCountdown();
    const endDate = new Date(targetTime);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = endDate.toLocaleDateString('ca-ES', options);
    setDateEnd(formattedDate);
    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [targetTime]);

  
  

  return (
    <>
      {tip === 1 && 
      <>
        <div className='flex flex-row rounded-md  bg-white w-fit pt-3	'>
          <div className='flex flex-col px-2 items-center'>
            <div className='digit-hour oswald-700 text-2xl drop-shadow-2xl'>{hoursLeft}</div>
            <p>Hores</p>
          </div>
          <div className='oswald-700 text-2xl drop-shadow-7xl items-center translate-y-[-3%]'><p>:</p></div>
          <div className='flex flex-col px-2  border-black items-center	'>
            <div className='digit-hour oswald-700 text-2xl drop-shadow-2xl'>{minutesLeft}</div>
            <p>Minuts</p>
          </div>
          <div className='oswald-700 text-2xl drop-shadow-7xl items-center translate-y-[-3%]'><p>:</p></div>
          <div className='flex flex-col px-2 border-black items-center'>
            <div className='digit-hour oswald-700 text-2xl drop-shadow-2xl'>{secondsLeft}</div>
            <p>Segons</p>
          </div>
        </div>
        </>
      }
      {tip === 2 && 
      <>
        <div className='flex flex-row rounded-md  mx-96 '>
          <div className='flex flex-col px-2 '>
            <div className='digit-hour oswald-700 text-9xl drop-shadow-2xl'>{hoursLeft}</div>
            <p>Hores</p>
          </div>
          <div className='oswald-700 text-9xl drop-shadow-7xl translate-y-[-10%]'><p>:</p></div>

          <div className='flex flex-col px-2 border-black '>
            <div className='digit-hour oswald-700 text-9xl drop-shadow-2xl'>{minutesLeft}</div>
            <p>Minuts</p>
          </div>
          <div className='oswald-700 text-9xl drop-shadow-7xl translate-y-[-10%]'><p>:</p></div>

          <div className='flex flex-col px-2 border-black '>
            <div className='digit-hour oswald-700 text-9xl drop-shadow-2xl'>{secondsLeft}</div>
            <p>Segons</p>
          </div>
        </div>
        <p className='opacity-85'>El compte enrere finalitza el <span className='text-red-700'>{dateEnd}</span></p>
      </>
      }
      {tip === 3 && 
        <>
        <div className='flex flex-row rounded-md  mx-16 '>
          <div className='flex flex-col px-2 '>
            <div className='digit-hour oswald-700 text-9xl drop-shadow-2xl'>{hoursLeft}</div>
            <p>Hores</p>
          </div>
          <div className='oswald-700 text-9xl drop-shadow-7xl translate-y-[-10%]'><p>:</p></div>

          <div className='flex flex-col px-2 border-black '>
            <div className='digit-hour oswald-700 text-9xl drop-shadow-2xl'>{minutesLeft}</div>
            <p>Minuts</p>
          </div>
          <div className='oswald-700 text-9xl drop-shadow-7xl translate-y-[-10%]'><p>:</p></div>

          <div className='flex flex-col px-2 border-black '>
            <div className='digit-hour oswald-700 text-9xl drop-shadow-2xl'>{secondsLeft}</div>
            <p>Segons</p>
          </div>
        </div>
        <p className='opacity-85'>El compte enrere finalitza el <span className='text-red-700'>{dateEnd}</span></p>
      </>
      }
      {tip !== 1 && tip !== 2 && tip !== 3 && 
        <div>
          Notype set
        </div>}
    </>
  )
}

export default CounterActivity
