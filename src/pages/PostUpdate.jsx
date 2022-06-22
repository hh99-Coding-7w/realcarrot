import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __deletePost,
  __loadDetail,
  __loadPost,
  __updatePost,
} from "../redux/modules/post";
import Header from "../components/Header";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/Firebase";
import styled from "styled-components";
import snRl from "../image/snRl.png";

const PostUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const imageUrlsRef = useRef();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();

  const reloadPost = (e) => {
    if (title === "" || content === "" || price === "") {
      window.alert("모두 입력해주세요.");
      return;
    }
    dispatch(
      __updatePost({
        title: title,
        content: content,
        price: price,
        imageUrls: imageUrlsRef.current.value,
        id: id,
      })
    );
    navigate("/main");
    dispatch(__loadPost());
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
      <FatherBox>
        <MatherBox>
          <div style={{ position: "relative" }}>
            <img src={snRl} style={{ width: "100px", height: "100px" }} />
            <input
              style={{
                opacity: "0",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              type="file"
              id="files"
              accept={"image/*"}
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
                uploadFB(e);
              }}
            />
          </div>
          <div>
            {fileImage && (
              <img
                style={{ width: "300px" }}
                src={fileImage}
                alt="preview-img"
              />
            )}
          </div>

          <div>
            <h2>제목</h2>
            <Input1
              type="text"
              placeholder="제목을 입력해주세요"
              value={title || ""}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h2>내용</h2>
            <TextInput1
              style={{ height: "100px" }}
              placeholder="내용을 입력해주세요"
              value={content || ""}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <div>
            <h2>가격</h2>
            <Input1
              type="number"
              placeholder="가격을 입력해주세요"
              value={price || ""}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <But>
            <Ok
              variant="text"
              style={{
                color: "#FF9F57",
                fontSize: "23px",
                fontWeight: "600",
                lineHeight: "2",
              }}
              onClick={reloadPost}
            >
              작성완료
            </Ok>
            <X
              variant="text"
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "300",
                lineHeight: "2",
              }}
              onClick={() => navigate(`/post/${id}`)}
            >
              취소
            </X>
          </But>
        </MatherBox>
      </FatherBox>
    </>
  );
};
const FatherBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;
const MatherBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px 80px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;
const Input1 = styled.input`
  line-height: 1.4;
  background-color: #f2f3f6;
  box-sizing: border-box;
  height: 40px;
  padding: 16px 23px;
  border: none;
  border-radius: 15px;
  width: 360px;
  color: #212124;
  margin-bottom: 30px;
`;
const TextInput1 = styled.textarea`
  line-height: 1.4;
  background-color: #f2f3f6;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  width: 360px;
  color: #212124;
  overflow: hidden;
  resize: none;
  margin-bottom: 30px;
  /* line-height: -500px; */
`;
const But = styled.div`
  display: flex;
  gap: 0px 100px;
`;
const X = styled.button`
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
const Ok = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

export default PostUpdate;
