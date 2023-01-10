import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import css from "../../css/MyPage.css";
import css2 from "../../css/Section.css";
import MapShow from "../Map/MapShow";
import {useSelector, useDispatch} from "react-redux";
import Comment from "../Comment";

const ReadBoardComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const no = location.state.no;
  const title = location.state.title;
  const content = location.state.content;
  const createdTime = location.state.createdTime;
  const author = location.state.author;
  const address = location.state.address;
  const loginId_session = sessionStorage.getItem("loginId");
  let loginId = useSelector((state) => {
    return state.loginId;
  });

  console.log(address);

  return (
    <div>
      <div className="section_container">
        <p className="section_title">{title}</p>
        <p style={{textAlign: "left", marginLeft: "10px"}}>{content}</p>

        <div className="author_box" style={{display: "flex"}}>
          <p
            style={{
              fontSize: "10px",
              color: "darkgray",
              textAlign: "left",
              marginLeft: "10px",
            }}>
            2023-01-10
          </p>
          <p
            style={{
              fontSize: "10px",
              color: "darkgray",
              textAlign: "left",
              marginLeft: "5px",
            }}>
            혜링
          </p>
          <p style={{fontSize: "8px", color: "darkgray"}}>{createdTime}</p>
          <p style={{fontSize: "8px", color: "darkgray"}}>{author}</p>
        </div>
        <MapShow address={address} />
        <Comment />
        {/* <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>게시물 번호</th>
              <td> {no} </td>
            </tr>
            <tr>
              <th> 글제목 </th>
              <td> {title} </td>
            </tr>

            <tr>
              <th>최근등록일 </th>
              <td> {createdTime} </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>{content}</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{author}</td>
            </tr>
          </thead>
        </table> */}

        {{author} == {loginId_session} ? <Buttons></Buttons> : null}
      </div>
    </div>
  );
};

function Buttons() {
  const navigate = useNavigate();
  const location = useLocation();
  const no = location.state.no;
  return (
    <>
      <div className=" button_container">
        <button
          type="submit"
          className="logout"
          onClick={() => {
            navigate("/update-board/" + no);
          }}>
          수정{" "}
        </button>
        <button
          type="submit"
          className="logout"
          onClick={() => {
            navigate("/delet-board/" + no);
          }}>
          삭제
        </button>
      </div>
    </>
  );
}

export default ReadBoardComponent;
