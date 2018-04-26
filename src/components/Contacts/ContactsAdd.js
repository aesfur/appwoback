import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactsAdd } from "../../actions/contacts.actions";
import getMaxId from "../../helpers/helpers";

class ContactsAdd extends Component {
  
  static renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  
  onSubmit(values) {
    values["id"] = getMaxId(this.props.contacts);
    this.props.contactsAdd(values);
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className="form">
        <h2>New contact</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="First"
            name="first"
            component={ContactsAdd.renderField}
          />
          <Field
            label="Last"
            name="last"
            component={ContactsAdd.renderField}
          />
          <Field
            label="Number"
            name="number"
            component={ContactsAdd.renderField}
          />
          <button type="submit" className="btn btn-dark">Submit</button>
          <Link to="/" className="btn">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if (!values.first) {
    errors.first = "Enter the first";
  }
  if (!values.last) {
    errors.last = "Enter the last";
  }
  if (!values.number) {
    errors.number = "Enter some number";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

export default reduxForm({
  validate,
  form: 'ContactsAddForm'
})(
  connect(mapStateToProps, { contactsAdd })(ContactsAdd)
);