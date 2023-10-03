import './App.css';
import logopropio from './imagenes/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState  } from 'react';

function App() {

  const[numClics,setNumClics] = useState(0);
  
  const manejarClic =() => {
    setNumClics(numClics+1);
    console.log("Clic");
  };

  const reiniciarContador =()=>{
    setNumClics(0);
    console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logopropio}
        alt='Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numClics}/>
        <Boton
           texto='Clic'
           esBotonDeclic={true}
           manejarClic={manejarClic}/>
        <Boton
         texto='Reiniciar'
         esBotonDeclic={false}
         manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
