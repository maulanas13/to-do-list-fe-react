import { combineReducers } from "redux";
import authReducers from "./AuthReducers";
import calenderReducers from "./CalenderReducers";

export default combineReducers({
  authentication: authReducers,
  calenderReducers,
});
