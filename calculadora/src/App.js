import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  };

	const calculateResult = () => {
		if(input) {
			setInput(evaluate(input));
		} else {
			alert("Please enter information in order to calculate");	
		}
	}

	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img 
          src={freeCodeCampLogo} 
          className="freecodecamp-logo" 
          alt="Logo de freecodecamp" />
			</div>
			<div className="contenedor-calculadora">
				<Screen input={input} />
				<div className="fila">
					<Button handleClick={addInput}
            >1</Button>
					<Button handleClick={addInput}
            >2</Button>
					<Button handleClick={addInput}
            >3</Button>
					<Button handleClick={addInput}
            >+</Button>
				</div>
				<div className="fila">
					<Button handleClick={addInput}
            >4</Button>
					<Button handleClick={addInput}
            >5</Button>
					<Button handleClick={addInput}
            >6</Button>
					<Button handleClick={addInput}
            >-</Button>
				</div>
				<div className="fila">
					<Button handleClick={addInput}
            >7</Button>
					<Button handleClick={addInput}
            >8</Button>
					<Button handleClick={addInput}
            >9</Button>
					<Button handleClick={addInput}
            >*</Button>
				</div>
				<div className="fila">
					<Button handleClick={calculateResult}
            >=</Button>
					<Button handleClick={addInput}
            >0</Button>
					<Button handleClick={addInput}
            >.</Button>
					<Button handleClick={addInput}
            >/</Button>
				</div>
				<div className="fila">
					<ClearButton
						clearInput={setInput}>Clear</ClearButton>
				</div>
			</div>
		</div>
	);
}

export default App;
