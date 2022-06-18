import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { __deletePost, __loadDetail, __loadPost } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const data = useSelector((state) => state.postReducer.data);

  const loginUser = getCookie("nickname");

  console.log(loginUser);

  console.log(params.id);

  useEffect(() => {
    dispatch(
      __loadDetail({
        token: getCookie("token"),
        id: params.id,
      })
    );
  }, [dispatch]);

  const removePost = () => {
    dispatch(
      __deletePost({
        token: getCookie("token"),
        id: params.id,
      })
    );
    navigate("/main");
  };

  return (
    <>
      <Header />
      <div>
        <div>
          <p>이미지~</p>
          <p>{data?.image}</p>
        </div>
        <div>
          <p>제목</p>
          <p>{data?.title}</p>
        </div>
        <div>
          <p>내용</p>
          <p>{data?.content}</p>
        </div>
        <div>
          <p>가격</p>
          <p>{data?.price}</p>
        </div>
        <div>
          <p>지역</p>
          <p>{data?.location}</p>
        </div>
        <div>
          <p>작성시간</p>
          <p>{data?.createdAt}</p>
        </div>
        {loginUser === data?.nickname && (
          <>
            <Link to={`/post/update/${data.id}`}>
              <button>수정</button>
            </Link>
            <button onClick={removePost}>삭제</button>
          </>
        )}
      </div>
    </>
  );
};

export default PostDetail;
