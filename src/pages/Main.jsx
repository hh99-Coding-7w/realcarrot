import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __loadPost } from "../redux/modules/post";

import Header from "../components/Header";
import styled from "styled-components";
const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.postReducer.data);

  // console.log(Token)
  useEffect(() => {
    dispatch(__loadPost());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PostBox>
        <h2>중고거래 매물</h2>
        <Wrap>
          {datas?.map((data) => (
            <Post
              key={data?.id}
              onClick={() => {
                navigate(`/post/${data.id}`);
              }}
            >
              <div>
                <p>이미지~</p>
                <p>{data?.image}</p>
              </div>
              <div>
                <p>제목</p>
                <p>{data?.title}</p>
              </div>
              <div>
                <p>내용</p>
                <p>{data?.content}</p>
              </div>
              <div>
                <p>가격</p>
                <p>{data?.price}</p>
              </div>
              <div>
                <p>지역</p>
                <p>{data?.location}</p>
              </div>
              <div>
                <p>작성시간</p>
                <p>{data?.calculatedTime}</p>
              </div>
            </Post>
          ))}
        </Wrap>
      </PostBox>
    </>
  );
};

const PostBox = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 100px;
  margin: 150px auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
    grid-template-columns: repeat(2, 2fr);
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: repeat(1, 3fr);
  }
`;

const Post = styled.div`
  border: solid 1px black
`;


export default Main;
