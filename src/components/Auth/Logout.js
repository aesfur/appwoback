import React, {Component} from 'react';
import {userActions} from "../../actions/user.actions";
import {connect} from "react-redux";

class Logout extends Component {
  
  componentDidMount() {
    this.props.dispatch(userActions.logout());
  }
  
  render() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }
}

export default connect(null)(Logout);