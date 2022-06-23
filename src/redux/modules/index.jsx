import { combineReducers } from "redux";
import user from "./user";
import postReducer from "./post";
import searchReducer from "./search";

const rootReducer = combineReducers({
  user,
  postReducer,
  searchReducer,
});

export default rootReducer;
