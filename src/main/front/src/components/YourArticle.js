import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Modal from "react-modal";
import Article from "./Article";
import css from "../css/Section.css";
import YYYArticle from "./Article copy";
import axios from "axios";

function YourArticle() {
  const userId = sessionStorage.getItem("loginId");
  const [myBoard, setMyBoard] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    console.log("요청 보내ㅑ기");
  }, []);

  useEffect(() => {
    console.log("요청 보내ㅑ기");
    axios
      .get("http://localhost:8080/api/board/review/" + id)
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

  console.log(myBoard);
  // console.log(selectComponent.list);

  return (
    <>
      <div className="section_container">
        <p className="section_title" style={{marginBottom: "25px"}}>
          {id}님이 쓴 글
        </p>
        {myBoard.map((data, i) => {
          return (
            <YYYArticle
              id={id}
              name={data.author}
              title={data.title}
              no={data.no}
              recruitment={data.recruitment}
              time={data.createdTime}></YYYArticle>
          );
        })}
      </div>
    </>
  );
}

// function Article(props){

// const [review, setReview] = useState("메이트 모집완료로 변경");
// const [isDisabled ,setIsDisabled] = useState(false);
// const [isModalOpen, setIsModalOpen] = useState(false);
// const [finishMSG, setFinishMSG] = useState("");
// const click = ()=>{
// setIsDisabled(true);

// }

// return(
// //나중에 a태그로 바꾸고 해당 게시글로 이동할 수 있도록 변경

// <div className="article_box">
// <p>{props.name}</p>
// <p>{props.time}</p>

// <div style={{display:'flex' , flexDirection:'row' ,justifyContent:'center'}}>
// {/*
// <Modal isOpen={isModalOpen}
// onRequestClose={()=>{setIsModalOpen(false)}}
// style={{ content:{width:"30%" , margin:'0 auto', height:'30%' ,marginTop:'20%', textAlign:'center'} ,
// overlay:{borderRadius:'15%',margin:'0 auto'}}}
// >
// <p>{finishMSG}</p>
// <button onClick={()=>{
// setIsModalOpen(false);

// }}> 확인</button>
// </Modal> */}
// </div>
// </div>
// )
// }

export default YourArticle;
