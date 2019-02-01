import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  contacts,
  activeUserId
});
