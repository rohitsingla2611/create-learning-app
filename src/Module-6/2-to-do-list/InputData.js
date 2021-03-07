import React, { Component } from "react";

import "./inputData.css";

class InputData extends Component {
  state = {
    inputValue: "",
    buttonValue: "ADD LIST",
    list: [],
    listIndexValue: -1,
  };

  onInputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  listTogglerHandler(inputValue) {
    if (this.state.buttonValue == "ADD LIST") {
      this.onSaveInputHandler(inputValue);
    } else {
      this.onUpdateListData(inputValue);
    }
  }

  onUpdateListData(inputValue) {
    let listIndex = this.state.listIndexValue;
    const updatedList = [...this.state.list];
    updatedList[listIndex] = inputValue;
    this.setState({
      list: updatedList,
      buttonValue: "ADD LIST",
      inputValue: "",
      listIndexValue: -1,
    });
  }

  onSaveInputHandler(inputValue) {
    let newList = [...this.state.list, inputValue];
    this.setState({
      list: newList,
      inputValue: "",
    });
  }

  onDeleteListHandler(listIndex) {
    const updatedList = [...this.state.list];
    updatedList.splice(listIndex, 1);
    this.setState({
      list: updatedList,
    });
  }

  onEditListHandler(listIndex) {
    let listValue = this.state.list[listIndex];
    console.log();
    this.setState({
      buttonValue: "UPDATE LIST",
      inputValue: listValue,
      listIndexValue: listIndex,
    });
  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          onChange={(event) => this.onInputChangeHandler(event)}
          value={this.state.inputValue}
        />
        <button onClick={() => this.listTogglerHandler(this.state.inputValue)}>
          {this.state.buttonValue}
        </button>
        <ul>
          {this.state.list.map((value, index) => (
            <li key={index}>
              <h2>{value}</h2>
              <button
                className=""
                onClick={() => this.onDeleteListHandler(index)}
              >
                ×
              </button>
              <button onClick={() => this.onEditListHandler(index)}>
                EDIT{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default InputData;
