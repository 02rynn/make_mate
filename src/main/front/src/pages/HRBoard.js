import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BoardService from '../service/BoardService';

const SportsBoard = () => {



    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BoardService.getBoards().then((resonse) => {
            setBoards(resonse.data);
        });
    }, []);

    
    
    return (
        <div>
           
           
            <div className="row">
            <table className="table table-striped table-bordered" >
                <thead >
                <tr
                    style={{
                    backgroundColor: "#FF7F27",
                    color: "white",
                    border: "1px solid #001529",
                
                    }}>
                    <th>글 번호</th>
                    <th>타이틀</th>
                    <th>내용</th>
                
                </tr>
                </thead>
                <tbody>
                {boards.map((board) => (
                  // navigate 상세 주소로 수정
                <tr
                    style={{
                        backgroundColor: "white",
                        border: "1px solid #001529",
                        borderRadius: '10px'
                    }}
                    onClick={() => {
                        navigate("/read-board/" + board.no, {
                        state: {
                        no: board.no,
                        title: board.title,
                        content: board.contents,
                        createdTime: board.createdTime,
                        author: board.author,
                        address: board.address,
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
        </div>
    );
};



export default SportsBoard;