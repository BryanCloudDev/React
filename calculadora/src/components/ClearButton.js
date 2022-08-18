import React from "react";
import "../styles/ClearButton.css";

const ClearButton = (props) => {

  const clearInput = (fn) => {
    fn('');
  };

	return (
    <div 
    className="boton-clear"
    onClick={() => clearInput(props.clearInput)}>{props.children}</div>
    );
};

export default ClearButton;
