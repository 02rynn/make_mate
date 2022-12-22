import {Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import StudyBoard from "../pages/StudyBoard";
import HobbyBoard from "../pages/HobbyBoard";
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
import Section from "../components/Section";

function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/bulletinBoard/study" element={<StudyBoard />}></Route>
        <Route path="/bulletinBoard/hobby" element={<HobbyBoard/>}></Route>
        <Route path="/bulletinBoard/sports" element={<SportsBoard />}></Route>
        <Route path="/bulletinBoard/mate" element={<MateBoard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/note" element={<Note />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/nickname" element={<Nickname></Nickname>}></Route>
        <Route path="/mypage/password" element={<Password></Password>}></Route>
        <Route path="/mypage/email" element={<Email></Email>}></Route>
        <Route path="/mypage/myarticle" element={<MyArticle></MyArticle>}></Route>
        <Route path="/mypage/mycommment" element={<MyComment></MyComment>}></Route>
        <Route path="/mypage/withdrawal" element={<Withdrawal></Withdrawal>}></Route>
        {/* 섹션확인용 */}
        <Route path="/mypage/section" element={<Section></Section>}></Route>
      </Routes>
    </div>
  );
}
export default RoutesContainer;
