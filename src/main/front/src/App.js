import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header"; //navbar 호출
import RoutesContainer from "./components/RoutesContainer"; //PageRoutes 호출
import ListForm from "./components/Board/WriteForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SockJS from "sockjs-client";
import {over} from "stompjs";

var stompClient = null;

function App() {
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
  console.log(userId);

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
  };
  const onError = (err) => {
    console.log(err);
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

  useEffect(() => {
    connect();
  }, [userId]);
  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => {setHello(response.data)
  //     })
  //     .catch((error) => console.log(error));

  //   axios
  //     .get("/api/test")
  //     .then((response) => setHello2(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => {setHello(response.data)
  //     })
  //     .catch((error) => console.log(error));

  //   axios
  //     .get("/api/test")
  //     .then((response) => setHello2(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App">
      <div className="NavBar">
        <Header />
      </div>

      <div className="PageRoutes">
        <div className="container">
          <RoutesContainer></RoutesContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
