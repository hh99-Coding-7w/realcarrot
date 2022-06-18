//모듈
import { __searchPost } from "../redux/modules/user";
import React, { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const PostSearch = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
          <>
            {" "}
            {/* <button>뒤로가기</button> */}
            <input
              value={search}
              placeholder="검색 키워드를 입력해주세요"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  console.log(search);
                  dispatch(__searchPost(search));
                  setSearch("");
                }
              }}
            />
            <img src="" alt="" />
            <button
              onClick={(e) => {
                if (search === "") {
                  window.alert("검색 키워드를 입력해주세요!");
                  setSearch("");
                } else {
                  e.preventDefault();
                  dispatch(__searchPost(search));
                  setSearch("");
                }
              }}
            >
                클릭
            </button>
          </>
        </div>
      );
    };

    export default PostSearch;