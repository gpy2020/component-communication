import React, { Component } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

export const Context1 = React.createContext();

class App extends Component {
  constructor() {
    super();

    this.state = {
      child2Triggered: false,
      triggered: false,
      child1ContextText: "something"
    };
  }

  handleChangeChild2 = e => {
    this.setState({ child1ContextText: e.target.value });
  };

  triggerChild1 = () => {
    this.method.someFunc();
  };

  triggerChild2 = () => {
    this.setState({ child2Triggered: true });
  };

  triggeredByChild2 = () => {
    this.setState({ triggered: true });
  };

  render() {
    return (
      <div className="App">
        <p>Root</p>
        <p>{this.state.triggered ? "triggered by Child2 mounting" : ""}</p>
        <input />
        <button onClick={this.triggerChild1}>Trigger Child1</button>
        <button onClick={this.triggerChild2}>Trigger Child2</button>
        <div className="children">
          {/* Any to any 2nd approach: context */}
          <Context1.Provider value={this.state.child1ContextText}>
            {/*Parent to child 1st approach: Instance method */}
            <Child1
              ref={method => {
                this.method = method;
              }}
            />
            <Child2
              triggered={this.state.child2Triggered}
              triggerParent={this.triggeredByChild2}
              handleChange={this.handleChangeChild2}
            />
          </Context1.Provider>
          {/* Parent to child 2nd approach: props*/}
          {/* Child to parent 2nd approach: callback functions */}
        </div>
      </div>
    );
  }
}

export default App;
