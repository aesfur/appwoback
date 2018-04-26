import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactsAdd } from "../actions/contactsAdd";

class ContactsAdd extends Component {
  renderField(field) {
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
    this.props.contactsAdd(values, () => this.props.history.push('/'));
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className="page">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="First"
            name="first"
            component={this.renderField}
          />
          <Field
            label="Last"
            name="last"
            component={this.renderField}
          />
          <Field
            label="Number"
            name="number"
            component={this.renderField}
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

export default reduxForm({
  validate,
  form: 'ContactsAddForm'
})(
  connect(null, { contactsAdd })(ContactsAdd)
);