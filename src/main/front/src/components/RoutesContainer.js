import {Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import MJBoard from "../pages/MJBoard";
import JHBoard from "../pages/JHBoard";
import HRBoard from "../pages/HRBoard";
import GJBoard from "../pages/GJBoard";
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
import Admin from "./Admin/Admin";
import ImgTest from "./../pages/imgTest";
import ReviewBullet from "../components/ReviewBullet";
import Review from "../pages/Review";
import YourArticle from "../components/YourArticle";
import YourComment from "../components/YourComment";
import Profile from "../components/Profile";
import ChatRoom from "./ChatRoom";
import YourProfile from "./YourProfile.js";
import NoteCopy from "../pages/Note copy";
import NotFound from "../pages/NotFound";
import Test from "../components/Map/Test";

import CreateBoardComponent from "./Board/CreateBoardComponent";
import ReadBoardComponent from "./Board/ReadBoardComponent";
import UpdateBoardComponent from "./Board/UpdateBoardComponent";
import DeleteBoard from "./Board/DeleteBoard";
import AdminStop from "./Admin/AdminStop";
import AdminBoard from "./Admin/AdminBoard";
import ReviewRRR from "../pages/Review copy";

function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/test" element={<Test />}></Route>
        {/* <Route path="/map" element={<MapContainer />}></Route>
        <Route path="/mapsearch" element={<MapSearch />}></Route> */}
        {/* <Route path="/bulletinBoard/study" element={<BbsList />}></Route>
        <Route path="/bulletinBoard/hobby" element={<Board />}></Route> */}
        {/* <Route path="/bbswrite" element={<BbsWrite />}></Route>
        <Route path="/bbsdetail/:seq" element={<BbsDetail />}></Route>
        <Route path="/bbsupdate" element={<BbsUpdate />}></Route> */}
        <Route path="/admin" element={<Admin />}></Route>
        {/* <Route path="/bbsanswer/:parentSeq" element={<BbsAnswer />}></Route> */}
        {/* <Route path="/board" element={<Board />}></Route> */}
        <Route path="/create-board" element={<CreateBoardComponent />}></Route>
        <Route path="/read-board/:no" element={<ReadBoardComponent />}></Route>
        <Route
          path="/update-board/:no"
          element={<UpdateBoardComponent />}></Route>
        {/* <Route path="/bulletinBoard/sports" element={<SportsBoard />}></Route> */}
        {/* <Route path="/bulletinBoard/mate" element={<MateBoard />}></Route> */}
        <Route path="/bulletinBoard/study" element={<MJBoard />}></Route>
        <Route path="/bulletinBoard/hobby" element={<JHBoard />}></Route>
        {/* <Route path = "/create-board" element = {<CreateBoardComponent/>}></Route>
              <Route path = "/read-board/:no" element = {<ReadBoardComponent/>}></Route> */}
        {/* <Route path = "/update-board/:no" element = {<UpdateBoardComponent />}></Route> */}
        <Route path="/delete-board/:no" element={<DeleteBoard />}></Route>
        <Route path="/bulletinBoard/sports" element={<HRBoard />}></Route>
        <Route path="/bulletinBoard/mate" element={<GJBoard />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/note" element={<Note />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/nickname" element={<Nickname> </Nickname>}></Route>
        <Route path="/AdminStop" element={<AdminStop />}></Route>
        <Route path="/AdminBoard" element={<AdminBoard />}></Route>
        <Route
          Route
          path="/mypage/password"
          element={<Password> </Password>}></Route>
        <Route Route path="/mypage/email" element={<Email> </Email>}></Route>
        <Route
          Route
          path="/mypage/myarticle"
          element={<MyArticle> </MyArticle>}></Route>
        <Route
          path="/mypage/mycomment"
          element={<MyComment> </MyComment>}></Route>
        <Route
          Route
          path="/mypage/withdrawal"
          element={<Withdrawal> </Withdrawal>}></Route>{" "}
        {/* 섹션확인용 */}{" "}
        <Route path="/mypage/section" element={<Address> </Address>}></Route>
        <Route Route path="/imgUpLoad" element={<ImgTest> </ImgTest>}></Route>
        <Route
          Route
          path="/mypage/profile"
          element={<Profile> </Profile>}></Route>
        <Route path="/chat" element={<ChatRoom> </ChatRoom>}></Route>
        <Route
          path="/yourpage/:id"
          element={<YourProfile> </YourProfile>}></Route>
        <Route
          path="/yourpage/yourarticle/:id"
          element={<YourArticle> </YourArticle>}></Route>
        <Route
          path="/yourpage/yourcomment/:id"
          element={<YourComment> </YourComment>}></Route>
        <Route path="/review/:id" element={<ReviewRRR> </ReviewRRR>}></Route>
        <Route
          path="/mypage/reviewbullet/"
          element={<ReviewBullet> </ReviewBullet>}></Route>
        {/* <Route path="/noteDemo" element={<TestAra />}></Route> */}
      </Routes>
    </div>
  );
}
export default RoutesContainer;
