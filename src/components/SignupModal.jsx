import React, { useState } from "react";
import ekdrms from "../image/ekdrms.png";
import "../shared/modal.css";
import axios from "axios";
import apis from "../api/api";
import { storage } from "../shared/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import styled from "styled-components";
import DropDown from "./DropDown";
import snRl from "../image/snRl.png";

const SignupModal = (props) => {
  const { open, close, header } = props;
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Location, setLocation] = useState("");
  const [fileImage, setFileImage] = useState("");
  const [IdCheck, setIdCheck] = useState(false);
  const [NickCheck, setNickCheck] = useState(false);

  const fileInputRef = React.useRef();
  const password = React.useRef();
  const password2 = React.useRef();
  const check = React.useRef();

  if (Password && Password2 && Password === Password2) {
    check.current.innerText = "✔️";
  } else if (Password !== Password2) {
    check.current.innerText = "❌";
  }

  const idCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{4,}$/;
    return regExp.test(id);
  };

  const pwCheck = (id) => {
    let regExp = /^[0-9a-zA-Z!@#$%^&*]{8,}$/;
    return regExp.test(id);
  };

  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]{2,8}$/;
    return regExp.test(nick);
  };

  const onSubmitUserHandler = async (event) => {
    if (
      Username === "" ||
      Password === "" ||
      Nickname === "" ||
      Password2 === "" ||
      fileImage === ""
    ) {
      window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }
    if (!idCheck(Username)) {
      window.alert("올바른 아이디 형식을 지켜주세요!");
      return;
    }
    if (!pwCheck(Password, Password2)) {
      window.alert("숫자,영어,(!@#$%^&*)로 2~8자로 입력해주세요!");
      return;
    }
    if (Password !== Password2) {
      window.alert("비밀번호를 확인해주세요!");
      return;
    }
    if (!nickCheck(Nickname)) {
      window.alert("올바른 닉네임 형식을 작성해주세요!");
      return;
    }

    const res = await apis.addUser({
      username: Username,
      password: Password,
      nickname: Nickname,
      profileImage: fileInputRef.current?.url,
      location: Location,
    });
    window.location.replace("/");
    window.alert("완료되었습니다.");
  };

  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const uploaded_file = await uploadBytes(
      ref(storage, `profileimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);
    fileInputRef.current = { url: file_url };
  };

  const CheckUsername = async () => {
    await axios
      .get(`http://3.39.25.179/user/signup/checkid/${Username}`)
      .then(() => {
        setIdCheck(true);
        window.alert("사용 가능한 아이디입니다.");
      })
      .catch((error) => {
        if (Username == "") {
          window.alert("아이디를 입력해주세요");
        } else {
          window.alert("이미 사용중인 아이디입니다.");
        }
      });
  };

  const CheckNick = async () => {
    await axios
      .get(`http://3.39.25.179/user/signup/checknickname/${Nickname}`)
      .then(() => {
        setNickCheck(true);
        window.alert("사용 가능한 닉네임입니다.");
      })
      .catch((error) => {
        if (Username == "") {
          window.alert("닉네임을 입력해주세요.");
        } else {
          window.alert("이미 사용중인 닉네임입니다.");
        }
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
                    value={Username || ""}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <h6>아이디는 4자 이상, 영문과 숫자로 작성해주세요</h6>
                  <DupButton onClick={CheckUsername}>중복확인</DupButton>
                  <Put1
                    type="text"
                    placeholder="NickName:"
                    value={Nickname || ""}
                    onChange={(event) => {
                      setNickname(event.target.value);
                    }}
                  />
                  <h6>닉네임은 2~8자, 한글, 영문, 숫자로 작성해주세요</h6>
                  <DupButton onClick={CheckNick}>중복확인</DupButton>
                  <Put1
                    type="password"
                    placeholder="PassWord:"
                    value={Password || ""}
                    ref={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <h6>비밀번호는 8자 이상으로 작성해주세요</h6>
                  <Put1
                    type="password"
                    placeholder="Confirm PassWord:"
                    value={Password2 || ""}
                    ref={password2}
                    onChange={(event) => {
                      setPassword2(event.target.value);
                    }}
                  />
                  <span
                    style={{
                      margin: "6px 0 0 0",
                      fontSize: "20px",
                    }}
                    ref={check}
                  ></span>
                  <>
                    <DropDown
                      setLocation={setLocation}
                      Location={Location}
                    ></DropDown>
                  </>
                  <h3>프로필 사진</h3>
                  <div style={{ position: "relative" }}>
                    <img
                      src={snRl}
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "50px",
                      }}
                    />
                    <Input
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
                      ref={fileInputRef}
                      onChange={saveFileImage}
                    />
                    {fileImage && (
                      <img
                        alt="sample"
                        src={fileImage}
                        style={{
                          margin: "auto",
                          width: "80px",
                          height: "80px",
                          borderRadius: "80px",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ fontSize: "10px", color: "tomato" }}></div>
                  {IdCheck === true && NickCheck === true ? (
                    <Bt onClick={onSubmitUserHandler}>가입하기</Bt>
                  ) : null}
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
  background-color: #f2f3f6;
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
    background-color: #f2f3f6;
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
