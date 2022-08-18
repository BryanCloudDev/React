import React from "react";
import "./App.css";
import Testimony from "./components/Testimony.js";
import users from "./users";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="contenedor-principal">
					<h1>Here is what our alumni say about freeCodeCamp:</h1>
						<Testimony 
							name={users.emma.name}
							country={users.emma.country}
							img={users.emma.img}
							position={users.emma.position}
							company={users.emma.company}
							testimony={users.emma.testimony} />
						<Testimony 
							name={users.shawn.name}
							country={users.shawn.country}
							img={users.shawn.img}
							position={users.shawn.position}
							company={users.shawn.company}
							testimony={users.shawn.testimony} />
						<Testimony 
							name={users.sarah.name}
							country={users.sarah.country}
							img={users.sarah.img}
							position={users.sarah.position}
							company={users.sarah.company}
							testimony={users.sarah.testimony} />
				</div>
			</div>
		);
	}
}

export default App;
