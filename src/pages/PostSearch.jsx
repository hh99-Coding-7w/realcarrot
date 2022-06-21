import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __searchPost } from "../redux/modules/search";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const PostSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.searchReducer.data);
  const { payload } = useParams();
  // console.log(payload);
  console.log(datas);

  useEffect(() => {
    dispatch(__searchPost(payload));
  }, [dispatch]);

  return (
    <>
      <Header />
      <PostBox>
        <HeadTitle>검색 매물</HeadTitle>
        <Wrap>
          {datas?.map((data) => (
            <Post
              key={data.id}
              onClick={() => {
                navigate(`/post/${data.id}`);
              }}
            >
              <Image>
                <p>{data?.image}</p>
              </Image>
              <Desc>
                <Title>{data?.title}</Title>
                <Price>{data?.price} 원</Price>
                <Location>{data?.location}</Location>
                <Time>{data?.calculatedTime}</Time>
              </Desc>
            </Post>
          ))}
        </Wrap>
      </PostBox>
      <Footer />
    </>
  );
};

const PostBox = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const HeadTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-align: center;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 980px;
  margin: 0 auto;
  gap: 30px;
`;

const Post = styled.div`
  border: solid 1px black;
  width: calc(25% - 44px);
  margin-bottom: 56px;
  display: block;
`;

const Image = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: blue;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 15%);
  box-sizing: border-box;
`;

const Desc = styled.div`
  margin-top: 12px;
`;

const Title = styled.p`
  font-size: 16px;
  letter-spacing: -0.02px;
  overflow: hidden;
  text-overflow: nowrap;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
`;

const Price = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
  line-height: 1.5;
`;

const Location = styled.p`
  font-size: 16px;
  letter-spacing: -0.02px;
  overflow: hidden;
  text-overflow: nowrap;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
`;

const Time = styled.p`
  font-size: 16px;
  letter-spacing: -0.02px;
  overflow: hidden;
  text-overflow: nowrap;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
`;
export default PostSearch;