import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import PostAdd from "./pages/PostAdd";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate";
import PostSearch from "./pages/PostSearch";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/update/:id" element={<PostUpdate />} />
        <Route path="/post/search/:payload" element={<PostSearch />} />
        <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;