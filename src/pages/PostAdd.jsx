import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/post";
import { useRef } from "react";

const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);
  const locationRef = useRef(null);

  const addPost = () => {
    dispatch(
      __addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        price: priceRef.current.value,
        location: locationRef.current.value,
        image: [],
      })
    );
    navigate("/main");
  };
  return (
    <>
      <Header />
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
        <p>지역</p>
        <input
          ref={locationRef}
          type="text"
          placeholder="지역을 입력해주세요"
        />
      </div>
      <button onClick={addPost}>작성완료</button>
    </>
  );
};

export default PostAdd;
