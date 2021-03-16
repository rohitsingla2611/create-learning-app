import React, { Component } from "react";

class LoginBox extends Component {
  state = {
    inputValueUserName: "",
    inputValuePassword: "",
  };
  onInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  onLoggingIn(event) {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    console.log("password", password);
    console.log("userName", userName);
    const inputUserName = this.state.inputValueUserName;
    const inputPassword = this.state.inputValuePassword;
    if (inputUserName == userName && password == inputPassword) {
      this.setState({
        checkLoginStatus: true,
      });
      console.log("Welcome");
    } else {
      console.log("Incorrect Password");
    }
    localStorage.setItem("statusLogin", "true");

    event.preventDefault();
  }
  render() {
    const inputValueUserName = this.state.inputValueUserName;
    const inputValuePassword = this.state.inputValuePassword;
    return (
      <div className="box-0">
        <form onSubmit={(event) => this.onLoggingIn(event)}>
          <input
            type="text"
            value={inputValueUserName}
            name="inputValueUserName"
            placeholder="Enter Username"
            onChange={(event) => this.onInputChange(event)}
          />
          <input
            type="text"
            value={inputValuePassword}
            name="inputValuePassword"
            placeholder="Enter Password"
            onChange={(event) => this.onInputChange(event)}
          />
          <button type="submit">Login </button>
        </form>
      </div>
    );
  }
}

export default LoginBox;
