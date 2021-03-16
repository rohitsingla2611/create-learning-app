import React, { Component } from "react";
import Child from "./Child";
import Parent from "./Parent";

class App extends Component {
  render() {
    return (
      <main>
        <Parent >
            <Child/>
            <Child/>
        </Parent>
      </main>
    );
  }
}

export default App;
