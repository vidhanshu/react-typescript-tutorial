import React, { Component } from "react";

type counterProps = any;
type counterState = {
  count: number;
};
export class ClassCounter extends Component<counterProps, counterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h3 > count: {this.state.count}</h3>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    );
  }
}

export default ClassCounter;
