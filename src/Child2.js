import React, { Component } from "react";
import Child3 from "./Child3";
import Child4 from "./Child4";

import "./child2.css";

class Child2 extends Component {
  constructor() {
    super();
    this.state = {
      triggeredByChild3: false,
      child3Value: "",
      child4Value: ""
    };
  }

  onClickChild3 = () => {
    this.setState({ triggeredByChild3: true });
  };

  componentDidMount() {
    setTimeout(() => this.props.triggerParent(), 2000);
  }

  handleChangeChilds = e => {
    switch (e.target.name) {
      case "changeChild4": {
        this.setState({ child4Value: e.target.value });
        break;
      }
      case "changeChild3": {
        this.setState({ child3Value: e.target.value });
        break;
      }
    }
  };

  render() {
    return (
      <div className="root2">
        <p>Child2</p>
        <p>{this.props.triggered ? "triggered by root" : ""}</p>
        <p>{this.state.triggeredByChild3 ? "triggered by Child3" : ""}</p>
        <input onChange={this.props.handleChange} />
        <div className="children">
          {/* Child to parent 1st approach: event bubbling */}
          {/* Sibling to Sibling approach: Parent component */}
          <Child3
            onClickChild3={this.onClickChild3}
            handleChange={this.handleChangeChilds}
            value={this.state.child3Value}
          />
          <Child4
            handleChange={this.handleChangeChilds}
            value={this.state.child4Value}
          />
        </div>
      </div>
    );
  }
}

export default Child2;
