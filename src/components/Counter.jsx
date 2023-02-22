import React, { useState, useEffect } from 'react'

const Counter = () => {

  let fechaActual = new Date();
  let fechaMundial = new Date('2026-06-04');

  let diferencia = fechaMundial.getTime() - fechaActual.getTime();

  let segundos = Math.floor(diferencia / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  // let meses = Math.floor(dias / 30);
  // let anios =  Math.floor(meses / 12);

  horas %= 24;
  minutos %= 60;
  segundos %= 60;

  // const [years, setYears] = useState(anios);
  // const [months, setMonths] = useState(meses);

  const [days, setDays] = useState(dias);
  const [hours, setHours] = useState(horas);
  const [minutes, setMinutes] = useState(minutos);
  const [seconds, setSeconds] = useState(segundos);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(59);
      setMinutes(prevMinutes => prevMinutes - 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes < 0) {
      setMinutes(59);
      setHours(prevHours => prevHours - 1);
    }
  }, [minutes]);


  return (
    <div className='counter'>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content sombra">
          <span className="countdown font-mono text-5xl">
            {days}
          </span>
          Días
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content sombra">
          <span className="countdown font-mono text-5xl">
            {hours}
          </span>
          Horas
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content sombra">
          <span className="countdown font-mono text-5xl">
            {minutes}
          </span>
          Min
        </div> 
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content sombra">
          <span className="countdown font-mono text-5xl">
            {seconds}
          </span>
          Seg
        </div>
      </div>
    </div>
  )
}

export default Counter
