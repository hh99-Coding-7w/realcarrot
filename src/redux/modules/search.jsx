import axios from "axios";

//액션타입
const LOAD_SEARCH = "LOAD_SEARCH";

//액션 크리에이터
const loadSearch = (payload) => {
  return { type: LOAD_SEARCH, payload };
};

const initialState = {
  data: [],
};

//청크
export const __searchPost = (payload) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://3.39.25.179/api/posts/search?keyword=${payload}`
    );
    dispatch(loadSearch(response.data));
  } catch (error) {
    window.alert("검색오류!");
  }
};

//리듀서
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH:
      return { data: action.payload };

    default:
      return state;
  }
};

export default searchReducer;
