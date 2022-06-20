import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost, __loadPost } from "../redux/modules/post";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { storage } from "../shared/firebase";

const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);
  const imageUrlsRef = useRef(null);

  useEffect(() => {
    dispatch(__loadPost());
  }, [dispatch]);

  const addPost = (e) => {
    dispatch(
      __addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        price: priceRef.current.value,
        imageUrls: imageUrlsRef.current.value,
      })
    );
    navigate("/main");
  };

  // const [fileImage, setFileImage] = useState();

  // const uploadFB = async (e) => {
  //   const upload_file = await uploadBytes(
  //     ref(storage, `postImage/${e.target.files[0].name}`),
  //     e.target.file[0]
  //   )
  //   const file_url = await getDownloadURL(upload_file.ref)
  //   imageUrlsRef.current = { url : file_url}
  // }

  // 미리보기
  // const encodeFileToBase64 = (fileBlob) => {
  //   const reader = new FileReader();

  //   reader.readAsDataURL(fileBlob);

  //   console.log(reader);

  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setFileImage(reader.result);
  //       resolve();
  //     };
  //   });
  // };

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
      <button onClick={addPost}>작성완료</button>
    </>
  );
};

export default PostAdd;
