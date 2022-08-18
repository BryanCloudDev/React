import React from "react";
import "../styles/Counter.css"

class Counter extends React.Component {
  render() {
    return (
      <div className="contador">
        {this.props.numClicks}
      </div>
    );
  }
}

export default Counter;