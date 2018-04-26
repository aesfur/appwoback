export const CONTACTS_ADD = 'contacts_add';
export const CONTACTS_LOAD = 'contacts_load';

export const DEFAULT_CONTACT = [
  {id: 1, first: "Anton", last: "Petrov", number: "937 999 2"},
  {id: 2, first: "Jordi", last: "Wilems", number: "1337 322"},
  {id: 3, first: "Vladimir", last: "Putin", number: "+7 1488 1984"},
  {id: 4, first: "Aleksey", last: "Navalniy", number: "8 938 457 0290"}
];

export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export const userConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',
  
  LOGOUT: 'USERS_LOGOUT',
};
