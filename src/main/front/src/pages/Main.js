import React from "react";
import {Layout, theme, Card} from "antd";
import {useState, useEffect} from "react";
import axios from "axios";
// import MapContainer from '../components/MapContainer';
// import ProfileImgContainer from '../components/ProfileImgContainer';
import user from "../images/user.jpg";
import {useNavigate} from "react-router-dom";
import MainGrap from "../components/MainGraf/MainGrap";
import "../css/Main.css";
import JHBoard from "./JHBoard";
import MJBoard from "./MJBoard";
import GJBoard from "./GJBoard";
import HRBoard from "./HRBoard";

function Main() {
  const [imgPath, setImgPath] = useState();
  const userId = sessionStorage.getItem("id");
  useEffect(() => {
    if (userId != null) {
      axios
        .get("http://localhost:8080/img/" + userId)
        .then((response) => {
          setImgPath(response.data.userUploadPath);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);
  let navigate = useNavigate();
  // let sessionStorage = window.sessionStorage;
  const {Header, Content, Footer, Sider} = Layout;
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const {Meta} = Card;
  const [category, setCategory] = useState([]);
  const [Title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = `A friend is a second self, Make Mate!`;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setTitle("");
        }

        return result;
      });
    }, 190);

    return () => {
      clearInterval(typingInterval);
    };
  });

  if (count >= completionWord.length) {
    setCount(0);
    setTitle("");
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/category/ss")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mainContainer">
      <div className="sideBar">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}>
            <Card
              style={{
                width: "auto ",
                margin: "3%",
                marginTop: "10%",
              }}
              cover={
                <img
                  style={{padding: "3%", borderRadius: "10%"}}
                  alt="example"
                  src={
                    imgPath === undefined
                      ? user
                      : process.env.PUBLIC_URL + "/profile/" + imgPath
                  }
                />
              }>
              <Meta
                style={{textAlign: "center"}}
                title={sessionStorage.getItem("loginId")}
              />
              <br />
              <p>안녕하세요!</p>
              <span
                style={{
                  margin: "6%",
                  backgroundColor: "#ff7f27",
                  color: "#FFFFFF",
                  padding: "1%",
                  borderRadius: "10%",
                }}
                onClick={() => {
                  navigate("mypage");
                }}>
                <a>내정보</a>
              </span>
              <span
                style={{
                  margin: "6%",
                  backgroundColor: "#ff7f27",
                  color: "#FFFFFF",
                  padding: "1%",
                  borderRadius: "10%",
                }}
                onClick={() => {
                  sessionStorage.clear();
                }}>
                로그아웃
              </span>
            </Card>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}>
              <div
                className="mainTitle"
                style={{textAlign: "center", fontSize: "22px"}}>
                {Title}
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px 0",
                height: "100rem",
              }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 1600,
                  background: colorBgContainer,
                }}>
                <div>
                  <div className="home-wrapper">
                    <div className="home-title">
                      <span>MakeMate</span>에 오신걸 환영합니다
                    </div>
                    <div className="home-contents">
                      자유롭게 게시판에 글을 작성하고📝
                      <br />
                      댓글로 여러 의견을 나눠보세요✏️
                    </div>

                    {category.map((data, i) => {
                      return (
                        <div>
                          <MJBoard
                            name={data.categoryName}
                            code={data.categoryCode}></MJBoard>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}>
              Human Design ©2022 Created by TDOUCI5
            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
export default Main;
