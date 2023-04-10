import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteBoard(props){

    let {no} = useParams();


    return(
        <>
    <div>
        글번호 : {props.board.no}
    </div>
    <div>
        제목 : {props.board.title}
    </div>
    <div>
        내용 : {props.board.content}
    </div>
    <div>
        <button onClick={()=>{
            axios.get(`/board/delete?no=${props.board.no}`)
            alert('삭제완료');
            window.location.href ="/";
        }}>삭제</button> 
        <button><Link to={`/modify/${props.board.id}`}>수정</Link></button>
    </div>
        </>
    )
}


export default DeleteBoard;