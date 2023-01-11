import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import BoardService from "../../service/BoardService";
import axios from "axios";

const Admin = () => {
  const [choiceVal, setChoiceVal] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const navigate = useNavigate();
  const [boards, setBoards] = useState("");

  useEffect(() => {
    BoardService.getBoards().then((resonse) => {
      setBoards(resonse.data);
    });
  }, []);

  const changeSearch = (event) => {
    setSearchVal(event.target.value);
  };

  const search = () => {
    console.log(
      "[BbsList.js searchBtn()] choiceVal=" +
        choiceVal +
        ", searchVal=" +
        searchVal
    );
    axios
      .get("http://localhost:8080/search/" + searchVal)
      .then((response) => {
        console.log(response.data);
        setBoards(response.data);
      })
      .catch((error) => console.log(error));

    // navigate("/bbslist");
  };
  const userBlock = () => {
    axios
      .post("http://localhost:8080/search/" + boards.loginId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    // navigate("/bbslist");
  };

  return (
    <div>
      <h2 className="text-center">관리자 페이지</h2>
      <div className="row">
        <input
          type="text"
          className="form-control"
          placeholder="검색어"
          value={searchVal}
          onChange={changeSearch}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            search();
          }}>
          검색
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>LoginID</th>
              <th>Email</th>
              <th>아이디</th>
              <th>age</th>
              <th>성별</th>
              <th>생년월일</th>
              <th>휴대폰번호</th>
            </tr>
          </thead>

          <tbody>
            {/* {boards.map((board) => ( */}

            <tr>
              <td>{boards.loginId}</td>
              <td>{boards.email}</td>
              <td>{boards.id}</td>
              <td>{boards.age}</td>
              <td>{boards.gender}</td>
              <td>{boards.birthDate}</td>
              <td>{boards.phoneNum}</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    userBlock();
                  }}>
                  회원정지
                </button>
              </th>
              <th>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/AdminBoard");
                  }}>
                  게시판 관리
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Admin;
