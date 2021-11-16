import { combineReducers } from "redux";
import authReducers from "./AuthReducers";

export default combineReducers({
    authentication: authReducers,
});