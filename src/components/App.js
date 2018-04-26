import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from "./Menu";
import ContactsList from "./ContactsList";
import Profile from "./Profile";
import ContactsAdd from "./ContactsAdd";

export default class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<Switch>
					<Route exact path="/" component={ContactsList}/>
					<Route exact path="/profile" component={Profile}/>
          <Route exact path="/contacts/add" component={ContactsAdd}/>
				</Switch>
			</div>
		);
	}
}