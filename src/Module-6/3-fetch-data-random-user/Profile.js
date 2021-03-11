import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <li className={this.props.gender} >
        <img src={this.props.image} alt={this.props.name} />
        <div className="container-box">
          <h4>
            Name : {this.props.firstName} {this.props.lastName}
          </h4>
          <h4>Phone : {this.props.phone} </h4>
          <h4>Email : {this.props.email} </h4>
          <h4>Username : {this.props.username} </h4>
          <h4>Country : {this.props.country} </h4>
          <h4>State : {this.props.state} </h4>
          <h4>City : {this.props.city} </h4>
        </div>
      </li>
    );
  }
}

export default Profile;
