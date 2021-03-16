import React, { Component } from "react";
import SearchBox from "./SearchBox";
// import FetchData fro m "./FetchData";

class InteractiveView extends Component {
  state = {
    inputValue: "",
    list: [],
  };

  // Temp Data Start
  //   state = {
  //     list: [],
  //   };

  fetchUsers(input) {
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=ludhiana&appid=4b9c4abbeba4d3ce6eab331d3efeaa6f`
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
  // Temp Data End
  onInputChangeHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onInputSubmitHandler(event) {
    this.fetchUsers(this.state.inputValue);
    console.log("Welcome eeded ", this.state.list);
    event.preventDefault();
  }
  render() {
    let inputVal = this.state.inputValue;
    console.log(this.state);
    return (
      <div>
        {/* <SearchBox
          inputValue={inputVal}
          onChange={(e) => this.onInputChangeHandler(e)}
          onSubmit={(event) => this.onInputSubmitHandler(event)}
        /> */}
        {/* <FetchData
          inputValue={inputVal}
            onSubmit={() => this.onInputSubmitHandler()}
        /> */}
      </div>
    );
  }
}

export default InteractiveView;
