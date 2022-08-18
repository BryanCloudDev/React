import React from "react";
import '../styles/Button.css'

//diferente de usar props podemos usar la deestruturacion

function Button({ text, isClickButton, handleClick }) {
  return (
    <button
      className={ isClickButton ? "boton-click" : "boton-reiniciar" }
      onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;