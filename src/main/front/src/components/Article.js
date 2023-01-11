import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";


function Article(props) {
  const navigate = useNavigate();
 
  const [condition, setCondition] = useState(props.recruitment === 1 ? 1 : 0);
  const [review, setReview] = useState(
    props.recruitment === 1 ? "후기작성하기" : "메이트 모집완료로 변경"
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finishMSG, setFinishMSG] = useState("");
  const userId = sessionStorage.getItem("loginId");

  const click = () => {
    setIsDisabled(true);
  };

  const submit = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/board/checkMate/" + props.no,
      // data: values,
    })
      .catch((e) => {
        console.error(e.response.data);
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    //나중에 a태그로 바꾸고 해당 게시글로 이동할 수 있도록 변경

    <div className="article_box">
      <p>{props.time}</p>
      <p>{props.title}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>

          {userId == props.name ?   <ReviewBtn ></ReviewBtn> : null}

       
   
        {/* <button
          className="withdrawal_check_btn"
          style={{margin: "8px 5px"}}
          disabled={isDisabled}
          onClick={() => {
            if (condition === 0 ) {
              //버튼을 클릭하면 모집완료로 변경하시겠습니까?

              setReview("메이트 후기 쓰기");
              setIsModalOpen(true);
              setFinishMSG("모집 완료로 변경하시겠습니까?");
              // setCondition(1);
            } else {
              setIsModalOpen(true);
              setReview("후기작성하기");
              setFinishMSG("후기를 작성하시겠습니까?");
            }
            //버튼 누르면 -> 후기쓰기로 이름 바뀌고 -> 다시 클릭하면 모달창 띄우기

            //setReview의 값이 후기쓰기 -> 클릭 -> 후기 모달창 띄우기
          }}>
          {review}
        </button> */}
       
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => {
            setIsModalOpen(false);
          }}
          style={{
            content: {
              width: "30%",
              margin: "0 auto",
              height: "30%",
              marginTop: "20%",
              textAlign: "center",
            },
            overlay: {borderRadius: "15%", margin: "0 auto"},
          }}>
          <p>{finishMSG}</p>
          <button
            onClick={() => {
              if (condition === 1) {
                navigate("/review");
              }
              setIsModalOpen(false);
              submit();
              setCondition(1);
            }}>
            {" "}
            확인
          </button>
        </Modal>
      </div>
    </div>
  );
}

function ReviewBtn(props){

  const [condition, setCondition] = useState(props.recruitment === 1 ? 1 : 0);
  const [review, setReview] = useState(
    props.recruitment === 1 ? "후기작성하기" : "메이트 모집완료로 변경"
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finishMSG, setFinishMSG] = useState("");

  return(
    <>
      <button
          className="withdrawal_check_btn"
          style={{margin: "8px 5px"}}
          disabled={isDisabled}
          onClick={() => {
            if (condition === 0 ) {
              //버튼을 클릭하면 모집완료로 변경하시겠습니까?

              setReview("메이트 후기 쓰기");
              setIsModalOpen(true);
              setFinishMSG("모집 완료로 변경하시겠습니까?");
              // setCondition(1);
            } else {
              setIsModalOpen(true);
              setReview("후기작성하기");
              setFinishMSG("후기를 작성하시겠습니까?");
            }
            //버튼 누르면 -> 후기쓰기로 이름 바뀌고 -> 다시 클릭하면 모달창 띄우기

            //setReview의 값이 후기쓰기 -> 클릭 -> 후기 모달창 띄우기
          }}>
          {review}
        </button>
    
    
    </>

  )

}
export default Article;
