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
import Footer from "../components/Footer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/Firebase";

const PostUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const titleRef = useRef();
  const contentRef = useRef();
  const priceRef = useRef();
  const imageUrlsRef = useRef();

  const reloadPost = () => {
    setTimeout(() => {
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
      dispatch(__loadPost());
    }, 1000);
  };

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
      <button onClick={reloadPost}>작성완료</button>
      <Footer />
    </>
  );
};

export default PostUpdate;
