import axios from "axios";
import { getCookie } from "../../shared/Cookie";

//액션타입
const ADD_POST = "ADD_POST";
const LOAD_POST = "LOAD_POST";
const DELETE_POST = "DELETE_POST";
const UPDATE_POST = "UPDATE_POST";
const LOAD_DETAIL = "LOAD_DETAIL";
// const LOAD_DETAIL = "LOAD_DETAIL";

//액션 크리에이터
const addPost = (payload) => {
  return { type: ADD_POST, payload };
};

const loadPost = (payload) => {
  return { type: LOAD_POST, payload };
};

const deletePost = (payload) => {
  return { type: DELETE_POST, payload };
};

const updatePost = (payload) => {
  console.log(payload);
  return { type: UPDATE_POST, payload };
};

const loadDetail = (payload) => {
  return { type: LOAD_DETAIL, payload };
};

//initial state
const initialState = {
  data: [],
};

//청크
export const __addPost = (payload) => async (dispatch) => {
  // console.log(payload);
  const myToken = getCookie("authorization");
  console.log(myToken);
  try {
    const res = await axios.post(
      "http://3.39.25.179/api/posting",
      {
        title: payload.title,
        content: payload.content,
        price: payload.price,
        location: payload.location,
        imageUrls: [...payload.imageUrls],
      },
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    window.alert("작성완료!");
    console.log(res);
    dispatch(addPost(res.data.body));
  } catch (error) {
    window.alert("error!");
  }
};

export const __loadPost = (payload) => async (dispatch) => {
  // console.log(payload);
  // const myToken = getCookie("authorization");
  // console.log(myToken);
  try {
    const res = await axios.get("http://3.39.25.179/api/posts", {});
    console.log(res);
    dispatch(loadPost(res.data));
  } catch (error) {
    window.alert("error!");
  }
};

export const __deletePost = (payload) => async (dispatch) => {
  console.log(payload);
  const myToken = getCookie("authorization");
  // console.log(myToken);
  try {
    await axios.delete(`http://3.39.25.179/api/post/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });
    dispatch(deletePost(payload.id));
    window.alert("삭제완료!");
  } catch (error) {
    console.log(error);
  }
};

export const __updatePost = (payload, id) => async (dispatch) => {
  // console.log(payload);
  const myToken = getCookie("authorization");
  // console.log(myToken);
  try {
    const res = await axios.put(
      `http://3.39.25.179/api/post/${payload.id}`,
      {
        title: payload.title,
        content: payload.content,
        price: payload.price,
        location: payload.location,
        imageUrls: [payload.imageUrls],
      },
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    console.log(res);
    dispatch(updatePost(res.data.body));
    window.alert("수정 완료!");
  } catch (error) {
    console.log(error);
  }
};

export const __loadDetail = (payload) => async (dispatch) => {
  // console.log(payload);
  const myToken = getCookie("authorization");
  try {
    const res = await axios.get(`http://3.39.25.179/api/post/${payload.id}`, {
      headers: {
        Authorization: myToken,
      },
    });
    console.log(res);
    dispatch(loadDetail(res.data));
  } catch (error) {
    console.log(error);
  }
};

//리듀서
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(action.payload);
      return { ...state, data: [...state.data, action.payload] };

    case LOAD_POST:
      return { data: action.payload };

    case DELETE_POST:
      const newDeletedata = state.data.filter((value) => {
        return value.id !== Number(action.payload);
      });
      return { ...state, data: [...newDeletedata] };

    case UPDATE_POST:
      const newChangeData = state.data.map((value) => {
        console.log(state.data)
        console.log(value.id)
        console.log(action.payload.id)
        return value.id === Number(action.payload.id) ? action.payload : value;
      });
      return { ...state, data: newChangeData };

    case LOAD_DETAIL:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default postReducer;
