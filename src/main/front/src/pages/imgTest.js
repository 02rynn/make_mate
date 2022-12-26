import React, {Component} from "react";
import axios, {post} from "axios";
function ImgTest() {
  const URL = "http://localhost:8080/imgUpload";

  const fileUp = () => {
    axios
      .post(URL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <h1>파일 업로드</h1>
      <form>
        <h1>File Upload</h1>
        <input type="file" className="file" />
        <button type="button" onClick={fileUp()}>
          Upload
        </button>
      </form>
    </div>
  );
}
export default ImgTest;
