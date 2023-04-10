import React, {useState} from "react";
import {useNavigate, useLocation, useParams} from "react-router-dom";
import BoardService from "../../service/BoardService";

const UpdateBoardComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {no} = useParams();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const changeTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const changeContentsHandler = (event) => {
    setInputContent(event.target.value);
  };
  // 3.

  const updateBoard = (e) => {
    e.preventDefault();
    const board = {
      no: no,
      title: inputTitle,
      contents: inputContent,
    };
    console.log("board=>" + JSON.stringify(board));
    BoardService.updateBoard(board, no).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="container" style={{marginTop: "3%"}}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center" style={{marginTop: "3%"}}>
              게시물 수정
            </h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> 카테고리 </label>
                  <select
                    placeholder="type"
                    name="type"
                    className="form-control">
                    <option value="1">자유게시판</option>
                    <option value="2">질문과 답변</option>
                  </select>
                </div>
                <div className="form-group">
                  <label style={{marginTop: "2%"}}> 제목 </label>
                  <input
                    type="text"
                    placeholder="제목을 입력해주세용가리"
                    name="title"
                    className="form-control"
                    value={inputTitle}
                    onChange={changeTitleHandler}
                  />
                </div>
                <div className="form-group">
                  <label style={{marginTop: "2%"}}> 내용 </label>
                  <textarea
                    placeholder="내용을 입력해주세요플레"
                    style={{minHeight: "150px"}}
                    name="content"
                    className="form-control"
                    value={inputContent}
                    onChange={changeContentsHandler}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={updateBoard}
                  style={{
                    marginTop: "3%",
                    backgroundColor: "#FF7F27",
                    border: "1px solid #FF7F27",
                  }}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                  style={{
                    marginLeft: "10px",
                    marginTop: "3%",
                    backgroundColor: "#001529",
                    border: "1px solid #001529",
                  }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBoardComponent;
