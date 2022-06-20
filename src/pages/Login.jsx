import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import apis from "../api/api";
import { setCookie } from "../shared/Cookie";
import Cookies from "../shared/Cookie";
import Header from "../components/Header";
import styled from "styled-components";
import { loginDB } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id_ref = useRef(null);
  const password_ref = useRef(null);

  const onLoginClick = async (event) => {
    event.preventDefault(); //1. !!아마 왼쪽꺼 필요없는 걸로 암.
    // console.log(id_ref.current.value);
    // console.log(userdata);
    try {
      const response = await apis.postLogin({
        username: id_ref.current.value,
        password: password_ref.current.value,
      });
      console.log(response);
      const AccessToken = response.headers.authorization.split(" ")[1];
      const AccessName = response.headers.username
      // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.

      console.log(AccessToken);
      console.log(AccessName);
      setCookie("authorization", AccessToken);
      setCookie("username", AccessName);
      // axios.defaults.headers.common["authorization"] = `Bearer ${AccessToken}`;
      // 위의 setCookie("authorization", AccessToken) 안의 매겨변수는 "토큰 이름", 토큰값 이다.
      alert("로그인 성공");
      navigate("/");
    } catch (error) {
      alert("로그인 다시시도");
    }
  };

  return (
    <>
      <Header />
      <div>
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
        <h1>로그인페이지</h1>
        <form>
          <input type="text" placeholder="ID" ref={id_ref}></input>
          <input
            type="password"
            placeholder="PASSWORD"
            ref={password_ref}
          ></input>
          <button type="submit" onClick={onLoginClick}>
            {" "}
            로그인{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
