import "../App.css";
import axios from "axios";
import {useState, useEffect} from "react";
import SockJS from "sockjs-client";

function MsgModal(props) {
  let [message, setMsgStr] = useState("");
  let [socket, setSocket] = useState(null);
  // var socket = null;
  function connectWS() {
    var sock = new SockJS("http://localhost:8080/echo");
    setSocket(sock);
    // socket = sock;
    sock.onopen = function () {
      console.log("info: connection opened.");
    };
    sock.onmessage = function (e) {
      //             console.log(e);
      //             var strArray = e.data.split(":");
      //             if(e.data.indexof(":") > -1){
      //                 $(".chat_start_main").text(strArray[0]+"님이 메세지를 보냈습니다.");
      //             }
      //             else{
      //             }
      // $("#chat").append(e.data + "<br/>");
    };
  }

  function sendMsg() {
    console.log("버튼 눌림");

    const mmes = document.getElementById("msgbox").value;
    axios
      .post("http://localhost:8080/sendMsg", {content: mmes})
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    connectWS();
  }, []);

  return (
    <div className="msgModal">
      <form
        className="msgModalBox"
        action="/msg"
        method="post"
        name="msgModalBox">
        <p> 쪽지 보내기 </p>{" "}
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
              //   });
              sendMsg();
              socket.send(message);

              props.setModal(false);
            }
            setMsgStr(e.target.value);
            console.log(e.target.value);
            // console.log(e);
          }}>
          {" "}
        </textarea>{" "}
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
            sendMsg();
            socket.send(message);

            props.setModal(false);
            // document.form.msgModalBox.submit();
          }}
        />{" "}
      </form>{" "}
    </div>
  );
}
export default MsgModal;
