import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class Menu extends Component {
  
  authMenu() {
    if (this.props.user) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout ({this.props.user.username})</Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      );
    }
  }
  
  render() {
    if (this.props.user) {
    
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">AppWoBack</Link>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Contacts List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            {this.authMenu()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const {user} = state.authentication;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Menu);