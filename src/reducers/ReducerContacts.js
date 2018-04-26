import {CONTACTS_ADD, DEFAULT_CONTACT} from "../constant/constant";
import getMaxId from '../helpers/helpers'

export default function (state = DEFAULT_CONTACT, action) {
  switch (action.type) {
    case CONTACTS_ADD:
      // вынуждено
      action.payload["id"] = getMaxId(state);
      return state.concat(action.payload);
    default:
      return state;
  }
};