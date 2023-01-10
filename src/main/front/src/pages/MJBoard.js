import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import BoardService from "../service/BoardService";
import axios from "axios";
import Card from 'react-bootstrap/Card';



const MJBoard = (props) => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);

  // useEffect(() => {
  //     BoardService.getBoards().then((resonse) => {
  //         setBoards(resonse.data);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/board/category/" + props.code)
      .then((response) => {
        setBoards(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Card style={{border:'1px solid #001529', marginTop:'3%'}}>
        <Card.Title>      
          <h2 className="text-center">
          <div style={{backgroundColor:'#001529',color:'white'
                }}>{props.name} 게시판</div></h2>
        </Card.Title>
        <Card.Body>
        
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr style={{backgroundColor:'#FF7F27',color:'white',border:'1px solid #001529'}}>
              <th>글 번호</th>
              <th>타이틀</th>
              <th>내용</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {boards.map((board) => (
              // navigate 상세 주소로 수정
              <tr
                style={{backgroundColor:'white', border:'1px solid #001529'}}
                onClick={() => {
                  navigate("/read-board/" + board.no, {
                    state: {
                      no: board.no,
                      title: board.title,
                      content: board.contents,
                      createdTime: board.createdTime,
                      author: board.author,
                    },
                  });
                }}
                key={board.no}>
                <td>{board.no}</td>
                <td>{board.title}</td>
                <td>{board.contents}</td>
                <td>{board.createdTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/create-board");
            }}
            style={{backgroundColor:'#001529',border:'1px solid white',margin:'auto',width:'100px'}}>
            글작성
          </button>
        </div>
        </Card.Body>
      </Card>      
    </div>
  );
};

export default MJBoard;
