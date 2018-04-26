import {combineReducers} from 'redux';
import ReducerContacts from './contacts.reducer';
import {reducer as formReducer} from 'redux-form';
import {alert} from "./alert.reducer";
import {authentication} from "./authentication.reducer";

const Reducers = combineReducers({
  contacts: ReducerContacts,
  form: formReducer,
  alert,
  authentication
});

export default Reducers;
