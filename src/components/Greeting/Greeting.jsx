import React, { useEffect, useState } from 'react'

 const Greeting = (props) => {
    const [nombre, setNombre] = useState(props.name);
    useEffect(()=>{
        setTimeout(()=>{
            setNombre(props.nameChanged);
        },3000)
    })
  return (
    <div>
        <p>Hola {nombre}</p>
    </div>
  )
}
export default Greeting;