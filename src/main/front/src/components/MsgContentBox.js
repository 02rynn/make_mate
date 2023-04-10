import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import {useState, useEffect} from "react";
import MsgModal from "../components/MsgModal";
function MsgContentBox(props) {
  let [modal, setModal] = useState(false);
  let [mess, setMess] = useState("");

  useEffect(() => {
    console.log(props.privateChats);
    console.log("-----------------------------------------------");
    if (props.privateChats != null && props.privateChats.size > 0) {
      console.log(props.privateChats.get("asd"));
      console.log("-----------------------------------------------");
      console.log(props.privateChats.entries().next().value);
      console.log("-----------------------------------------------");
    }
  }, []);

  const user = sessionStorage.getItem("loginId");
  return (
    <div
      className="msgContentBox"
      style={{
        display: "inline-block",
        border: "1px solid #ededed",
        borderRadius: "12px",
        boxSizing: "border-box",
        height: "100%",
        padding: "12px 0 12px 0",
        margin: "10px",
        marginLeft: "0px",
        width: "65%",
      }}>
      <div
        className="msgTitleBox"
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "0.5px solid #ededed",
        }}>
        <h4 style={{fontWeight: "bolder", marginLeft: "10px"}}>쪽지</h4>
        <a
          style={{
            float: "left",
            display: "inline-block",
            cursor: "pointer",
            marginLeft: "80%",
          }}
          onClick={() => {
            setModal(true);
          }}>
          쪽지 보내기
        </a>
        <div style={{clear: "both"}}></div>
      </div>
      {modal === true ? <MsgModal setModal={setModal}></MsgModal> : null}
      {/* <p> */}
      {/* {props.content === null
          ? null
          : props.selectComponent[props.content].content} */}
      {/* </p> */}
      {[props.privateChats.get(props.tab)].map((data, index) => {
        return (
          <p>{data}</p>
          // <div
          //   key={index}
          //   style={{
          //     borderBottom: "0.5px solid #ededed",

          //     boxSizing: "border-box",
          //   }}>
          //   {data.sender_id === user ? (
          //     <p style={{color: "orange", float: "left", fontWeight: "bolder"}}>
          //       보낸 메세지
          //     </p>
          //   ) : (
          //     <p
          //       style={{
          //         color: "blueviolet",
          //         float: "left",
          //         fontWeight: "bolder",
          //       }}>
          //       받은 메세지
          //     </p>
          //   )}
          //   <p style={{color: "black", float: "right", fontSize: "12px"}}>
          //     {data.send_time.split(".")[0].replace("T", "일")}
          //   </p>
          //   <div style={{clear: "both"}}></div>
          //   <div style={{fontWeight: "300"}}>{data.content}</div>
          // </div>
        );
      })}
    </div>
  );
}
export default MsgContentBox;
