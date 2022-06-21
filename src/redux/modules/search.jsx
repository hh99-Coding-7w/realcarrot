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
    console.log(payload);
    const response = await axios.get(
      `http://3.39.25.179/api/posts/search?keyword=${payload}`
    );
    console.log(response);
    dispatch(loadSearch(response.data))
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

// export const postSlice = createSlice({
//   name: "post",
//   extraReducers: (builder) => {
//     builder
//       .addCase(__searchPost.fulfilled, (state, action) => {
//         state.loading = false;
//         // 리스트 전체 저장
//         if (action.payload) {
//           state.list = action.payload;
//         }
//         state.session = true;
//       })
//       .addCase(__searchPost.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error;
//       });
//   },
// });

// export const __searchPost = createAsyncThunk(
//   "post/SEARCH_POST",
//   async (payload) => {
//     try {
//       console.log(payload);
//       const response = await axios.get(
//         `http://3.39.25.179/api/posts/search?keyword=${payload}`
//       );
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       const errorMsg = JSON.parse(error.request.response);
//       alert(errorMsg.msg);
//     }
//   }
// );

// export const postSlice = createSlice({
//   name: "post",
//   extraReducers: (builder) => {
//     builder
//       .addCase(__searchPost.fulfilled, (state, action) => {
//         state.loading = false;
//         // 리스트 전체 저장
//         if (action.payload) {
//           state.list = action.payload;
//         }
//         state.session = true;
//       })
//       .addCase(__searchPost.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error;
//       });
//   },
// });
