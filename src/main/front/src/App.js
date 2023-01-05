import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header"; //navbar 호출
import RoutesContainer from "./components/RoutesContainer"; //PageRoutes 호출

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [hello, setHello] = useState("");
  const [hello2, setHello2] = useState("");
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => {setHello(response.data)
  //     })
  //     .catch((error) => console.log(error));

  useEffect(() => {
    fetch("/listForm")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);

        axios
          .get("/api/hello")
          .then((response) => setHello(response.data))
          .catch((error) => console.log(error));

        axios
          .get("/api/test")
          .then((response) => setHello2(response.data))
          .catch((error) => console.log(error));
      });
  }, []);

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
