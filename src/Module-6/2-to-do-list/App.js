import React from "react";
import { Component } from "react";
import "./App.css";
import TODOList from "./TODOList";

class App extends Component {
  render() {
    return (
      <main>
        <TODOList />
      </main>
    );
  }
}

export default App;
