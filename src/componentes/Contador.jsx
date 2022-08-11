import React, { useState } from 'react'

export const Contador = () => {
    let inicial = 0
    const [contador, setContador] = useState(inicial)
    return (
        <>
            <label>Contador: {contador}</label>

            <button onClick={() => setContador(contador + 1)}>+</button>
            <button>-</button>
            <button>Reset</button>
        </>
    )
}
// onClick={setContador(contador++)}

// Tarea, realizar la resta y el reset