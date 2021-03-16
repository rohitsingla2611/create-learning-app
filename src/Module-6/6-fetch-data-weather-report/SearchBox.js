import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="inputValue"
            placeholder="SEARCH BY CITY"
            onChange={this.props.onChange}
            value={this.props.inputValue}
          />
          <button
            type="submit"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <img
              src={require("./images/icons/searchIcon.svg")}
              height="25px"
              width="25px"
              alt=""
            />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
