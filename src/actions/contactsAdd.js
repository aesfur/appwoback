import { CONTACTS_ADD } from "../constant/constant";

export function contactsAdd(values, callback) {
  const request = values;
  callback();
  
  return {
    type: CONTACTS_ADD,
    payload: request
  };
}