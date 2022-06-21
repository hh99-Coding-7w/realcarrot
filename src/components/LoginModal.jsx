import React, { useState } from "react";
import "../shared/modal.css";
import apis from "../api/api";
import { setCookie } from "../shared/Cookie";
import ekdrms from "../image/ekdrms.png";
import styled from "styled-components";

const LoginModal = (props) => {
  //열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴.
  const { open, close, header } = props;

  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onLoginClick = async (event) => {
    event.preventDefault(); //1. !!아마 왼쪽꺼 필요없는 걸로 암.
    try {
      const response = await apis.postLogin({
        username: id,
        password: pw,
      });
      const AccessToken = response.headers.authorization.split(" ")[1];
      const AccessName = response.headers.username;
      // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.

      setCookie("authorization", AccessToken);
      setCookie("username", AccessName);
      // axios.defaults.headers.common["authorization"] = `Bearer ${AccessToken}`;
      // 위의 setCookie("authorization", AccessToken) 안의 매겨변수는 "토큰 이름", 토큰값 이다.
      alert("로그인 성공");
      window.location.replace("/");
    } catch (error) {
      alert("로그인 다시시도");
    }
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
            <main>
              <div
                style={{ borderRight: "1px solid #6c757d" }}
                className="leftside"
              >
                <img src={ekdrms} alt="당근마켓" />
              </div>
              <Mod>
              <div className="rightside">
                <Put
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  label="아이디"
                  value={id}
                  placeholder="ID:"
                />

                <Put type="password"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  label="비밀번호"
                  value={pw}
                  placeholder="PassWord:"
                />
                <LogBt type="submit" onClick={onLoginClick}>
                  {" "}
                  로그인{" "}
                </LogBt>
                </div>
              </Mod>
            </main>
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


const LogBt = styled.button`
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
`

const Put = styled.input`
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
`

const Mod = styled.div`
  margin: auto;
`
export default LoginModal;
