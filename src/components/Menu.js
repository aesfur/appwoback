import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
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
			    </ul>
		    </div>
	    </nav>
    );
  }
}
