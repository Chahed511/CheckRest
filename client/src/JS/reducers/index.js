import { combineReducers } from "redux";
import contactReducer from "./contact";
import EditReducer from "./edit";
const rootReducer = combineReducers({ contactReducer, EditReducer });
export default rootReducer;
