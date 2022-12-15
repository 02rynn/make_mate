import {useNavigate} from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

function Profile() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("/api/test")
      .then((response) => setName(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {name}
      <button
        onClick={() => {
          navigate("/");
        }}>
        누르면 홈으로 이동한다
      </button>
    </div>
  );
}
export default Profile;
