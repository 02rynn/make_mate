import "../App.css";
import axios from "axios";
import {useState, useEffect} from "react";
import SockJS from "sockjs-client";

function MsgModal(props) {
  const user = sessionStorage.getItem("loginId");
  let [message, setMsgStr] = useState("");
  let [socket, setSocket] = useState(null);
  // var socket = null;
  console.log(props.tab);

  return (
    <div className="msgModal" style={{backgroundColor: "rgba(1,1,1,0.5)"}}>
      <div>
        <form
          className="msgModalBox"
          action="/msg"
          method="post"
          name="msgModalBox">
          <p> 쪽지 보내기 </p>
          <input type="text" id="reciver_id" value={props.tab}></input>
          <a
            style={{
              float: "right",
              cursor: "pointer",
            }}
            onClick={() => {
              props.setModal(false);
            }}>
            닫기{" "}
          </a>{" "}
          <textarea
            name="message"
            className="message"
            placeholder="내용을 입력해주세요."
            id="msgbox"
            value={props.userData.message}
            onChange={props.handleMessage}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                // axios
                //   .post("/msg", {
                //     message,
                //   })
                //   .then(() => {
                //     console.log("success");
                //   })
                //   .catch(() => {
                //     console.log("fail");
                props.sendPrivateValue();

                props.setModal(false);
              }

              console.log(e.target.value);
              // console.log(e);
            }}></textarea>
          <input
            value="전송"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              //전송
              // axios
              //   .post("/msg", {
              //     message,
              //   })
              //   .then(() => {
              //     console.log("success");
              //   })
              //   .catch(() => {
              //     console.log("fail");
              //   });
              props.sendPrivateValue();

              props.setModal(false);

              // document.form.msgModalBox.submit();
            }}
          />{" "}
        </form>{" "}
      </div>
    </div>
  );
}
export default MsgModal;
