import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import desk from "./desk";

export default combineReducers({
  auth,
  profile,
  desk,
});
