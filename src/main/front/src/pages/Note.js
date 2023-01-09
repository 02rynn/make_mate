import "../App.css";
import "../components/MessageBox";
import MessageBox from "../components/MessageBox";
import MsgContentBox from "../components/MsgContentBox";
import {useState, useEffect} from "react";
import SockJS from "sockjs-client";
import axios from "axios";
import {over} from "stompjs";
import MsgModal from "../components/MsgModal";

var stompClient = null;

function Note() {
  const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      console.log("알림 지원 안하는 것");
      return;
    }
    const triggerNotification = () => {
      console.log("asd");
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("granted");
            new Notification(title, options);
          } else {
            console.log("거부");
            return;
          }
        });
      }
    };
    return triggerNotification;
  };
  const triggerNotification = useNotification("새로운 쪽지 도착!!");
  useEffect(() => {
    axios
      .get("http://localhost:8080/test/" + userId)
      .then((response) => {
        // setMap(response.data);
        let key = Object.keys(response.data);

        for (let i = 0; i < key.length; i++) {
          privateChats.set(key[i], response.data[key[i]]);
        }
        // privateChats.set(key[1], response.data[key[1]]);
        // privateChats.set(key[0], response.data[key[0]]);
        console.log(response.data[key[0]]);
        console.log(privateChats);
        console.log(response.data);
        console.log("------------------------");
        Array.from(privateChats.keys()).map((data, index) => {
          console.log(data);
        });

        privateChats.get("asd").map((data) => {
          console.log(data.message);
        });
        // console.log(privateChats.get("asd"));
        // console.log([privateChats.get("asd")]);

        // privateChats.get("asd").map((data) => {
        //   console.log(data.message);
        // });
      })
      .catch((error) => console.log(error));
  }, []);
  let [modal, setModal] = useState(false);
  const [message, setMessage] = useState([]);
  const [view, setView] = useState();
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState([]);
  const [content1, setContent] = useState(null);
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
  console.log(userData);
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  console.log("asdasd" + view);
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

    // userJoin();
  };
  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };
  const onPrivateMessage = (payload) => {
    console.log(payload);
    triggerNotification();
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
  // const sendValue = () => {
  //   if (stompClient) {
  //     var chatMessage = {
  //       senderName: userData.username,
  //       message: userData.message,
  //       status: "MESSAGE",
  //     };
  //     console.log(chatMessage);
  //     stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  //     setUserData({...userData, message: ""});
  //   }
  // };
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

  const user = sessionStorage.getItem("loginId");
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/msgList?user=" + user)
  //     .then((response) => {
  //       setMessage(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));

  //   axios
  //     .get("http://localhost:8080/msgListUnRead?user=" + user)
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

  const handleClickButton = (index) => {
    setContent(index);
    setView(message[index].room_id);
    console.log(view);
    console.log(message[index].room_id);
  };

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
            쪽지함
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
              style={{margin: "5px"}}
              onClick={() => {}}>
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </h3>
        </div>
        <div className="msgItems">
          <ul
            style={{
              listStyle: "none",
            }}>
            {" "}
            {Array.from(privateChats.keys()).map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    console.log("setTab String : " + data);
                    setTab(data);
                  }}>
                  <div class="msgItem">
                    <div>
                      <h4
                        style={{
                          color: "#292929",
                          fontSize: "14px",
                          fontWeight: "bold",
                          display: "inline-block",
                        }}>
                        {data}
                      </h4>
                    </div>
                    <div
                      style={{
                        clear: "both",
                      }}></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <MsgContentBox user={user} privateChats={privateChats} tab={tab} />{" "} */}
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
        {modal === true ? (
          <MsgModal
            setModal={setModal}
            tab={tab}
            userData={userData}
            handleMessage={handleMessage}
            sendPrivateValue={sendPrivateValue}></MsgModal>
        ) : null}
        {/* <p> */}
        {/* {props.content === null
          ? null
          : props.selectComponent[props.content].content} */}
        {/* </p> */}
        <div
          style={{
            height: "650px",
            overflowY: "scroll",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}>
          {privateChats
            .get(tab)
            ?.reverse()
            .map((chat, index) => {
              return (
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
      </div>
    </div>
  );
}

export default Note;
