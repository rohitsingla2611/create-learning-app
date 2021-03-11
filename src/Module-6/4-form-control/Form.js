import React, { Component, Fragment } from "react";

class Form extends Component {
  state = {
    isGoing: false,
    numberOfGuests: 2,
  };

  onInputChangeHandler = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log("target", target);
    console.log("[name]", [name]);
    console.log("name", name);
    console.log("value", value);

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={(event) => this.onInputChangeHandler(event)}
          />
          <input
            type="number"
            min={2}
            max={10}
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={(event) => this.onInputChangeHandler(event)}
          />
        </div>
      </Fragment>
    );
  }
}

export default Form;
