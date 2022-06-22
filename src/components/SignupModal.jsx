import React, { useState } from "react";
import ekdrms from "../image/ekdrms.png";
import "../shared/modal.css";
import axios from "axios";
import apis from "../api/api";
import { storage } from "../shared/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { createUserJson } from "../redux/modules/user";
// 1. 위의 createUserJson 이건 user 리듀서의 미들웨어가 작동할 필요 없으므로 불필요.
import styled from "styled-components";
//드롭다운
import DrupDown from "./DrupDown";
const SignupModal = (props) => {
  const { open, close, header } = props;
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Location, setLocation] = useState("");
  const [fileImage, setFileImage] = React.useState("");
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
      window.alert("형식을 지켜주세요");
      return;
    }
    if (!pwCheck(Password, Password2)) {
      window.alert("숫자 및 영어만 입력가능합니다");
      return;
    }
    if (Password !== Password2) {
      window.alert("비밀번호를 확인해주세요");
      return;
    }
    if (!nickCheck(Nickname)) {
      window.alert("올바른 닉네임 형식을 작성해주세요");
      return;
    }
    const res = await apis.addUser({
      username: Username,
      password: Password,
      nickname: Nickname,
      profileImage: fileInputRef.current?.url,
      location: Location,
    });
    console.log(res);
    window.location.replace("/");
    window.alert("완료되었습니다.");
  };
  //사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const uploaded_file = await uploadBytes(
      ref(storage, `profileimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);
    fileInputRef.current = { url: file_url };
  };
  // 아이디 중복 체크
  const CheckUsername = async () => {
    await axios
      .get(`http://3.39.25.179/user/signup/checkid/${Username}`)
      .then(() => {
        window.alert("사용 가능한 아이디입니다.");
      })
      .catch((error) => {
        window.alert("이미 사용중인 아이디입니다.");
        console.log("Login Error", error);
      });
  };
  // 닉네임 중복 체크
  const CheckNick = async () => {
    await axios
      .get(`http://3.39.25.179/user/signup/checknickname/${Nickname}`)
      .then(() => {
        window.alert("사용 가능한 닉네임입니다.");
      })
      .catch((error) => {
        window.alert("이미 사용중인 닉네임입니다.");
        console.log("Login Error", error);
      });
  };
  return (
    <React.Fragment>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="open" onClick={close}>
                닫기
              </button>
            </header>
            <Main>
              <div className="leftside">
                <img src={ekdrms} alt="당근마켓" />
              </div>
              <Mod
                style={{ borderLeft: "1px solid #6C757D" }}
                className="rightside"
              >
                <div>
                    <Put1
                      type="text"
                      placeholder="ID:"
                      value={Username}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                    <h6>아이디는 4자 이상 영문과 숫자로만 이루어주세요</h6>
                    <DupButton onClick={CheckUsername}>중복확인</DupButton>
                    <Put1
                      type="text"
                      placeholder="NickName:"
                      value={Nickname}
                      onChange={(event) => {
                        setNickname(event.target.value);
                      }}
                    />
                    <DupButton onClick={CheckNick}>중복확인</DupButton>
                    <Put1
                      type="password"
                      placeholder="PassWord:"
                      value={Password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      ref={password}
                    />
                    <h6>비밀번호는 8자 이상 영문과 숫자로만 이루어주세요</h6>
                    <Put1
                      type="password"
                      placeholder="Confirm PassWord:"
                      value={Password2}
                      onChange={(event) => {
                        setPassword2(event.target.value);
                      }}
                      ref={password2}
                    />
                    <p ref={check} />
                    <h6>비밀번호는 8자 이상 영문과 숫자로만 이루어주세요</h6>
                    <>
                      <DrupDown
                        setLocation={setLocation}
                        Location={Location}
                      ></DrupDown>
                    </>
                    프로필 사진
                    {fileImage && (
                      <img
                        alt="sample"
                        src={fileImage}
                        style={{
                          margin: "auto",
                          maxWidth: "300px",
                          maxHeight: "250px",
                        }}
                      />
                    )}
                    <Input
                      name="imgUpload"
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={saveFileImage}
                    />
                    <div style={{ fontSize: "10px", color: "tomato" }}></div>
                    <Bt onClick={onSubmitUserHandler}>가입하기</Bt>
                </div>
              </Mod>
            </Main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </React.Fragment>
  );
};
const Input = styled.input`
  display: ${(props) => (props.fileImage ? "none" : "")};
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Put1 = styled.input`
  line-height: 1.4;
  font-size: 20px;
  background-color: #F2F3F6;
  box-sizing: border-box;
  height: 40px;
  padding: 16px 23px;
  border: none;
  border-radius: 15px;
  width: 250px;
  color: #212124;
  margin-top: 25px;
  margin-bottom: 1rem;
`;
const Bt = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
  &:hover {
    background-color: #F2F3F6;
  }
`;
const DupButton = styled.button`
  background-color: #212121;
  color: white;
  opacity: 0.8;
  border: 0;
  padding: auto;
  &:hover {
    opacity: 1;
  }
`;
const Mod = styled.div`
  margin: auto;
`;
export default SignupModal;