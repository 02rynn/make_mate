// src/main/frontend/src/App.js

import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Profile from "./profile";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home{hello}</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/profile">Profile</Link>
      </nav>
      <header>----------------------------------</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer>----------------------------------</footer>
    </BrowserRouter>
  );
}

export default App;
