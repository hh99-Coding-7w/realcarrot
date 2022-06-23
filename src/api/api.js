import axios from "axios";
import {
  getCookie
} from "../shared/Cookie";
const api = axios.create({
  baseURL: "http://3.39.25.179",
});

api.interceptors.request.use(
  (config) => {
    const authorization = getCookie("authorization");
    config.headers.Authorization = authorization;
    return config;
  },
  (error) => {

  }
);

const apis = {
  //user
  addUser: (newUser) => api.post("/user/signup", newUser),
  postLogin: (userdata) => api.post("/user/login", userdata),
  //post
  addPost: (contents) => api.post("/board/write", contents),
  editPost: (id, contents) => api.post(`/posts/${id}`, contents),
  delPost: (id) => api.delete(`/board/${id}`),
  getPosts: () => api.get("/boards"),
  getDetail: (id) => api.get(`/detail/${id}`),

  //comment
  addComment: (id, comment) =>
    api.post(`/api/board/${id}/comment/write`, comment),
  editComment: (id, commentId, comments) =>
    api.post(`/api/board/${id}/comment/${commentId}`, comments),
  delComment: (id, commentId) =>
    api.delete(`/api/board/${id}/comment/${commentId}`),
  getComments: (id) => api.get(`/api/board/${id}/comments`),

  //heart
  addheart: (id) => api.post(`/api/board/${id}/like`),
};

export default apis;