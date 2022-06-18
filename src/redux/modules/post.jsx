import axios from "axios";
import { getCookie } from "../../shared/Cookie";

//액션타입
const ADD_POST = "ADD_POST";
const LOAD_POST = "LOAD_POST";
const DELETE_POST = "DELETE_POST";
const UPDATE_POST = "UPDATE_POST";
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
  return { type: UPDATE_POST, payload };
};

//initial state
const initialState = {
  data: [],
};

//청크
export const __addPost = (payload) => async (dispatch) => {
  console.log(payload);
  const myToken = getCookie("Authorization");
  console.log(myToken)
  try {
    const response = await axios.post(
      "http://3.39.25.179/api/posting",
      {
        title: payload.title,
        content: payload.content,
        price: payload.price,
        location: payload.location,
        image: payload.image,
      }, {
        headers: {
          Authorization : myToken,
        }
      }
    )
    console.log(response)
    window.alert("작성완료!")
    dispatch(addPost(response.data))
  } catch (error) {
    window.alert("error!")
  }
}

//리듀서
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // return{...state, data: [...state.data, action.payload]}
    }
}

export default postReducer;