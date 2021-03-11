import React, { Component, Fragment } from "react";
import "./FetchData.css";
import Profile from "./Profile";

class FetchData extends Component {
  state = {
    list: [],
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

  render() {
    const inputValue = this.props.inputValue.toUpperCase();
    const selectValue = this.props.selectValue.toLowerCase();
    return (
      <Fragment>
        <ul>
          {this.state.list
            .filter((data) => {
              const name = (
                data.name.first +
                " " +
                data.name.last
              ).toUpperCase();
              const gender = data.gender;
              if (inputValue === "") {
                if (selectValue === "all") {
                  console.log("All", selectValue);
                  return data;
                } else if (selectValue === "male" && gender === "male") {
                  return data;
                } else if (selectValue === "female" && gender === "female") {
                  return data;
                }
              } else if (name.includes(inputValue)) {
                if (selectValue === "all") {
                  console.log("All", selectValue);
                  return data;
                } else if (gender === "male" && selectValue === "male") {
                  return data;
                } else if (gender === "female" && selectValue === "female") {
                  return data;
                }
              }
              return null;
            })
            .map((data) => (
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
