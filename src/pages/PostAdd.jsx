import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost, __loadPost } from "../redux/modules/post";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/Firebase";

const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageUrlsRef = useRef(null);

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();

  const addPost = (e) => {
    if (title === "" || content === "" || price === "") {
      window.alert("모두 입력해주세요.");
      return;
    }
    dispatch(
      __addPost({
        title: title,
        content: content,
        price: price,
        imageUrls: imageUrlsRef.current.url,
      })
    );

    navigate("/main");
    dispatch(__loadPost());
  };

  // 미리보기
  const [fileImage, setFileImage] = useState();

  const uploadFB = async (e) => {
    const uploaded_file = await uploadBytes(
      ref(storage, `postImages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);
    imageUrlsRef.current = { url: file_url };
    console.log(imageUrlsRef.current.url);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setFileImage(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <Header />
      <div>
        <input
          type="file"
          placeholder="PICTURE"
          id="file"
          accept={"image/*"}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
            uploadFB(e);
          }}
        />
        <div>{fileImage && <img src={fileImage} alt="preview-img" />}</div>
      </div>
      <div>
        <p>제목</p>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title || ""}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <p>내용</p>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content || ""}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <div>
        <p>가격</p>
        <input
          type="number"
          placeholder="가격을 입력해주세요"
          value={price || ""}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>

      <button onClick={addPost}>작성완료</button>
    </>
  );
};

export default PostAdd;
