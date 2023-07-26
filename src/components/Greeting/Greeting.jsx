import React, { useEffect, useState } from 'react'

 const Greeting = () => {
    const [nombre, setNombre] = useState('Euralio');
    useEffect(()=>{
        setTimeout(()=>{
            setNombre("Alfonsina");
        },3000)
    })
  return (
    <div>
        <p>Hola {nombre}</p>
    </div>
  )
}
export default Greeting;