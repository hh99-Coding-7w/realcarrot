import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../shared/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { createUserJson } from "../redux/modules/user";
// 1. 위의 createUserJson 이건 user 리듀서의 미들웨어가 작동할 필요 없으므로 불필요.
import apis from "../api/api";
import styled from "styled-components";
import Header from "../components/Header";
//드롭다운
import DrupDown from "../components/DrupDown";

const Signup = (props,{Children}) => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Location,setLocation] = useState("")
  const [error, setError] = useState();
  const [pwcheck, setPwCheck] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileImage, setFileImage] = React.useState("");
  const location = React.useRef()
  const fileInputRef = React.useRef();
  const password = React.useRef();
  const password2 = React.useRef();
  const check = React.useRef();
  if (Password && Password2 && Password === Password2) {
    check.current.innerText = ":두꺼운_확인_표시:";
  } else if (Password !== Password2) {
    check.current.innerText = ":x:";
  }

  //아이디,비번,닉네임 정규식
  const idCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{4,}$/;
    // 대문자 포함
    return regExp.test(id);
  };
  const pwCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{8,}$/;
    // 대문자 포함
    return regExp.test(id);
  };
  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]/;
    return regExp.test(nick);
  };
  //submit handler
  const onSubmitUserHandler = async (event) => {
    event.preventDefault();
    if (
      Username === "" ||
      Password === "" ||
      Nickname === "" ||
      fileImage === ""
    ) {
      window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }
    if (!idCheck(Username)) {
      window.alert("형식을 지켜주세요.");
      return;
    }
    if (!pwCheck(Password, Password2)) {
      window.alert("숫자 및 영어만 입력가능합니다.");
      return;
    }
    if (Password !== Password2) {
      window.alert("비밀번호 불일치 : 고새 까먹었어?");
      return;
    }
    if (!nickCheck(Nickname)) {
      window.alert("올바른 닉네임 형식을 작성해주세요");
      return;
    }
    // fileInputRef.current?.url,
    //디텔가져오는거
    // const ret = await apis.getDetail(1)
    // console.log(ret)
    const res = await apis.addUser({
      username: Username,
      password: Password,
      nickname: Nickname,
      profileImage: fileInputRef.current?.url,
      location: Location,
    });
    console.log(res);
    // alert(res.data.body[0].message);
    navigate("/login");
  };
  //사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // console.log(URL.createObjectURL(e.target.files[0]))
    // // ref로도 확인해봅시다. :)
    // console.log(fileInputRef.current.files[0]);
    const uploaded_file = await uploadBytes(
      ref(storage, `profileimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    // console.log(uploaded_file);
    const file_url = await getDownloadURL(uploaded_file.ref);
    // console.log(file_url);
    fileInputRef.current = { url: file_url };
  };
  return (
    <>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
      <form onSubmit={onSubmitUserHandler} style={{marginTop:"30px"}}>
        아이디 :
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          value={Username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <h6>아이디는 4자 이상 영문과 숫자로만 이루어져야해요</h6>
        <br />
        비밀번호 :
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={Password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          ref={password}
        />
        <h6>비밀번호는 8자 이상 영문과 숫자로만 이루어져야해요.</h6>
        <br />
        비밀번호 재확인 :
        <input
          type="password"
          placeholder="비밀번호를 재입력하세요."
          value={Password2}
          onChange={(event) => {
            setPassword2(event.target.value);
          }}
          ref={password2}
        />
        <p ref={check} />
        <h6>비밀번호는 8자 이상 영문과 숫자로만 이루어져야해요.</h6>
        <br />
        닉네임 :
        <input
          type="text"
          placeholder="닉네임을 입력해 주세요."
          value={Nickname}
          onChange={(event) => {
            setNickname(event.target.value);
          }}
        />
        <br />
        <>
        <DrupDown setLocation={setLocation} Location={Location}></DrupDown>
        </>
        프로필 사진
        {fileImage && (
          <img
            alt="sample"
            src={fileImage}
            style={{ margin: "auto", maxWidth: "300px", maxHeight: "250px" }}
          />)}
          <Input
            name="imgUpload"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={saveFileImage}
          />
          <div style={{ fontSize: "10px", color: "tomato" }}></div>
          <button>{isLoading ? "가입 중... " : "가입하기"}</button>
        </form>
      </div>
    </>
  );
};
const Input = styled.input`
  display: ${(props) => (props.fileImage ? "none" : "")};
`;

export default Signup;
