import React, { Component, Fragment } from "react";
import { convertTemperature, toCelsius, toFarhenheit } from "./calculateTemp";
import Child from "./Child";
import WeatherText from "./WeatherText";

class Parent extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  onSetCelsiusTempHandler(temperature) {
    this.setState({
      temperature,
      scale: "c",
    });
  }

  onSetTempFahrenHandler(temperature) {
    this.setState({
      temperature,
      scale: "f",
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === "f" ? convertTemperature(temperature, toCelsius) : temperature;
    const farhenheit =
      scale === "c"
        ? convertTemperature(temperature, toFarhenheit)
        : temperature;
    return (
      <Fragment>
        <WeatherText inputValue={celsius} />

        <Child
          text="Celsius"
          inputValue={celsius}
          setValue={(val) => this.onSetCelsiusTempHandler(val)}
        >
          <h2>Wish you Great Day Ahead</h2>
          <h3>I am children of Child Component</h3>
        </Child>
        <Child
          text="Fahrenheit"
          inputValue={farhenheit}
          setValue={(val) => this.onSetTempFahrenHandler(val)}
        >
          <h2>This is Composition</h2>
          <h3>I am children of Child Component</h3>
        </Child>
      </Fragment>
    );
  }
}

export default Parent;
