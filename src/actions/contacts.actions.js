import {CONTACTS_ADD, CONTACTS_LOAD, userConstants} from "../constants/constants";
import {history} from '../helpers/history';
import {services} from "../helpers/services";
import {alertActions} from "./alert.actions";
import {store} from "../helpers/store";

export function contactsAdd(values) {
  const request = values;
  history.push('/');
  
  return {
    type: CONTACTS_ADD,
    payload: request
  };
}

export function getContacts() {
  const dispatch = store.dispatch;
  const result = services.getContacts().then(null,
    error => {
      dispatch(failure(error));
      history.push('/login');
      dispatch(alertActions.error(error));
    }
  );
  
  return {
    type: CONTACTS_LOAD,
    payload: result
  };
  
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error}
  }
  
}