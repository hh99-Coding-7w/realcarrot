import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { __deletePost, __loadDetail, __loadPost } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";
import styled from "styled-components";

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const data = useSelector((state) => state.postReducer.detailData);

  const loginUser = getCookie("username");

  console.log(data);

  // console.log(loginUser);

  // console.log(params.id);

  useEffect(() => {
    dispatch(
      __loadDetail({
        // Authorization: getCookie("authorization"),
        id: params.id,
      })
    );
  }, [dispatch]);

  const removePost = () => {
    dispatch(
      __deletePost({
        // Authorization: getCookie("authorization"),
        id: params.id,
      })
    );
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Detail>
        <ArticleImage>
          <p>이미지~</p>
          <img src={data?.image} />
        </ArticleImage>
        <UserDetail>
          <div style={{ display: "flex" }}>
            <UserProfile src={data?.profileImage} />
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                }}
              >
                {data?.nickname}
              </div>
              <div
                style={{ display: "flex", fontSize: "13px", lineHeight: "1.4" }}
              >
                {data?.location}
              </div>
            </div>
          </div>
          <div>
            {loginUser === data?.username && (
              <>
                <Link to={`/post/update/${data.id}`}>
                  <Button>수정</Button>
                </Link>
                <Button onClick={removePost}>삭제</Button>
              </>
            )}
          </div>
        </UserDetail>
        <ArticleDesc>
          <p style={{ fontSize: "20px", fontWeight: "600" }}>{data?.title}</p>
          <p style={{ marginTop: "4px", fontSize: "13px", color: "#868e96" }}>
            {data?.calculatedTime}
          </p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>{data?.price}원</p>
          <p style={{ fontSize: "17px", margin: "16px" }}>{data?.content}</p>
        </ArticleDesc>
      </Detail>
      <Footer />
    </>
  );
};

const Detail = styled.div`
  margin-top: 94px;
  padding-bottom: 0;
`;

const ArticleImage = styled.div`
  position: relative;
  width: 730px;
  margin: 0 auto;
  background-color: blue;
`;

const UserDetail = styled.div`
  width: 677px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 23px;
  position: relative;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
`;

const ArticleDesc = styled.div`
  position: relative;
  padding: 32px 0;
  width: 677px;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

export default PostDetail;
