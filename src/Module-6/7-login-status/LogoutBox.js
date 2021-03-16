import React, { Component } from "react";

class LogoutBox extends Component {

    onLogoutHandler(event) {
        console.log("onLogoutHandler");
        this.setState({
          checkLoginStatus: false,
        });
        event.preventDefault();
        localStorage.setItem("statusLogin", "false");
      }

  render() {
    return (
      <div>
        <h1>Welcome You are Good to Go</h1>
        <form onSubmit={(event) => this.onLogoutHandler(event)}>
          <button type="submit">Logout </button>
        </form>
      </div>
    );
  }
}

export default LogoutBox;
