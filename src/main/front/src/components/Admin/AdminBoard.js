import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BoardService from "../../service/BoardService";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
const AdminBoard = () => {
  useEffect(() => {
    if (sessionStorage.getItem("loginId") !== "admin") {
      navigate("/404");
    }
  }, []);

  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
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

  const changeContentsHandler = (event) => {
    setInputContent(event.target.value);
  };
  const changeCategory = (e) => {
    console.log(e.target.value);
    setInputCategory(e.target.value);
  };
  const changeCategoryName = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
  };
  const changeCategoryCode = (e) => {
    // 선택한 option의 value 값
    console.log(e.target.value);
    setCategoryCode(e.target.value);
    // option의 text 값
  };
  const deleteCategory = (e) => {
    axios
      .post("http://localhost:8080/category/delete/" + inputCategory)
      .then((response) => {
        alert(inputCategory + "가 삭제 되었습니다");
      })
      .catch((error) => console.log(error));
  };
  const insertCategory = (e) => {
    axios
      .post(
        "http://localhost:8080/category/insert/" +
          categoryName +
          "/" +
          categoryCode
      )
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">게시판 추가 삭제</h3>
            <div className="card-body">
              <div className="form-group">
                <label> 게시판 선택 </label>
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
                <label> 게시판 이름</label>
                <InputGroup
                  size="sm"
                  className="mb-3"
                  value={categoryName}
                  onChange={changeCategoryName}>
                  <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <label> 게시판 코드</label>
                <InputGroup
                  size="sm"
                  className="mb-3"
                  value={categoryCode}
                  onChange={changeCategoryCode}>
                  <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </div>

              <button className="btn btn-success" onClick={insertCategory}>
                추가
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteCategory()}
                style={{marginLeft: "10px"}}>
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
