
import './App.css';
import Propiedades from './Propiedades';



export default function App() {
  /*   const nombre = "Ariel";
    const id = 25
    const condicion = false */
  return (
    <>
      <Propiedades
        cadena='Cadena de Texto'
        number={20}
        booleano={false}

      />
      {/*       <img alt="1" />
      <img alt='2'></img>
      <input type="text" />
      <h1 id={id}>Nombre: {nombre}</h1>
      <h1 id={id}>Suma {1 + 1}</h1>
      <h1>{condicion ? <div>True</div> : ''} </h1> */}

    </>
  );
}

/* const App = () => {
  const nombre = "Ariel";
  const id = 25
  const condicion = false
  return (
    <div>
      <img alt="1" />
      <img alt='2'></img>
      <input type="text" />
      <h1 id={id}>Nombre: {nombre}</h1>
      <h1 id={id}>Suma {1 + 1}</h1>
      <h1>{condicion ? <div>True</div> : ''} </h1>

    </div>
  );
} */

/* export default class App extends React.Component {
  // constructor
  render() {
    const nombre = "Ariel";
    const id = 25
    const condicion = false
    return (<div>
      <img alt="1" />
      <img alt='2'></img>
      <input type="text" />
      <h1 id={id}>Nombre: {nombre}</h1>
      <h1 id={id}>Suma {1 + 1}</h1>
      <h1>{condicion ? <div>True</div> : ''} </h1>

    </div>)
  }
} */

// export default App;