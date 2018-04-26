import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";
import {userActions} from "../../actions/user.actions";

class Login extends Component {
  
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
    this.props.dispatch(userActions.login(values));
  }
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <div className="form">
        <h2>Login</h2>
        <form name="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Username"
            name="username"
            component={Login.renderField}
          />
          <Field
            label="Password"
            name="password"
            component={Login.renderField}
          />
          <button type="submit" className="btn btn-dark">Submit</button>
          <Link to="/register" className="btn btn-link">Register</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  
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
  form: 'LoginForm'
})(
  connect(null)(Login)
);