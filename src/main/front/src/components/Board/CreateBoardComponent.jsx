import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BoardService from "../../service/BoardService";
import axios from "axios";
import MapSearch from '../Map/MapSearch';
const CreateBoardComponent = () => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputCategory, setInputCategory] = useState("카테고리를 선택해주세요");
  const [category, setCategory] = useState([]);
  const userId = sessionStorage.getItem("loginId");
  useEffect(() => {
    axios
      .get("http://localhost:8080/category/ss")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const changeTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const changeContentsHandler = (event) => {
    setInputContent(event.target.value);
  };
  const changeCategory = (e) => {
    // 선택한 option의 value 값
    console.log(e.target.value);
    setInputCategory(e.target.value);
    // option의 text 값
  };

  const createBoard = (e) => {
    e.preventDefault();
    const board = {
      title: inputTitle,
      contents: inputContent,
      categoryCode: inputCategory,
      author: userId,
    };
    console.log("board=>" + JSON.stringify(board));
    BoardService.createBoard(board).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">새글을 작성해주세요</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Type </label>
                  <select
                    name=" category"
                    className="form-control"
                    onChange={changeCategory}
                    value={inputCategory}>
                    {category.map((data, i) => {
                      return (
                        <option value={data.categoryCode}>
                          {data.categoryName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label> Title </label>
                  <input
                    type="text"
                    placeholder="title"
                    name="title"
                    className="form-control"
                    value={inputTitle}
                    onChange={changeTitleHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Contents  </label>
                  <textarea placeholder="contents" name="contents" className="form-control"
                    value={inputContent} onChange={changeContentsHandler}>
                  </textarea>  
                  <MapSearch/>  
                </div>

                <button className="btn btn-success" onClick={createBoard}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                  style={{marginLeft: "10px"}}>
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

export default CreateBoardComponent;
