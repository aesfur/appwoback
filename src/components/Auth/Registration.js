import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";
import {userActions} from "../../actions/user.actions";

class Registration extends Component {
  
  static renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    
    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  
  onSubmit(values) {
    this.props.dispatch(userActions.register(values));
  }
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <div className="form">
        <h2>Registration</h2>
        <form name="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="First Name"
            name="firstname"
            component={Registration.renderField}
          />
          <Field
            label="Last name"
            name="lastname"
            component={Registration.renderField}
          />
          <Field
            label="Email"
            name="email"
            component={Registration.renderField}
          />
          <Field
            label="Username"
            name="username"
            component={Registration.renderField}
          />
          <Field
            label="Password"
            name="password"
            component={Registration.renderField}
          />
          <button type="submit" className="btn btn-dark">Submit</button>
          <Link to="/login" className="btn btn-link">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Enter the first name";
  }
  if (!values.lastname) {
    errors.lastname = "Enter the last name";
  }
  if (!values.email) {
    errors.email = "Enter the email";
  }
  if (!values.username) {
    errors.username = "Enter the username";
  }
  if (!values.password) {
    errors.password = "Enter the password";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(
  connect(null)(Registration)
);