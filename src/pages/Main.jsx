import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __loadPost } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";

import Header from "../components/Header";
const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("token");
  const datas = useSelector((state) => state.postReducer.data);

  useEffect(() => {
    dispatch(__loadPost(token));
  }, [dispatch]);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {datas?.map((data) => (
        <div
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
            <p>{data?.createdAt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Main;
