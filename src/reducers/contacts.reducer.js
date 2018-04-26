import {CONTACTS_ADD, CONTACTS_LOAD} from "../constants/constants";

export default function (state = [], action) {
  switch (action.type) {
    case CONTACTS_ADD:
      return state.concat(action.payload);
    case CONTACTS_LOAD:
      if (!action.payload) {
        return state;
      }
      return action.payload.result;
    default:
      return state;
  }
};