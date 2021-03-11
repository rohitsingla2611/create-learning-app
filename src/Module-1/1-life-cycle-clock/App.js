import React, { Component } from "react";

class App extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    console.log("componentDidMount before interval");
    this.interval = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount after interval");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount before clear interval");
    clearInterval(this.interval);
    console.log("componentWillUnmount after clear interval");
  }

   tick = () => {
    console.log("tick Method before setState ");
    this.setState({
      date: new Date(),
    });
    console.log("tick Method after setState ");
  };

  render() {
    console.log("render method");

    return (
      <div>
        <h1> Clock Timer</h1>
        <h2>
          {console.log("Time Print")}
          {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

export default App;
