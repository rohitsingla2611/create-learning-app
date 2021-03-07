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
    console.log(" render called");

    return (
      <main>
        <Counter
          counterValue={this.state.counter}
          counterValueClick={this.incrementCounterHandler}
        />
      </main>
    );
  }
}

export default App;
