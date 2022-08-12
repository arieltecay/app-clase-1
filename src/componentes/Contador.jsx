import React, { useState } from 'react'
// import { useRef } from 'react/cjs/react.production.min'

export const Contador = () => {
    // let inicial = 0
    const [contador, setContador] = useState(0)
    const [form, setForm] = useState("")
    const [toggle, setToggle] = useState(false)
    // const title = useRef
    const sumar = () => {
        console.log(contador);
        setContador((contador) => contador + 1)
    }
    const restar = () => {
        console.log(contador);
        setContador((contador) => contador < 0 ? contador = 0 : contador - 1)
    }
    const reset = () => {
        setContador(0)
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        e.preventDefault()
        setForm(e.target.value)
    }
    const handleToggle = () => {
        console.log('Toggle');
        setToggle(!toggle)
    }
    return (
        <>
            <label>{contador >= 0 ? contador : 'No se pueden ingresar Negativos'}</label><br></br>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>Reset</button>
            <div>
                <input type="text" placeholder='Nombre' value={form} onChange={handleChange} />
                <div>{form}</div>
            </div>
            <div>
                <button onClick={handleToggle}>
                    Toggle
                </button>
                {!toggle ? 'Loading' : (<div>
                    Verdadero
                    <h1>h1</h1>
                    <h1>h2</h1>
                    <h1>h3</h1>
                    <h1>h4</h1>
                    <h1>h5</h1>
                    <h2>{contador}</h2>
                    <div>{form}</div>
                </div>)}
            </div>
        </>
    )
}
// onClick={setContador(contador++)}

// Tarea, realizar la resta y el reset