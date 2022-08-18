import "./App.css";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {

  //usar hooks en react: useState
  // el primer parametro es a que le queremos cambiar el estado
  // el segundo parametro es la funcion que nos permitira cambiar el
  // estado de el elemento pasado como primer parametro

  const [numClicks, setNumLCicks] = useState(0);

  const handleClick = () => {
    setNumLCicks(numClicks + 1);
  };

  const handleRestart = () => {
    setNumLCicks(0);
  };

	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img 
          className="freecodecamp-logo" 
          src={freeCodeCampLogo}
          alt="Logo de freecodecamp" />
			</div>
      <div className="contenedor-principal">
        <Counter numClicks={numClicks}/>
        <Button
          text="Clic"
          isClickButton={true}
          handleClick={handleClick} />
        <Button
          text="Restart"
          isClickButton={false}
          handleClick={handleRestart} />
      </div>
		</div>
	);
}

export default App;
