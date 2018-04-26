import { combineReducers } from 'redux';
import ReducerContacts from './ReducerContacts';
import { reducer as formReducer } from 'redux-form';

const Reducers = combineReducers({
	contacts: ReducerContacts,
  form: formReducer
});

export default Reducers;
