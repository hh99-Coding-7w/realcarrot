import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/update/:id" element={<PostUpdate />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;