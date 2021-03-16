import React, { Component } from "react";

class InteractiveView extends Component {
  state = {
    inputValueUserName: "",
    inputValuePassword: "",
    checkLoginStatus: "false",
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
    const inputUserName = this.state.inputValueUserName;
    const inputPassword = this.state.inputValuePassword;
    if (inputUserName === userName && password === inputPassword) {
      this.setState({
        checkLoginStatus: "true",
      });

      localStorage.setItem("statusLogin", "true");
    }
    event.preventDefault();
  }

  onLogoutHandler(event) {
    this.setState({
      checkLoginStatus: "false",
    });
    localStorage.setItem("statusLogin", "false");

    event.preventDefault();
  }

  componentDidMount() {
    localStorage.setItem("userName", "iotasol");
    localStorage.setItem("password", "admin");
    this.callTo();
  }

  callTo() {
    const login = localStorage.getItem("statusLogin");
    this.setState({
      checkLoginStatus: login,
    });
  }
  render() {
    const inputValueUserName = this.state.inputValueUserName;
    const inputValuePassword = this.state.inputValuePassword;
    const checkLoginStatus = this.state.checkLoginStatus;
    return (
      <div>
        {checkLoginStatus === "true" ? (
          <div>
            <h1>Welcome You are Good to Go</h1>
            <form onSubmit={(event) => this.onLogoutHandler(event)}>
              <button type="submit">Logout </button>
            </form>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}

export default InteractiveView;
