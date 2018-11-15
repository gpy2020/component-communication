import React, { Component } from "react";
import { Context1 } from "./App";

class Child1 extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      globalText: ""
    };
  }

  someFunc = () => {
    this.setState({ text: "triggered by root" });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>Child1</p>
        <p>{this.state.text ? this.state.text : ""}</p>
        <p>{window.triggerChild1 ? "triggered by Child3" : ""}</p>
        <Context1.Consumer>
          {context => {
            return <p>Value from context: {context}</p>;
          }}
        </Context1.Consumer>
        {/* <p>text from context: {this.context ? this.context : ""}</p> */}
      </div>
    );
  }
}

export default Child1;
