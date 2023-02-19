import React, { useState } from 'react'

const Form = () => {

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setStatus(e.target.value)
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log("Enviado");
  }

  return (
    <div>
      <h4>Escriba su estado: </h4>
      <input onChange={handleChange} />
      <p>Su estado es: {status}</p>

      <br />

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <select name="" id=""></select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form