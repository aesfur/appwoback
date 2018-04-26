import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContacts } from "../../actions/contacts.actions";

class ContactsList extends Component {
  componentDidMount() {
    if (!this.props.contacts.length){
      this.props.getContacts();
    }
  }
 
	renderRow() {
		return this.props.contacts.map((contact) => {
			return (
				<tr key={contact.id}>
					<td>{contact.first}</td>
					<td>{contact.last}</td>
					<td>{contact.number}</td>
				</tr>
			);
		});
	}
	
	render() {
		return (
			<div className="page">
				<h4 className="card-title text-muted float-md-left">Contacts</h4>
        <div className="float-md-right">
          <Link className="btn btn-dark" to="/contacts/add">
            Add Contact
          </Link>
        </div>
				<table className="table table-dark mx-auto">
					<thead>
						<tr>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Number</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRow()}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	};
}

export default connect(mapStateToProps, { getContacts })(ContactsList);