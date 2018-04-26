import {userConstants} from '../constants/constants';
import {alertActions} from './alert.actions';
import {history} from '../helpers/history';
import {services} from "../helpers/services";

export const userActions = {
  login,
  logout,
  register
};

function login(values) {
  const {username, password} = values;
  return dispatch => {
    dispatch(request({username}));
    
    services.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };
  
  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user}
  }
  
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user}
  }
  
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error}
  }
}

function logout() {
  services.logout();
  history.push('/');
  return {type: userConstants.LOGOUT};
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    
    services.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };
  
  function request(user) {
    return {type: userConstants.REGISTER_REQUEST, user}
  }
  
  function success(user) {
    return {type: userConstants.REGISTER_SUCCESS, user}
  }
  
  function failure(error) {
    return {type: userConstants.REGISTER_FAILURE, error}
  }
}