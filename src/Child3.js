import React, { Component } from "react";

class Child3 extends Component {
  triggerChild1 = () => {
    window.triggerChild1 = true;
  };

  render() {
    return (
      <div>
        <p>Child3</p>
        <p>Value from Child4: {this.props.value}</p>
        <button onClick={this.props.onClickChild3}>trigger Child2</button>
        {/* Any to any 1st approach: global variables  */}
        <button onClick={this.triggerChild1}>Trigger Child1</button>
        <input onChange={this.props.handleChange} name="changeChild4" />
      </div>
    );
  }
}

export default Child3;
