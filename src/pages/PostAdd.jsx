import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addPost, __loadPost } from "../redux/modules/post";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/Firebase";

const PostAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image_files, setImage_files] = useState();

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);

  const onChangeImg = (e) => {
    setImage_files(e.target.files);
  };

  const addPost = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const price = priceRef.current.value;

    const formData = new FormData();

    for (let i = 0; i < image_files.length; i++) {
      formData.append("image_files", (image_files)[i]);
    }

    formData.append("request_dto", { title, content, price });

    dispatch(__addPost({ formData: formData }));
    // navigate("/main");
  };

  return (
    <>
      <Header />
      <div>
        <p>이미지</p>
        <input type="file" multiple accept="image/*" onChange={onChangeImg} />
        <p>제목</p>
        <input type="text" ref={titleRef} />
        <p>내용</p>
        <input type="text" ref={contentRef} />
        <p>가격</p>
        <input type="text" ref={priceRef} />
      </div>
      <button onClick={addPost}>작성완료</button>
      <Footer />
    </>
  );
};

export default PostAdd;
