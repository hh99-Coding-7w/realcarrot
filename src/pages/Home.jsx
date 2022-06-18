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

      <Footer>
        <div>
          <Footer1>
            <img
              alt="logo"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/logo-a4f4848ffd1d5fcb13d1d3ecf82ffbc77c31ebe226f67097386497a34638c059.svg"
            />
            <ul>
              <li>믿을 수 있는 중고거래</li>
              <li>자주 묻는 질문</li>
            </ul>
            <ul>
              <li>광고주센터</li>
              <li>당근페이</li>
              <li>동네가게</li>
            </ul>
            <ul>
              <li>회사 소개</li>
              <li>채용</li>
            </ul>
            <ul>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>위치기반서비스 이용약관</li>
              <li>이용자보호 비전과 계획</li>
            </ul>
          </Footer1>
          <Footer1>
            <ul>
              <li>고객문의 cs@daangnservice.com</li>
              <li>제휴문의 contact@daangn.com</li>
            </ul>
            <ul>
              <li>지역광고 ad@daangn.com</li>
              <li>PR문의 pr@daangn.com</li>
            </ul>
            <ul>
              <li>
                <address>
                  서울특별시 구로구 디지털로30길 28, 609호 (당근서비스)
                </address>
              </li>
              <li>사업자 등록번호 : 375-87-00088</li>
              <li>직업정보제공사업 신고번호 : J1200020200016</li>
            </ul>
          </Footer1>
          <Footer1>
            <ul style={{ display: "flex", gap: "30px" }}>
              <li>
                <img
                  alt="facebook"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg"
                />
                <span>facebook</span>
              </li>
              <li>
                <img
                  alt="instagram"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg"
                />
                <span>instagram</span>
              </li>
              <li>
                <img
                  alt="blog"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg"
                />
                <span>blog</span>
              </li>
              <li>
                <img
                  alt="country"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-global-2f53678b428ec623cefd07a90dd7777f3e55fc0433918f645d7d75ace6ff1fc3.png"
                  width="24"
                  height="24"
                />
                <select>
                  <option>한국</option>
                  <option>영국</option>
                  <option>캐나다</option>
                  <option>미국</option>
                  <option>일본</option>
                </select>
              </li>
            </ul>
          </Footer1>
          <div>©Danggeun Market Inc.</div>
        </div>
      </Footer>
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

const Footer = styled.footer`
  background-color: rgb(73, 80, 87);
  color: white;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

const Footer1 = styled.footer`
  background-color: rgb(73, 80, 87);
  color: white;
  display: flex;
  justify-content: center;
  gap: 150px;
  margin: 30px;
`;

export default Home;
