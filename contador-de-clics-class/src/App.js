import "./App.css";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import React from "react";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  };

  handleClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  };

  handleRestart() {
    this.setState({ numClicks: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img 
            className="freecodecamp-logo" 
            src={freeCodeCampLogo}
            alt="Logo de freecodecamp" />
        </div>
        <div className="contenedor-principal">
          <Counter numClicks={this.state.numClicks}/>
          <Button
            text="Clic"
            isClickButton={true}
            handleClick={this.handleClick} />
          <Button
            text="Restart"
            isClickButton={false}
            handleClick={this.handleRestart} />
        </div>
      </div>
    );
  };
}

export default App;
