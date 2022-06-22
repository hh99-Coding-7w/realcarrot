//모듈
// import { __searchPost } from "../redux/modules/user";
import { __searchPost } from "../redux/modules/search";
import React, { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostSearch = (payload) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* <button>뒤로가기</button> */}
      <form onSubmit="return false">
        <Search1
          value={search}
          placeholder="물품이나 동네를 검색해보세요"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              dispatch(__searchPost(search));
              setSearch("");
              navigate(`/post/search/${e.target.value}`);
            }
          }}
        />
      </form>
    </>
  );
};

const Search1 = styled.input`
  line-height: 1.4;
  font-size: 20px;
  background-color: #f2f3f6;
  box-sizing: border-box;
  height: 40px;
  padding: 16px 23px;
  border: none;
  border-radius: 15px;
  width: 360px;
  color: #212124;
`;

export default PostSearch;
