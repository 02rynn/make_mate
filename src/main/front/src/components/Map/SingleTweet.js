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

  const deleteComment = ()=>{
    axios
    .post("http://localhost:8080/delete/comm")
    .then((response)=> {
      console.log(response.data);
      
  })
  .catch((error)=>{
      console.log(error);
  })
  }
  
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
          style={{marginRight:'550px'}}
          onClick={(e) => {
            console.log(document.getElementById("id").innerText);
            setUrlParam(document.getElementById("id").innerText);
          }}
          href={"/yourpage/" + tweet.commentWriter}>
          {tweet.commentWriter}
        </a>
      </div>

      {console.log(tweet.commentWriter)}

        {user === tweet.commentWriter? 
      <div className="buttons_comment" style={{margin: "0 0 0 230px"}}>
       
        <button className="logout" style={{width: "55px", marginLeft: "5px"}}
        onclick={()=>{
          deleteComment();
        }}>
          삭제
        </button>
      </div>
      : null
      }
    </div>
  );
}

  