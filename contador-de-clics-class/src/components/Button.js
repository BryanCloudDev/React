import React from "react";
import "../styles/Button.css";

class Button extends React.Component {
  render() {
    return (
      <button 
      className={this.props.isClickButton ? "boton-click" : "boton-reiniciar"} 
      onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

//diferente de usar props podemos usar la deestruturacion

export default Button;
