import React, { Component } from "react";
import FetchData from "./FetchData";
import SearchBox from "./SearchBox";

class UserInterface extends Component {
  state = {
    inputValue: "",
    selectValue: "ALL",
  };

  onInputChangeHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value,
    });
  }

  render() {
    let inputVal = this.state.inputValue;
    let selectedVal = this.state.selectValue;
    return (
      <div>
        <SearchBox
          inputValue={inputVal}
          selectValue={selectedVal}
          onChange={(e) => this.onInputChangeHandler(e)}
        />
        <FetchData inputValue={inputVal} selectValue={selectedVal} />
      </div>
    );
  }
}

export default UserInterface;
