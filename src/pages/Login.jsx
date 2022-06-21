// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import apis from "../api/api";
// import { setCookie } from "../shared/Cookie";
// import styled from "styled-components";

// const Login = () => {
//   const navigate = useNavigate();
//   const id_ref = useRef(null);
//   const password_ref = useRef(null);

//   const onLoginClick = async (event) => {
//     event.preventDefault(); //1. !!아마 왼쪽꺼 필요없는 걸로 암.
//     try {
//       const response = await apis.postLogin({
//         username: id_ref.current.value,
//         password: password_ref.current.value,
//       });
//       const AccessToken = response.headers.authorization.split(" ")[1];
//       const AccessName = response.headers.username;
//       // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.

//       setCookie("authorization", AccessToken);
//       setCookie("username", AccessName);
//       // axios.defaults.headers.common["authorization"] = `Bearer ${AccessToken}`;
//       // 위의 setCookie("authorization", AccessToken) 안의 매겨변수는 "토큰 이름", 토큰값 이다.
//       alert("로그인 성공");
//       navigate("/");
//     } catch (error) {
//       alert("로그인 다시시도");
//     }
//   };

//   return (
//       <div>
//       {/* <img src="data:image/png;base64,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"/> */}
//         <h1>로그인페이지</h1>
//         <form>
//           <input type="text" placeholder="ID" ref={id_ref}></input>
//           <input
//             type="password"
//             placeholder="PASSWORD"
//             ref={password_ref}
//           ></input>
//           <button type="submit" onClick={onLoginClick}>
//             {" "}
//             로그인{" "}
//           </button>
//           {/* <CancelButton onClick={}></CancelButton> */}
//         </form>
//       </div>
//   );
// };


// export default Login;
