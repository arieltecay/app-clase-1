import React from 'react'


const Propiedades = (props) => {
    console.log(props);
    return (
        <>
            <p>{props.cadena}</p>
            <p>{props.number}</p>
            <p>{props.booleano}</p>
        </>
    )
}

export default Propiedades