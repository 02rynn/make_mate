// <<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import BulletinBoard from './components/BulletinBoard';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Main from './components/Main';
import logo from './images/logo.jpg';
import StudyBoard from './components/StudyBoard';
import HobbyBoard from './components/HobbyBoard';
import SportsBoard from './components/SportsBoard';
import MateBoard from './components/MateBoard';
import Login from './components/Login';
import Signup from './components/Signup';
import Note from './components/Note';
import MyPage from './components/MyPage';



// =======

import {useEffect, useState} from "react";
import axios from "axios";
// >>>>>>> 593774b9217a06489dfa33daa5b2fd68464b2a5c
function App() {
  const [hello, setHello] = useState("");
  const [hello2, setHello2] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));

    axios
      .get("/api/test")
      .then((response) => setHello2(response.data))
      .catch((error) => console.log(error));
  }, []);

  let navigate = useNavigate();

  return (
    <div className="App">
      <div className="NavBar">
        <Navbar
          bg="white"
          expand="lg"
          style={{borderBottom: "1px solid black"}}>
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("/");
              }}>
              <img src={logo} style={{width: "60%", marginLeft: "-10%"}} />
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavDropdown title="게시판" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    navigate("bulletinBoard/study");
                  }}>
                  스터디 게시판
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("bulletinBoard/hobby");
                  }}>
                  취미 게시판
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("bulletinBoard/sports");
                  }}>
                  운동 게시판
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("bulletinBoard/mate");
                  }}>
                  밥메이트 게시판
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={() => {
                  navigate("login");
                }}>
                로그인
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("signup");
                }}>
                회원가입
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("note");
                }}>
                쪽지{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("mypage");
                }}>
                MyPage{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>{" "}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/bulletinBoard/study" element={<StudyBoard />}></Route>
          <Route path="/bulletinBoard/hobby" element={<HobbyBoard />}></Route>
          <Route path="/bulletinBoard/sports" element={<SportsBoard />}></Route>
          <Route path="/bulletinBoard/mate" element={<MateBoard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
