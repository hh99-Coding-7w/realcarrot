import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import apis from "../../api/api";
import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { async } from "@firebase/util";

//액션
const LOG_IN = "login/LOG_IN";
const LOG_OUT = "logout/LOG_OUT";
const LOAD_TOKEN = "loadtoken/LOAD_TOKEN";

// //검색기능 액션
// export const ADD_SPACES = "ADD_SPACES"
// export const SEARCH_SPACE = "SEARCH_SPACE"

//초기값
const initialState = {
  userInfo: {
    username: "",
    password: "",
  },
  is_login: false,
  token: "",
};

//액션크리에이터
const login = createAction(LOG_IN, (user) => ({ user }));
const logout = createAction(LOG_OUT, (user) => ({ user }));
const loadToken = createAction(LOAD_TOKEN, (token) => ({ token }));

// //검색기능 액션크리에이터
// export function addSpaces() {
//   return {type:ADD_SPACES}
// }

// export function searchSpace(searchTerm) { //searchSpace 액션을 추가
//   return {type: SEARCH_SPACE, searchTerm}
// }

// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("authorization")) {
      dispatch(loadToken());
    }
  };
};

//로그인
export const loginDB = (username, password) => {
  return function (dispatch) {
    axios
      .post("http://3.39.25.179/user/login", {
        username,
        password,
      })
      .then((response) => {
        dispatch(
          login({
            is_login: true,
            token: response.headers.authorization,
          })
        );
        setCookie(
          "authorization",
          response.headers.Authorization.split(" ")[1]
        );
        setCookie("username", username);
        setCookie("profileImage", response.headers.profileImage);
      })
      .catch((error) => {
        window.alert("아이디 또는 비밀번호를 확인해주세요.");
        // console.log("Login Error", error);
      });
  };
};

//검색 기능
//index.jsx 에 리듀서를 합친다
//서치포스트 임포트하기 서치 컴포넌트에

export const __searchPost = createAsyncThunk(
  "post/SEARCH_POST",
  async (payload) => {
    try {
      // console.log(payload)
      const response = await axios.get(
        `http://3.39.25.179/api/posts/search?keyword${payload}`
      );
      return response.data;
    } catch (error) {
      const errorMsg = JSON.parse(error.request.response);
      alert(errorMsg.msg);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  extraReducers: (builder) => {
    builder
      .addCase(__searchPost.fulfilled, (state, action) => {
        state.loading = false;
        // 리스트 전체 저장
        if (action.payload) {
          state.list = action.payload;
        }
        state.session = true;
      })
      .addCase(__searchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

//리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.token = action.payload.user.token;
        draft.user = action.payload.user;
        draft.is_login = true;

        //console.log
        // console.log(action.payload.user,action.payload.user);
      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),

    [LOG_OUT]: (state) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        localStorage.removeItem("nickname");
        localStorage.removeItem("authorization");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

//액션 크리에이터 export
const actionCreators = {
  login,
  logout,
  loginDB,
  loadTokenFB,
};

export { actionCreators };
