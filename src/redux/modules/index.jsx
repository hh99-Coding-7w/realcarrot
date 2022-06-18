import { combineReducers } from "redux";
import user from "./user";
import { postSlice } from "./user";
import postReducer from "./post";

const rootReducer = combineReducers({
  user,
  postSlice,
  postReducer,
  // image,
});

export default rootReducer;

//오류가나면 User에 관한거 다 소문자로 바꿔
