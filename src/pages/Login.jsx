// import React from 'react'
// import { actionCreators as userActions } from "../redux/moduls/User";
// import { username, usernameCheck } from "../shared/SignUpCheck";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";


// const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const user = useSelector((user) => user)

//     const [username,setUsername] = useState();
//     const [password,setPassword] = useState();

//     const login = () => {
//         if (username === "" || password === "") {
//             window.alert("아이디와 비밀번호를 입력해주세요.");
//             return;
//         }
//         if(!usernameCheck(username)) {
//             window.alert("이메일 형식이 맞지 않습니다.")
//             return;
//         }

//         dispatch(userActions.loginDB(username, password));
//     }

//     useEffect(()=>{
//         //console.log(user)
//         console.log(user)
//         if(user.user.is_login === true) {
//             navigate("/Main")
//         }
//     },[user.user.is_login])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Login
