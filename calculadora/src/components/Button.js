import React from "react";
import "../styles/Button.css"

//children se usa cuando queremos pasar otros parametros
// a la funcion abriendo y cerrando una etiqueta
function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== ".") && (value !== "=");
  }
  return (
    <div
    className={`boton-contenedor ${isOperator(props.children)  ? "operator" : ''}`.trimEnd()}
    onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;