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
import Review from '../pages/Review';


function RoutesContainer () {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/bulletinBoard/study" element={<StudyBoard />}></Route>
                <Route path="/bulletinBoard/hobby" element={<HobbyBoard />}></Route>
                <Route path="/bulletinBoard/sports" element={<SportsBoard />}></Route>
                <Route path="/bulletinBoard/mate" element={<MateBoard />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route Route path="/signup" element={<Signup />}></Route>
                <Route path="/note" element={<Note />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/review" element={<Review />}></Route>

            </Routes>
        </div>
    )
}
export default RoutesContainer;