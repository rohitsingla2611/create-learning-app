import React from "react";
import { Component } from "react";
import Profile from "./Profile";
import "./FetchData.css";
import { Fragment } from "react";

class FetchData extends Component {
  state = {
    list: [],
    upList: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers() {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          list: [...this.state.list, ...result.results],
        });
      });
  }

  fetchUsersUpdate() {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          list: [...this.state.list, ...result.results],
        });
      })
      ;
  }

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.list.map((data) => (
            <Profile
              key={data.login.username}
              image={data.picture.large}
              gender={data.gender}
              firstName={data.name.first}
              lastName={data.name.last}
              phone={data.phone}
              email={data.email}
              username={data.login.username}
              country={data.location.country}
              state={data.location.state}
              city={data.location.city}
            />
          ))}
        </ul>
        <button
          onClick={() => {
            this.fetchUsers();
          }}
        >
          NEXT
        </button>
      </Fragment>
    );
  }
}

export default FetchData;
