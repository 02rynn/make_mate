import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import css from "../../css/MyPage.css";
import css2 from "../../css/Section.css";
import MapShow from "../Map/MapShow";
import {useSelector, useDispatch} from "react-redux";
import Comment from "../Map/Test.js";
import {useEffect} from "react";
import axios from "axios";
import SingleTweet from "../Map/SingleTweet";

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
  const [urlParam, setUrlParam] = useState("");
  const [comment, setComment] = useState([]);

  let loginId = useSelector((state) => {
    return state.loginId;
  });

  const [state, setState] = useState({
    tweets: comment,
  });
  const addTweet = () => {
    const userId = sessionStorage.getItem("loginId");
    let value = document.querySelector("#new-tweet-content").value;
    let copy = [...comment];
    copy.push({commentWriter: userId, content: value});

    setComment(copy);
    axios
      .post("http://localhost:8080/comment/" + no + "/" + value + "/" + userId)
      .then((response) => {
        document.querySelector("#new-tweet-content").value = "";
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/getcomment/" + no)
      .then((response) => {
        setComment(response.data);
        console.log(comment);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(comment);
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
            {createdTime}
          </p>
          {/* <p
            style={{
              fontSize: "10px",
              color: "darkgray",
              textAlign: "left",
              marginLeft: "5px",
            }}>
            {author}
          </p> */}

          <a
            id="id"
            onClick={(e) => {
              console.log(document.getElementById("id").innerText);
              setUrlParam(document.getElementById("id").innerText);
            }}
            href={"/yourpage/" + urlParam}
            style={{
              fontSize: "10px",
              color: "darkgray",
              textAlign: "left",
              marginLeft: "5px",
              textDecoration: "none",
            }}>
            {" "}
            {author}
          </a>

          {/* <p style={{fontSize: "8px", color: "darkgray"}}>{createdTime}</p> */}
          {/* <p style={{fontSize: "8px", color: "darkgray"}}>{author}</p> */}
        </div>
        <MapShow address={address} />

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

        {author == loginId_session ? <Buttons></Buttons> : null}
      </div>
      <div style={{marginTop: "20px"}}></div>
      {/* <Comment comment={comment}></Comment> */}
      <div id="root">
        <div>
          <div
            id="writing-area"
            style={{
              marginLeft: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <textarea className="text_comment" id="new-tweet-content" />
            <button
              id="submit"
              className="logout"
              onClick={addTweet}
              style={{width: "100px", marginLeft: "1%"}}>
              {" "}
              댓글입력
            </button>
          </div>
          <ul id="tweets">
            {comment?.map((tweet) => {
              return <SingleTweet tweet={tweet} />;
            })}
          </ul>
        </div>
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
          style={{width: "100px"}}
          type="submit"
          className="logout"
          onClick={() => {
            navigate("/update-board/" + no);
          }}>
          수정{" "}
        </button>
        <button
          style={{
            backgroundColor: " #001529",
            marginTop: "3%",
            marginLeft: "2%",
            width: "100px",
          }}
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
