import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  __deletePost,
  __loadDetail,
  __loadPost,
  __updatePost,
} from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";
import Header from "../components/Header";

const PostUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const titleRef = useRef();
  const contentRef = useRef();
  const priceRef = useRef();
  const imageUrlsRef = useRef();

  useEffect(() => {
    dispatch(__updatePost());
  }, [dispatch]);

  const reloadPost = () => {
    dispatch(
      __updatePost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        price: priceRef.current.value,
        imageUrls: imageUrlsRef.current.value,
        id: id,
      })
    );
    navigate("/main");
  };

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
      <div>
        <p>제목</p>
        <input ref={titleRef} type="text" placeholder="제목을 입력해주세요" />
      </div>
      <div>
        <p>내용</p>
        <input ref={contentRef} type="text" placeholder="내용을 입력해주세요" />
      </div>
      <div>
        <p>가격</p>
        <input ref={priceRef} type="number" placeholder="가격을 입력해주세요" />
      </div>
      <div>
        <p>이미지</p>
        <input
          ref={imageUrlsRef}
          type="text"
          placeholder="이미지을 입력해주세요"
        />
      </div>
      <button onClick={reloadPost}>작성완료</button>
    </>
  );
};

export default PostUpdate;
