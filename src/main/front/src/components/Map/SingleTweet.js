import React from "react";
import css from "../../css/Section.css";
import css12 from "../../css/comment.css";
import {useState,useEffect} from 'react';

export default function SingleTweet({tweet}) {
  const[urlParam, setUrlParam] = useState("");
  console.log(urlParam);
  
  return (
    <div className="tweet section_container " style={{marginTop: "5px"}}>
      <div className="comment">
        <p className="comment">{tweet.content}</p>
      </div>
      {/* <div className="wrtier comment_content">{tweet.commentWriter}</div> */}
      <div>
      <a id='id'  className="wrtier comment_content" onClick={(e)=>{
          console.log(document.getElementById('id').innerText);
          setUrlParam(document.getElementById('id').innerText);
          }} href={'/yourpage/'+urlParam}>{tweet.commentWriter}</a>
      </div>  

      {console.log(tweet.commentWriter)}

      <div className="buttons_comment" style={{margin: "0 0 0 230px"}}>
        <button className="logout" style={{width: "55px"}}>
          수정
        </button>
        <button className="logout" style={{width: "55px", marginLeft: "5px"}}>
          삭제
        </button>
      </div>
    </div>
  );
}
