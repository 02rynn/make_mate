import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

const ReadBoardComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const no = location.state.no;
  const title = location.state.title;
  const content = location.state.content;
  const createdTime = location.state.createdTime;
  const author = location.state.author;
  return (
    <div>
      <div className="row">
        <table className="table table-striped table-bordered">
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
        </table>
        <div className="container">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              navigate("/update-board/" + no);
            }}>
            수정{" "}
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => {
              navigate("/delet-board/" + no);
            }}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBoardComponent;
