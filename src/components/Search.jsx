//모듈
import { __searchPost } from "../redux/modules/user";
import React, { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* <button>뒤로가기</button> */}
      <form onsubmit="return false">
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

const Button = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

export default PostSearch;
