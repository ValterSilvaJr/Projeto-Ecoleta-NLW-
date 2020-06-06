import React from '../node_modules/@types/react';
import './App.css';
import Routes from './routes';


// JSX Sintaxe de XML dentro do JavaScript

function App() {
  //#region Exemplo de mutabilidade em componentes (toda a base do react)
  // const [counter, setCounter] = useState(0);
  // function handleButtonClick(){
  //   setCounter(counter + 1);
  // }
  //#endregion

  return (
    //#region Exemplo
    // <div>
    //   <Header title={`Contador: ${counter + 1} `} />
    //   <h1>{counter}</h1>
    //   <h1>{counter * 2}</h1>
    //   <button type="button" onClick={handleButtonClick}>Aumentar</button>
    // </div>
    //#endregion
    <Routes />
  );
}

export default App;
