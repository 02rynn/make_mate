import {Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import BbsList from "../pages/BbsList";
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


import Profile from "../components/Profile";
import ChatRoom from "./ChatRoom";
import YourProfile from "./YourProfile.js";
import NoteCopy from "../pages/Note copy";
import NotFound from "../pages/NotFound";
import Test from './Map/Test';


import BbsWrite from "./bbs/BbsWrite";
import BbsDetail from "./bbs/BbsDetail";
import BbsUpdate from './bbs/BbsUpdate';
import BbsAnswer from './bbs/BbsAnswer'

import CreateBoardComponent from "./Board/CreateBoardComponent";
import ReadBoardComponent from './Board/ReadBoardComponent';
import UpdateBoardComponent from './Board/UpdateBoardComponent';




function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        {/* <Route path="/map" element={<MapContainer />}></Route>
        <Route path="/mapsearch" element={<MapSearch />}></Route> */}
        <Route path="/bulletinBoard/study" element={<BbsList />}></Route>
        <Route path="/bulletinBoard/hobby" element={<Board />}></Route>
        <Route path="/bbswrite" element={<BbsWrite />}></Route>
				<Route path="/bbsdetail/:seq" element={<BbsDetail />}></Route>
				<Route path="/bbsupdate" element={<BbsUpdate />}></Route>
				<Route path="/bbsanswer/:parentSeq" element={<BbsAnswer />}></Route>


        
              <Route path = "/board" element = {<Board/>}></Route>
              <Route path = "/create-board" element = {<CreateBoardComponent/>}></Route>
              <Route path = "/read-board/:no" element = {<ReadBoardComponent/>}></Route>
              <Route path = "/update-board/:no" element = {<UpdateBoardComponent />}></Route>




        <Route path="/bulletinBoard/sports" element={<SportsBoard />}></Route>
        <Route path="/bulletinBoard/mate" element={<MateBoard />}></Route>
      
   
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/note" element={<Note />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/nickname" element={<Nickname> </Nickname>}></Route>
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
          path="/yourpage/profile"
          element={<YourProfile> </YourProfile>}></Route>
        <Route path="/noteDemo" element={<NoteCopy> </NoteCopy>}></Route>
      </Routes>{" "}
    </div>
  );
}
export default RoutesContainer;
