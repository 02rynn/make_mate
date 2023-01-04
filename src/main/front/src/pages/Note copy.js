import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import MsgContentBox from "../components/MsgContentBox";
import {useState, useEffect} from "react";
import SockJS from "sockjs-client";
import axios from "axios";
import {over} from "stompjs";
var stompClient = null;

function NoteCopy() {
  const userId = sessionStorage.getItem("loginId");
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: userId,
    receivername: "",
    connected: false,
    message: "",
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({...userData, connected: true});
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      // case "JOIN":
      //   if (!privateChats.get(payloadData.senderName)) {
      //     privateChats.set(payloadData.senderName, []);
      //     setPrivateChats(new Map(privateChats));
      //   }
      //   break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const {value} = event.target;
    setUserData({...userData, message: value});
  };
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({...userData, message: ""});
    }
  };
  /// 메세지 보내기 함수
  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE",
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({...userData, message: ""});
    }
  };

  ///맨 처음 소켓 연결
  useEffect(() => {
    connect();
  }, []);

  const [message, setMessage] = useState([]);
  const [view, setView] = useState();
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState([]);
  const [content1, setContent] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/msgList")
  //     .then((response) => {
  //       setMessage(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));

  //   axios
  //     .get("http://localhost:8080/msgListUnRead")
  //     .then((response) => {
  //       setCount(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/msgUser?room_id=" + view)
  //     .then((response) => {
  //       setMessages(response.data);
  //       console.log(response.data);
  //       console.log(messages);
  //     })
  //     .catch((error) => console.log(error));
  // }, [content1]);

  //메세지 내용을

  // const handleClickButton = (index) => {
  //   setContent(index);
  //   setView(message[index].room_id);
  //   console.log(view);
  //   console.log(message[index].room_id);
  // };

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
    <div className="chat-box">
      <div className="member-list">
        <ul>
          {[...privateChats.keys()].map((name, index) => (
            <li
              onClick={() => {
                setTab(name);
              }}
              className={`member ${tab === name && "active"}`}
              key={index}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      {tab === "CHATROOM" && (
        <div className="chat-content">
          <ul
            className="chat-messages"
            style={{
              overflowY: "scroll",
              position: "relative",
              display: "flex",
              flexDirection: "column-reverse",
            }}></ul>

          <div className="send-message">
            <input
              type="text"
              className="input-message"
              placeholder="enter the message"
              value={userData.message}
              onChange={handleMessage}
            />
            <button type="button" className="send-button" onClick={sendValue}>
              send
            </button>
          </div>
        </div>
      )}
      {tab !== "CHATROOM" && (
        <div className="chat-content">
          <ul
            className="chat-messages"
            style={{
              overflowY: "scroll",
              position: "relative",
              display: "flex",
              flexDirection: "column-reverse",
            }}>
            {[...privateChats.get(tab)].reverse().map((chat, index) => (
              <li
                className={`message ${
                  chat.senderName === userData.username && "self"
                }`}
                key={index}>
                {chat.senderName !== userData.username && (
                  <div className="avatar">{chat.senderName}</div>
                )}
                <div className="message-data">{chat.message}</div>
                {chat.senderName === userData.username && (
                  <div className="avatar self">{chat.senderName}</div>
                )}
              </li>
            ))}
          </ul>

          <div className="send-message">
            <input
              type="text"
              className="input-message"
              placeholder="enter the message"
              value={userData.message}
              onChange={handleMessage}
            />
            <button
              type="button"
              className="send-button"
              onClick={sendPrivateValue}>
              send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteCopy;
