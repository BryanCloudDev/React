// import React from "react";
//no es obligatorio importar react, solo si se usan hooks
import "../styles/Testimony.css"

function Testimony(props) {
	return (
		<div className="contenedor-testimonio">
			<div className="img-container">
				<img
					className="imagen-testimonio"
					src={require(`../images/${props.img}.png`)}
					alt={`Testimony from ${props.name}`} 
				/>
			</div>
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">
					<strong>{props.name}</strong> in {props.country}
				</p>
				<p className="cargo-testimonio">
					{props.position} at <strong>{props.company}</strong>
				</p>
				<p className="texto-testimonio">
					"{props.testimony}"
				</p>
			</div>
		</div>
	);
}

export default Testimony;
