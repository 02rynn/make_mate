import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header"; //navbar 호출
import RoutesContainer from "./components/RoutesContainer"; //PageRoutes 호출

import {BrowserRouter, Routes, Route} from "react-router-dom";
import SockJS from "sockjs-client";
import {over} from "stompjs";

function App() {
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
