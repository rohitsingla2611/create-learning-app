import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  state = {
    counter: 0,
  };
  incrementCounterHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    let counter = this.state.counter;
    return (
      <main>
        <Counter
          counterValue={counter}
          counterValueClick={this.incrementCounterHandler}
        />
      </main>
    );
  }
}

export default App;
