import React, { Component } from "react";

class FetchData extends Component {
  state = {
    list: [],
  };

  fetchUsers(input) {
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=0501bb922994503a0ecc3b64ad266b6c`
    // )
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=31.6331&lon=74.8656&exclude=hourly,minutely,current&appid=0501bb922994503a0ecc3b64ad266b6c`
    )
      .then((result) => result.json())
      .then((result) =>
        this.setState({
          list: result,
        })
      );
  }
  
  render() {
    const inputValue = this.props.inputValue;
    
    // const onSubmit = this.props.onSubmit;
    return <div></div>;
  }
}

export default FetchData;
