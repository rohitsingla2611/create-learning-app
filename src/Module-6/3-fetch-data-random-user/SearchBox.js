import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          name="inputValue"
          type="text"
          onChange={this.props.onChange}
          value={this.props.inputValue}
        />
        <select
          name="selectValue"
          onChange={this.props.onChange}
          value={this.props.selectValue}
        >
          <option>ALL</option>
          <option>MALE</option>
          <option>FEMALE</option>
        </select>
      </div>
    );
  }
}

export default SearchBox;
