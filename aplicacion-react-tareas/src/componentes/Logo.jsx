import React from "react";
import "../styles/Logo.css"
import freeCodeCampLogo from "../img/freecodecamp-logo.png";

function Logo() {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Freecodecamp logo" 
        />
      </div>
  );
}

export default Logo;