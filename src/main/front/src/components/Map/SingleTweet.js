import React from "react";
import css from "../../css/Section.css";
import css12 from "../../css/comment.css";
import {useState, useEffect} from "react";
import axios from "axios";

export default function SingleTweet({tweet}) {
  const [urlParam, setUrlParam] = useState("");
  const user = sessionStorage.getItem("loginId");
  console.log(urlParam);
  console.log({tweet});
  console.log(tweet.commentId);

  const [no, setNo] = useState();

  const setdelNo = (e) => {
    setNo(e.target.value);
  };

  const deleteComment = () => {
    axios
      .post("http://localhost:8080/delete/comm/" + tweet.commentId)
      .then((response) => {
        alert("삭제 되었습니다");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="tweet section_container " style={{marginTop: "5px"}}>
      <div className="comment">
        <p className="comment">{tweet.content}</p>
      </div>
      {/* <div className="wrtier comment_content">{tweet.commentWriter}</div> */}
      <div>
        <a
          id="id"
          className="wrtier comment_content"
          style={{marginRight: "550px"}}
          onClick={(e) => {
            console.log(document.getElementById("id").innerText);
            setUrlParam(document.getElementById("id").innerText);
          }}
          href={"/yourpage/" + tweet.commentWriter}>
          {tweet.commentWriter}
        </a>
      </div>

      {console.log(tweet.commentWriter)}

      {user === tweet.commentWriter ? (
        <div className="buttons_comment" style={{margin: "0 0 0 230px"}}>
          <button
            className="logout"
            style={{width: "55px", marginLeft: "5px"}}
            value={tweet.commentId}
            onClick={(e) => {
              setdelNo(e);
              // console.log(e.target.value);
              deleteComment();
            }}>
            삭제
          </button>
        </div>
      ) : null}
    </div>
  );
}
