import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
              <br />
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </p>
          </div>
          <img
            alt=""
            style={{ height: "700px" }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
          />
        </Wrap1>
      </Back1>
      <Back2>
        <Wrap2>
          <img
            alt=""
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
              <br />
              동네 주민들과 가깝고 따뜻하게 거래를 지금 경험해보세요.
              <br />
            </p>
            <button>인기매물 보기</button>
            <button>믿을 수 있는 중고거래</button>
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
              <br />
            </h1>
            <p class="text-m">
              <br />
              우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            </p>
            <div style={{ display: "flex" }}>
              <Li>
                <br />
                <img style={{ width: "40px" }} src={icon1} alt="" />
                <div>
                  우리동네질문
                  <br />
                  궁금한 게 있을 땐 이웃에게 물어보세요.
                </div>
              </Li>
              <Li>
                <br />
                <img style={{ width: "40px" }} src={icon2} alt="" />
                <div>
                  동네분실센터
                  <br />
                  무언가를 잃어버렸을 때, 함께 찾을 수 있어요.
                </div>
              </Li>
              <Li>
                <br />
                <img style={{ width: "40px" }} src={icon3} alt="" />
                <div>
                  동네모임
                  <br />
                  관심사가 비슷한 이웃과 온오프라인으로 만나요.
                </div>
              </Li>
            </div>
          </div>
          <img
            alt=""
            style={{ height: "700px" }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png"
          />
        </Wrap3>
      </Back3>
      <Back2>
        <Wrap2>
          <img
            alt=""
            style={{ height: "700px" }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp"
          />
          <div>
            <h1 style={{ fontSize: "48px" }}>
              내 근처에서 찾는
              <br />
              동네가게
            </h1>
            <p class="text-m">
              <br />
              우리 동네 가게를 찾고 있나요?
              <br />
              동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </p>
            <button>인기매물 보기</button>
            <button>믿을 수 있는 중고거래</button>
          </div>
        </Wrap2>
      </Back2>

      <Back4>
        <Title>중고거래 인기매물</Title>
        <Wrap4>
          <Box>
            <div>
              <img
                alt="이사정리"
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202206/246da9bc0dc96051a4b74fc4a246eff991ae34bbeff5ad2d91049dedab30836e.webp?q=82&amp;s=300x300&amp;t=crop"
              />
            </div>
            <div>
              <h2>이사정리</h2>
              <div>5,000원</div>
              <div>울산 남구 신정5동</div>
              <div>
                <span>관심 23</span>∙<span>채팅 79</span>
              </div>
            </div>
          </Box>
          <Box>
            <div>
              <img
                alt="야외 테이블 (드림)"
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202206/01F8179A40859B12B3F14570EE222631653B79A70E0611577BD9DA0CEA8D589A.jpg?q=82&amp;s=300x300&amp;t=crop"
              />
            </div>
            <div>
              <h2>야외 테이블 (드림)</h2>
              <div>1,000원</div>
              <div>경기도 파주시 운정3동</div>
              <div>
                <span>관심 12</span>∙<span>채팅 24</span>
              </div>
            </div>
          </Box>
          <Box>
            <div>
              <img
                alt="삼성 냉장고 (모델명:RT25HAR4DWW)"
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202206/db1c69cf4ad6b51c43846003e92e34c2df323854f7d4912f7a63b0956486d5cd.webp?q=82&amp;s=300x300&amp;t=crop"
              />
            </div>
            <div>
              <h2>삼성 냉장고 (모델명:RT25HAR4DWW)</h2>
              <div>139,000원</div>
              <div>서울 금천구 가산동</div>
              <div>
                <span>관심 10</span>∙<span>채팅 27</span>
              </div>
            </div>
          </Box>
          <Box>
            <div>
              <img
                alt="장난감 및 유아매트"
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202206/6287069382be2d125adb0f72b0bf3ce4043f86fb6b28499e6514cfb6ef2439e1.webp?q=82&amp;s=300x300&amp;t=crop"
              />
            </div>
            <div>
              <h2>장난감 및 유아매트</h2>
              <div>2,000원</div>
              <div>경기도 안산시 단원구 고잔동</div>
              <div>
                <span>관심 77</span>∙<span>채팅 84</span>
              </div>
            </div>
          </Box>
        </Wrap4>
        <div>인기매물 더 보기</div>
      </Back4>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <h3>중고거래 인기검색어</h3>
        <br />
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            width: "800px",
          }}
        >
          <li>포켓몬빵</li>
          <li>자전거</li>
          <li>의자</li>
          <li>냉장고</li>
          <li>캠핑</li>
          <li>아이패드</li>
          <li>아이폰</li>
          <li>노트북</li>
          <li>알바</li>
          <li>오토바이</li>
        </ul>
      </section>
      <Footer />
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
  width: 200px;
`;

const Back4 = styled.div`
  background-color: rgb(248, 249, 250);
  text-align: center;
  padding: 100px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 0px;
`;

const Wrap4 = styled.div`
  background-color: rgb(248, 249, 250);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
`;

const Box = styled.div`
  background-color: rgb(248, 249, 250);
  height: 500px;
`;

export default Home;
