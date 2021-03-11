import React, { Component } from "react";

class Child extends Component {
  onInputChange(event) {
    const inputVal = event.target.value;
    this.props.setValue(inputVal);
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in {this.props.text}</legend>
          <input
            type="number"
            value={this.props.inputValue}
            onChange={(event) => this.onInputChange(event)}
          />
        </fieldset>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Child;
