import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';
import {connect} from "react-redux";

import Menu from "./Menu";
import ContactsList from "./Contacts/ContactsList";
import Profile from "./Profile";
import ContactsAdd from "./Contacts/ContactsAdd";
import {alertActions} from "../actions/alert.actions";
import Login from "./Auth/Login";
import {history} from '../helpers/history';
import {PrivateRoute} from "./Auth/PrivatRoute";
import Registration from "./Auth/Registration";
import Logout from "./Auth/Logout";

class App extends Component {
  constructor(props) {
    super(props);
    
    const {dispatch} = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  
  render() {
    const {alert} = this.props;
    return (
      <div>
        <Router history={history}>
          <div>
            <Menu/>
            <div className="notification">
              {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
            </div>
            <PrivateRoute exact path="/" component={ContactsList}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/register" component={Registration}/>
            <PrivateRoute exact path="/contacts/add" component={ContactsAdd}/>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);