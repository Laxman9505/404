import { combineReducers } from "redux";
import auth from "./auth";
import book from "./book";
import parking from "./parking";
export const combinedReducer = combineReducers({ auth, book, parking });
