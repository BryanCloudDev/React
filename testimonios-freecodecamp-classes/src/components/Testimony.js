import React from "react";
//no es obligatorio importar react, solo si se usan hooks
import "../styles/Testimony.css"

class Testimony extends React.Component {
	// constructor(props){
	// 	super(props);
	// }
	render() {
		return (
			<div className="contenedor-testimonio">
				<div className="img-container">
					<img
						className="imagen-testimonio"
						src={require(`../images/${this.props.img}.png`)}
						alt={`Testimony from ${this.props.name}`} 
					/>
				</div>
				<div className="contenedor-texto-testimonio">
					<p className="nombre-testimonio">
						<strong>{this.props.name}</strong> in {this.props.country}
					</p>
					<p className="cargo-testimonio">
						{this.props.position} at <strong>{this.props.company}</strong>
					</p>
					<p className="texto-testimonio">
						"{this.props.testimony}"
					</p>
				</div>
			</div>
		);
	}
}

export default Testimony;
