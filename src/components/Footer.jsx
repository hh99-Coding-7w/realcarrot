import React from "react";

import styled from "styled-components";

const Footer = () => {
  return (
    <Footer1>
      <div style={{ width: "1000px" }}>
        <Footer2 style={{ borderBottom: "1px solid" }}>
          <img
            alt="logo"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/logo-a4f4848ffd1d5fcb13d1d3ecf82ffbc77c31ebe226f67097386497a34638c059.svg"
            style={{ width: "130px", height: "37px" }}
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
        </Footer2>
        <Footer2>
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
        </Footer2>
        <Footer2>
          <ul style={{ display: "flex", gap: "30px" }}>
            <li>
              <img
                alt="facebook"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg"
              />
            </li>
            <li>
              <img
                alt="instagram"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg"
              />
            </li>
            <li>
              <img
                alt="blog"
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg"
              />
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
          <br />
          <div>©Danggeun Market Inc.</div>
        </Footer2>
      </div>
    </Footer1>
  );
};

const Footer1 = styled.footer`
  background-color: rgb(73, 80, 87);
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const Footer2 = styled.footer`
  background-color: rgb(73, 80, 87);
  color: white;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: 13px;
  color: rgb(148, 157, 167);
  padding: 10px;
`;

export default Footer;
