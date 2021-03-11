import React, { Component, Fragment } from "react";

class WeatherText extends Component {
  render() {
    let temperature = this.props.inputValue;
    let message;

    if (temperature === "") {
      message = "";
    } else if (temperature >= 37.5) {
      message = "Broiling Hell";
    } else if (temperature >= 24) {
      message = "Hot";
    } else if (temperature >= 20) {
      message = "Mild";
    } else if (temperature >= 17) {
      message = "Cool";
    } else if (temperature >= 12) {
      message = "Cold";
    } else {
      message = "Freezing ";
    }

    return (
      <Fragment>
        <div>
          <h1>Weather is {message}</h1>
        </div>
      </Fragment>
    );
  }
}

export default WeatherText;
