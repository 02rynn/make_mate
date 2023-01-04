import {Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import StudyBoard from "../pages/StudyBoard";
import Board from "../pages/Board";
import SportsBoard from "../pages/SportsBoard";
import MateBoard from "../pages/MateBoard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Note from "../pages/Note";
import MyPage from "../pages/MyPage";
import Email from "../components/Email";
import Nickname from "../components/Nickname";
import Password from "../components/Password";
import MyArticle from "../components/MyArticle";
import MyComment from "../components/MyComment";
import Withdrawal from "../components/Withdrawal";
import Address from "../components/Address";
import ImgTest from "./../pages/imgTest";
import WriteForm from "../components/Board/WriteForm";
import ContentForm from "../components/Board/ContentForm";
import Profile from "../components/Profile";
import ChatRoom from "./ChatRoom";
import YourProfile from "./YourProfile.js";
import NotFound from "../pages/NotFound";
import MapContainer from '../components/MapContainer';
import MapSearch from '../components/MapSearch';


function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/map" element={<MapContainer />}></Route>
        <Route path="/mapsearch" element={<MapSearch />}></Route>
        <Route path="/bulletinBoard/study" element={<StudyBoard />}></Route>
        <Route path="/bulletinBoard/hobby" element={<Board />}></Route>
        <Route path="/bulletinBoard/sports" element={<SportsBoard />}></Route>
        <Route path="/bulletinBoard/mate" element={<MateBoard />}></Route>
        <Route path="/ContentForm" element={<ContentForm />} />
        <Route path="/WriteForm" element={<WriteForm />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/note" element={<Note />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/nickname" element={<Nickname> </Nickname>}></Route>
        <Route
          Route
          path="/mypage/password"
          element={<Password> </Password>}></Route>
        <Route path="/mypage/email" element={<Email> </Email>}></Route>
        <Route
          Route
          path="/mypage/myarticle"
          element={<MyArticle> </MyArticle>}></Route>
        <Route
          path="/mypage/mycomment"
          element={<MyComment> </MyComment>}></Route>
        <Route
          path="/mypage/withdrawal"
          element={<Withdrawal> </Withdrawal>}></Route>
        {/* 섹션확인용 */}
        <Route path="/mypage/section" element={<Address> </Address>}></Route>
        <Route path="/imgUpLoad" element={<ImgTest> </ImgTest>}></Route>
        <Route
          path="/contentForm"
          element={<ContentForm> </ContentForm>}></Route>
        <Route path="/writeForm" element={<WriteForm> </WriteForm>}></Route>
        <Route path="/mypage/profile" element={<Profile></Profile>}></Route>
        <Route path="/chat" element={<ChatRoom></ChatRoom>}></Route>
        <Route
          path="/yourpage/profile"
          element={<YourProfile></YourProfile>}></Route>
      </Routes>
    </div>
  );
}
export default RoutesContainer;
