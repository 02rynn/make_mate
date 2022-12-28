import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import MsgContentBox from "../components/MsgContentBox";
import {useState, useEffect} from "react";
import SockJS from "sockjs-client";
import axios from "axios";

function Note() {
  // const sock = new SockJs("http://localhost:8080/stomp-endpoint");
  // const stomp = StompJs.overy(sock);
  // const token = {credentials: "omit", origin: "http://localhost:8080"};
  // let net = require("net");
  // let client = new net.Socket();

  // const stompConnect = () => {
  //   try {
  //     stomp.debug = null;
  //     //웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을
  //     //console에 보여주는데 그것을 감추기 위한 debug
  //     console.log("연결");
  //     stomp.connect(token, () => {
  //       stomp.subscribe(`/topic/greetings`, (data) => {
  //         const newMessage = JSON.parse(data.body);
  //         //데이터 파싱
  //       });
  //     });
  //   } catch (err) {}
  // };
  // const stompDisConnect = () => {
  //   try {
  //     stomp.debug = null;
  //     console.log("연결끊기");
  //     stomp.disconnect(() => {
  //       stomp.unsubscribe("sub-0");
  //     }, token);
  //   } catch (err) {}
  // };
  // const SendMessage = () => {
  //   stomp.debug = null;
  //   const data = {
  //     type: "TALK",
  //     message: message,
  //   };
  //   //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
  //   stomp.send("/pub/chat/message", token, JSON.stringify(data));
  // };
  const user = "asd";
  const [message, setMessage] = useState([]);
  const [view, setView] = useState();
  const [messages, setMessages] = useState([]);
  const [content1, setContent] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/msgList")
      .then((response) => setMessage(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/msgUser?room_id=" + view)
      .then((response) => {
        setMessages(response.data);
        console.log(response.data);
        console.log(messages);
      })
      .catch((error) => console.log(error));
  }, [content1]);

  //메세지 내용을

  const handleClickButton = (index) => {
    setContent(index);
    setView(message[index].room_id);
    console.log(message[index].room_id);
  };

  // console.log(message);
  // const selectComponent = {
  //   list: [
  //     {name1: "second", time: "22/12/18 23:12"},
  //     {name1: "third", time: "22/12/18 18:12"},
  //     {name1: "fourth", time: "22/12/18 34:12"},
  //     {name1: "fifasdth1", time: "22/12/18 03:12"},
  //     {name1: "fifasdasth2", time: "22/12/18 04:12"},
  //     {name1: "fifthasd3", time: "22/12/18 05:12"},
  //     {name1: "fiftdh4", time: "22/12/18 14:12"},
  //     {name1: "fiftash5", time: "22/12/18 09:12"},
  //     {name1: "fiftdasdh6", time: "22/12/18 11:12"},
  //     {name1: "fifasdth7", time: "22/12/18 23:32"},
  //     {name1: "fiftasdh8", time: "22/12/18 22:12"},
  //   ],
  // };

  // selectComponent.list.map((data, index) => {
  //   console.log(data.name1);
  // });

  return (
    <div
      style={{
        display: "flex",
      }}>
      <div
        className="messageBox"
        style={{
          height: "750px",
          overflowY: "scroll",
          position: "relative",
        }}>
        <div
          style={{
            padding: "0px 0px 0px 0px",
            position: "sticky",
            top: "0px",
          }}>
          <h3
            style={{
              fontWeight: "bolder",
              background: "white",
              padding: "22px 0px 10px 0px",
              position: "relative",
              top: "-12px",
              borderBottom: "1px solid #ededed",
            }}>
            쪽지함{" "}
          </h3>{" "}
        </div>{" "}
        <div className="msgItems">
          <ul
            style={{
              listStyle: "none",
            }}>
            {" "}
            {message.map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    handleClickButton(index);
                  }}>
                  <MessageBox
                    sender_id={
                      data.sender_id === user ? data.reciver_id : data.sender_id
                    }
                    content={data.content}
                    time={data.send_time}>
                    {" "}
                  </MessageBox>{" "}
                </li>
              );
            })}{" "}
          </ul>{" "}
        </div>{" "}
      </div>
      <MsgContentBox
        user={user}
        content={content1}
        selectComponent={message}
        messages={messages}
      />{" "}
    </div>
  );
}

export default Note;
