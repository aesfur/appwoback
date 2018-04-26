import React, {Component} from 'react';
import {connect} from "react-redux";

class Profile extends Component {
  
  render() {
    return (
      <div className="page">
        <h4 className="card-title text-muted float-md-left">Profile</h4>
        <table className="table table-dark mx-auto">
          <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.props.user.firstname}</td>
            <td>{this.props.user.lastname}</td>
            <td>{this.props.user.username}</td>
            <td>{this.props.user.email}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {user} = state.authentication;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
