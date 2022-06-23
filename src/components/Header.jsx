import React from "react";
import styled from "styled-components";
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import PostSearch from "./HeaderSearch";

const Header = () => {
  const cookie = getCookie("authorization");
  const [is_cookie, setCookie] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  React.useEffect(() => {
    if (cookie !== undefined) {
      return setCookie(true);
    }
  }, []);

  const onLogout = (e) => {
    deleteCookie("authorization");
    deleteCookie("username");
    setCookie(false);
  };

  return (
    <>
      <Wrap>
        <Svg>
          <Logo>
            <Link to="/">
              <svg
                width="86"
                height="26"
                viewBox="0 0 86 26"
                style={{ marginTop: "-3px" }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10843 4.45364C4.08025 4.45364 0 8.53612 0 13.567C0 15.6701 0.741863 17.6083 1.93709 19.1753C2.01952 19.299 2.14316 19.4227 2.22559 19.5052C2.34923 19.6701 2.51409 19.8351 2.67895 20C4.40996 21.8557 6.63555 23.2578 9.10843 24C11.5813 23.2578 13.8069 21.8557 15.5379 20C15.7028 19.8351 15.8264 19.6701 15.9913 19.5052C16.0737 19.3815 16.1973 19.2578 16.2798 19.1753C17.475 17.6495 18.2169 15.7114 18.2169 13.567C18.2169 8.53612 14.1366 4.45364 9.10843 4.45364ZM9.10843 17.031C7.17134 17.031 5.60519 15.4639 5.60519 13.5258C5.60519 11.5877 7.17134 10.0207 9.10843 10.0207C11.0455 10.0207 12.5705 11.5877 12.5705 13.5258C12.5705 15.4639 11.0455 17.031 9.10843 17.031Z"
                  fill="#FF8A3D"
                ></path>
                <path
                  d="M12.0759 4.24743C12.6941 4.12372 13.1474 3.58763 13.1474 2.92784C13.1474 2.18557 12.5292 1.60825 11.8286 1.60825C11.6225 1.60825 11.4164 1.64949 11.2516 1.73196C11.0043 0.742269 10.1388 0 9.10842 0C8.07805 0 7.21254 0.742269 7.00647 1.73196C6.84161 1.64949 6.63554 1.60825 6.42946 1.60825C5.6876 1.60825 5.1106 2.22681 5.1106 2.92784C5.1106 3.58763 5.56396 4.12372 6.18218 4.24743C7.13011 3.91753 8.11926 3.75258 9.14963 3.75258C10.18 3.75258 11.1279 3.91753 12.0759 4.24743Z"
                  fill="#56C271"
                ></path>
                <path
                  d="M24.7287 13.6904H30.2927C30.9934 13.6904 31.5292 13.278 31.5292 12.412C31.5292 11.546 30.9934 11.1337 30.2927 11.1337H25.4294C25.1821 11.1337 25.0172 10.9687 25.0172 10.7625V8.57697C25.0172 8.32955 25.1821 8.20584 25.4294 8.20584H30.2927C30.9934 8.20584 31.5292 7.79347 31.5292 6.92749C31.5292 6.06151 30.9934 5.64914 30.2927 5.64914H24.7287C22.8329 5.64914 21.9261 6.47388 21.9261 8.08213V11.2986C21.9261 12.8656 22.8329 13.6904 24.7287 13.6904Z"
                  fill="#FF8A3D"
                ></path>
                <path
                  d="M31.6939 14.7216H26.2123C23.7395 14.7216 22.1321 16.0825 22.1321 18.0618C22.1321 20 23.7395 21.3608 26.2123 21.3608H31.6939C34.1668 21.3608 35.8153 20 35.8153 18.0618C35.8153 16.0825 34.1668 14.7216 31.6939 14.7216ZM31.6939 18.8041H26.2123C25.5941 18.8041 25.2644 18.4742 25.2644 18.0618C25.2644 17.6082 25.5941 17.2783 26.2123 17.2783H31.6939C32.3121 17.2783 32.6418 17.6082 32.6418 18.0618C32.6418 18.4742 32.3121 18.8041 31.6939 18.8041Z"
                  fill="#FF8A3D"
                ></path>
                <path
                  d="M36.3513 8.24739H35.4858V6.55667C35.4858 5.8144 34.8676 5.27832 33.9197 5.27832C33.0129 5.27832 32.3535 5.8144 32.3535 6.55667V13.0309C32.3535 13.7732 33.0129 14.3092 33.9197 14.3092C34.8264 14.3092 35.4858 13.7732 35.4858 13.0309V11.2577H36.3513C37.052 11.2577 37.629 10.6391 37.629 9.73192C37.629 8.90718 37.052 8.24739 36.3513 8.24739Z"
                  fill="#FF8A3D"
                ></path>
                <path
                  d="M51.8891 15.1337H39.1538C38.4119 15.1337 37.7937 14.6388 37.7937 13.7316C37.7937 12.9069 38.4119 12.3708 39.1538 12.3708H51.8891C52.631 12.3708 53.2492 12.9069 53.2492 13.7316C53.2492 14.6388 52.6722 15.1337 51.8891 15.1337ZM49.2926 10.6388V8.98934C49.2926 8.70068 49.1277 8.53574 48.8804 8.53574H40.0193C39.2362 8.53574 38.618 8.04089 38.618 7.13367C38.618 6.22645 39.2774 5.69037 40.0193 5.69037H49.5399C51.4358 5.69037 52.3837 6.68006 52.3837 8.41202V10.6801C52.3837 11.4223 51.7655 11.9584 50.8175 11.9584C49.8696 11.9584 49.2926 11.3811 49.2926 10.6388ZM41.8327 16.9069V18.0203C41.8327 18.2265 41.9976 18.3914 42.2449 18.3914H51.3533C52.1364 18.3914 52.7546 18.8863 52.7546 19.7935C52.7546 20.7007 52.0952 21.1956 51.3533 21.1956H41.6267C39.7308 21.1956 38.7416 20.4121 38.7416 18.6801V16.9069C38.7416 16.1646 39.3599 15.6285 40.3078 15.6285C41.1733 15.6285 41.8327 16.2059 41.8327 16.9069Z"
                  fill="#FF8A3D"
                ></path>
                <path
                  d="M54.8564 18.3505V7.83502C54.8564 6.39172 55.5983 5.64945 57.082 5.64945H61.1623C62.646 5.64945 63.3879 6.39172 63.3879 7.83502V18.3505C63.3879 19.7938 62.646 20.5361 61.1623 20.5361H57.082C55.5571 20.5361 54.8564 19.7938 54.8564 18.3505ZM60.4204 17.3608V8.82471C60.4204 8.61852 60.2968 8.49481 60.1319 8.49481H58.1124C57.9475 8.49481 57.8239 8.61852 57.8239 8.82471V17.3196C57.8239 17.5257 57.9475 17.6495 58.1124 17.6495H60.1319C60.2968 17.6907 60.4204 17.5257 60.4204 17.3608ZM65.2425 20.0412V6.68038C65.2425 5.89687 65.902 5.31955 66.8087 5.31955C67.7154 5.31955 68.3749 5.93811 68.3749 6.68038V11.0515H69.2404C69.941 11.0515 70.518 11.7113 70.518 12.5773C70.518 13.4845 69.941 14.1443 69.2404 14.1443H68.3749V20.0824C68.3749 20.866 67.7566 21.4433 66.8087 21.4433C65.902 21.402 65.2425 20.8247 65.2425 20.0412Z"
                  fill="#FF8A3D"
                ></path>
                <path
                  d="M78.5137 8.94842H79.132V6.55666C79.132 5.85563 79.709 5.40202 80.5333 5.40202C81.3576 5.40202 81.9346 5.85563 81.9346 6.55666V13.7732C81.9346 14.4742 81.3988 14.9278 80.5333 14.9278C79.6678 14.9278 79.132 14.433 79.132 13.7319V11.6288H78.5137C78.184 11.6288 77.8543 11.4639 77.6482 11.1752C76.7827 13.0721 75.299 14.5979 73.197 15.5464C72.5376 15.835 71.7957 15.6701 71.4248 15.0103C71.0539 14.3505 71.3012 13.567 71.8782 13.2783C72.8261 12.8659 73.6092 12.2886 74.2274 11.5876H72.7025C72.1255 11.5876 71.5897 11.2577 71.5897 10.4742C71.5897 9.77316 72.0842 9.36079 72.7025 9.36079H75.3814C75.4639 9.07213 75.5463 8.78347 75.5463 8.49481C75.5875 8.24739 75.4639 8.08244 75.2166 8.08244H72.7437C72.043 8.08244 71.5485 7.67007 71.5485 6.88656C71.5485 6.10306 72.043 5.64945 72.7437 5.64945H75.7111C77.6894 5.64945 78.5962 6.5979 78.3077 8.74223C78.3077 8.82471 78.3077 8.90718 78.2665 8.98965C78.3901 8.94842 78.4313 8.94842 78.5137 8.94842ZM84.0777 21.1134C82.1819 20.701 79.915 19.6701 78.4313 18.4742C77.0712 19.835 75.2578 20.8247 73.3207 21.1958C72.6612 21.3196 71.9194 21.0309 71.6721 20.2062C71.466 19.4226 71.837 18.7629 72.5376 18.5567C74.6396 18.0206 76.3706 16.7835 77.2361 15.1752C77.5246 14.6804 78.2252 14.3505 79.0907 14.5979C79.9563 14.8866 80.3272 15.7113 80.0387 16.2886V16.3299C81.2751 17.3196 83.0474 18.1031 84.8196 18.5154C85.479 18.6804 85.8912 19.3402 85.6851 20.1237C85.479 20.9484 84.7372 21.2783 84.0777 21.1134ZM82.6352 14.2268V6.47419C82.6352 5.77316 83.2122 5.31955 84.0777 5.31955C84.9432 5.31955 85.5202 5.77316 85.5202 6.47419V14.2268C85.5202 14.9278 84.9432 15.3814 84.0777 15.3814C83.2122 15.3814 82.6352 14.9278 82.6352 14.2268Z"
                  fill="#FF8A3D"
                ></path>
              </svg>
            </Link>
            <Link to="/Main">
              <Main1>
                <h3>중고거래</h3>
              </Main1>
            </Link>
          </Logo>
          <Menu>
            {is_cookie ? (
              <>
                <PostSearch></PostSearch>
                <Link to="/post/add">
                  <Write>
                    <h3>글작성</h3>
                  </Write>
                </Link>
                <Link to="/">
                  <LogOut>
                    <h3 onClick={onLogout}>로그아웃</h3>
                  </LogOut>
                </Link>
              </>
            ) : (
              <>
                <PostSearch></PostSearch>
                <LoginButton
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  <h3>로그인</h3>
                </LoginButton>
                {
                  modalOpen == true ? (
                    <LoginModal
                      open={openModal}
                      close={closeModal}
                      header="로그인"
                    />
                  ) : null // 기계역활
                }
                <SignUpButton
                  onClick={() => {
                    setModalOpen2(true);
                  }}
                >
                  <h3>회원가입</h3>
                </SignUpButton>
                {
                  modalOpen2 == true ? (
                    <SignupModal
                      open={openModal2}
                      close={closeModal2}
                      header="회원가입"
                    />
                  ) : null // 기계역활
                }
              </>
            )}
          </Menu>
        </Svg>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  width: 100%;
`;

const Svg = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 0 20%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

const LogOut = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

const SignUpButton = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

const Write = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #212124;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

const Main1 = styled.button`
  background-color: #fff;
  opacity: 0.7;
  line-height: 1.3;
  display: block;
  white-space: nowrap;
  color: #ff8c00;
  margin: 0 0 0 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f2f3f6;
  }
`;

export default Header;
