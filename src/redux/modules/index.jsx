import { combineReducers } from "redux";
import user from "./user";

const rootReducer = combineReducers({
    user,
    // postReducer,
    // image,
  })
  
  export default rootReducer;

  //오류가나면 User에 관한거 다 소문자로 바꿔