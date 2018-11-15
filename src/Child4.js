import React, { Component } from "react";
import { Context1 } from "./App";

class Child4 extends Component {
  render() {
    return (
      <div>
        <p>Child4</p>
        <p>Value from Child3: {this.props.value}</p>
        <Context1.Consumer>
          {context => <p>Value from context: {context}</p>}
        </Context1.Consumer>
        <input onChange={this.props.handleChange} name="changeChild3" />
      </div>
    );
  }
}

export default Child4;
