import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import Article from "./Article";

import css from "../css/Section.css";

function MyArticle() {
  const userId = sessionStorage.getItem("loginId");
  const [myBoard, setMyBoard] = useState([]);

  useEffect(() => {
    console.log("요청 보내ㅑ기");
  }, []);

  useEffect(() => {
    console.log("요청 보내ㅑ기");
    axios
      .get("http://localhost:8080/api/board/review/" + userId)
      .then((response) => {
        setMyBoard(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const selectComponent = {
    list: [
      {name1: "second", time: "22/12/18 23:12"},
      {name1: "third", time: "22/12/18 18:12"},
      {name1: "fourth", time: "22/12/18 34:12"},
      {name1: "fifasdth1", time: "22/12/18 03:12"},
      {name1: "fifasdasth2", time: "22/12/18 04:12"},
      {name1: "fifthasd3", time: "22/12/18 05:12"},
      {name1: "fiftdh4", time: "22/12/18 14:12"},
      {name1: "fiftash5", time: "22/12/18 09:12"},
      {name1: "fiftdasdh6", time: "22/12/18 11:12"},
      {name1: "fifasdth7", time: "22/12/18 23:32"},
      {name1: "fiftasdh8", time: "22/12/18 22:12"},
    ],
  };

  // console.log(selectComponent.list);
  console.log(myBoard);
  return (
    <>
      <div className="section_container">
        <p className="section_title" style={{marginBottom: "25px"}}>
          {" "}
          내가 쓴 글
        </p>

        {myBoard.map((data, i) => {
          return (
            <Article
              name={data.author}
              title={data.title}
              no={data.no}
              recruitment={data.recruitment}
              time={data.createdTime}></Article>
          );
        })}
      </div>
    </>
  );
}

export default MyArticle;
