import React from 'react';
import css from "../../css/Section.css";
import css12 from "../../css/comment.css";

export default function SingleTweet({tweet}){
    return(
        <div className='tweet section_container ' style={{marginTop:'5px'}}>
            <div className='comment'>
                <p className="comment">{tweet.content}</p>
                </div>
            <div className='wrtier comment_content'>{tweet.writer}</div>
            <div className='date comment_content'>{tweet.date}</div>

            <div className='buttons_comment' style={{margin:'0 0 0 230px'}}>
                <button className='logout' style={{width:'55px'}}>수정</button>
                <button className='logout' style={{width:'55px',marginLeft:'5px'}}>삭제</button>
            </div>
        </div>
    )
}