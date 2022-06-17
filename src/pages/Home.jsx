import React from "react";
import Header from "../components/Header";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";

import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Header />
      <Back1>
        <Wrap1>
          <div>
            <h1 style={{ fontSize: "48px" }}>
              당신 근처의
              <br />
              당근마켓
            </h1>
            <p class="text-m">
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </p>
          </div>
          <img
            style={{ height: "700px" }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
          />
        </Wrap1>
      </Back1>
      <Back2>
        <Wrap2>
          <img
            style={{ height: "700px" }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png"
          />
          <div>
            <h1 style={{ fontSize: "48px" }}>
              우리 동네
              <br />
              중고 직거래 마켓
            </h1>
            <p class="text-m">
              동네 주민들과 가깝고 따뜻하게 거래를 지금 경험해보세요.
              <br />
              <button>인기매물 보기</button>{" "}
              <button>믿을 수 있는 중고거래</button>
            </p>
          </div>
        </Wrap2>
      </Back2>
      <Back3>
        <Wrap3>
          <div>
            <h1 style={{ fontSize: "48px" }}>
              이웃과 함께하는
              <br />
              동네생활
            </h1>
            <p class="text-m">
              우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            </p>
            <div style={{ display: "flex" }}>
              <Li>
                <img style={{ width: "40px" }} src={icon1} />
                <div>
                  우리동네질문
                  <br />
                  궁금한 게 있을 땐 이웃에게 물어보세요.
                </div>
              </Li>
              <Li>
                <img style={{ width: "40px" }} src={icon2} />
                <div>
                  동네분실센터
                  <br />
                  무언가를 잃어버렸을 때, 함께 찾을 수 있어요.
                </div>
              </Li>
              <Li>
                <img style={{ width: "40px" }} src={icon3} />
                <div>
                  동네모임
                  <br />
                  관심사가 비슷한 이웃과 온오프라인으로 만나요.
                </div>
              </Li>
            </div>
          </div>
          <img
            style={{ height: "700px" }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png"
          />
        </Wrap3>
      </Back3>
    </>
  );
};

const Back1 = styled.div`
  background-color: rgb(251, 247, 242);
  display: flex;
  align-items: center;
  padding-top: 100px;
`;

const Wrap1 = styled.div`
  background-color: rgb(251, 247, 242);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-left: 400px;
`;

const Back2 = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap2 = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

const Back3 = styled.div`
  background-color: rgb(230, 243, 230);
  display: flex;
  align-items: center;
  padding-top: 100px;
`;

const Wrap3 = styled.div`
  background-color: rgb(230, 243, 230);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 400px;
`;

const Li = styled.li`
  margin-right: 25px;
  font-size: 15px;
  width: 200px
`;

export default Home;
