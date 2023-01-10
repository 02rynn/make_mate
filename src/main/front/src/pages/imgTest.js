import React, {Component} from "react";
import axios from "axios";



class ImgTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }



  fileUpload(file) {
    const userId = sessionStorage.getItem("id");
    const url = "http://localhost:8080/upload/" + userId;
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }

  upload = (e) => {
    e.preventDefault();
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data); //여기로 IMAGEPATH 넘어옴
    });
  };
  fileChange = (e) => {
    this.setState({file: e.target.files[0]});
  };

  ////여기 위로 이미지 파일 업로드 함수
  

  render() {
    
    
    return (
      <div>
        {/* <h1>파일 업로드</h1> */}
        <form method="post" encType="multipart/form-data">
          <h6>프로필 사진</h6>
          <img></img>
          <input type="file" onChange={this.fileChange} name="file" />
          <button type="button" onClick={()=>{
            this.upload()
            }} >
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default ImgTest;
