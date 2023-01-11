import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BoardService from "../../service/BoardService";
import axios from "axios";
import MapSearch from "../Map/MapSearch";

import {Map, MapMarker} from "react-kakao-maps-sdk";
// import axios from 'axios';

const {kakao} = window;
const CreateBoardComponent = () => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputCategory, setInputCategory] = useState("카테고리를 선택해주세요");
  const [category, setCategory] = useState([]);
  const userId = sessionStorage.getItem("loginId");

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: {lat: 36.807276, lng: 127.147177},
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
  });
  const [searchAddress, SetSearchAddress] = useState();

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
  const SearchMap = () => {
    const ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({
          center: {lat: newSearch.y, lng: newSearch.x},
        });
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  };

  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/category/ss")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const changeTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const changeContentsHandler = (event) => {
    setInputContent(event.target.value);
  };
  const changeCategory = (e) => {
    // 선택한 option의 value 값
    console.log(e.target.value);
    setInputCategory(e.target.value);
    // option의 text 값
  };

  const createBoard = (e) => {
    e.preventDefault();
    const board = {
      title: inputTitle,
      contents: inputContent,
      categoryCode: inputCategory,
      author: userId,
      address: searchAddress,
    };
    console.log("board=>" + JSON.stringify(board));
    BoardService.createBoard(board).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3"
                style={{marginTop:'3%', border:'1px solid #001529'}}>
            <h2 className="text-center"
                style={{marginTop:'2%', backgroundColor:'#001529', color:'white', fontWeight:'550', border:'1px solid #001529'}}
            >글 작성하기</h2>
            <div className="card-body">
              <div className="form-group">
                <label style={{fontWeight:'600'}}> 카테고리 </label>
                <select
                  style={{border:'1px solid #001529'}}
                  name=" category"
                  className="form-control"
                  onChange={changeCategory}
                  value={inputCategory}>
                  {category.map((data, i) => {
                    return (
                      <option value={data.categoryCode}>
                        {data.categoryName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label style={{ marginTop:'2%', fontWeight:'600'}}> 제목 </label>
                <input
                  style={{border:'1px solid #001529'}}
                  type="text"
                  placeholder="제목"
                  name="title"
                  className="form-control"
                  value={inputTitle}
                  onChange={changeTitleHandler}
                />
              </div>
              <div className="form-group">
                <label style={{ marginTop:'2%', fontWeight:'600'}}> 내용 </label>
                <textarea
                  style={{minHeight:'200px', border:'1px solid #001529'}}
                  placeholder="내용을 입력해주세요"
                  name="contents"
                  className="form-control"
                  value={inputContent}
                  onChange={changeContentsHandler}></textarea>
                {/* <MapSearch/>   */}
                <div>
                <div style={{marginTop:'2%'}}>
                    <input
                      placeholder="주소를 입력해주세요"
                      style={{border: "1px solid #001529",width:'80%'}}
                      onChange={handleSearchAddress}></input>
                    <button
                      onClick={SearchMap}
                      style={{backgroundColor: "#FF7F27", borderRadius:'10%', marginLeft:'1%', border:'1px solid #001529'}}>
                      검색
                    </button>
                  </div>
                  <Map // 지도를 표시할 Container
                    center={state.center}
                    isPanto={state.isPanto}
                    style={{
                      // 지도의 크기
                      width: "100%",
                      height: "450px",
                      borderRadius:'5%',
                      border:'1px solid #001529',
                      marginTop:'1%'
                    }}
                    level={3} // 지도의 확대 레벨
                  >
                    <MapMarker position={state.center}>
                      <div>{searchAddress}</div>
                    </MapMarker>
                  </Map>
                </div>
              </div>

              <button className="btn btn-success" 
                      style={{backgroundColor:'#FF7F27', border:'1px solid #001529', marginTop:'3%'}} 
                      onClick={createBoard}>
                저장
              </button>
              <button
                style={{backgroundColor:'#FF7F27', border:'1px solid #001529', marginLeft: "10px" , marginTop:'3%'}}
                className="btn btn-danger"
                onClick={() => navigate("/")}>
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardComponent;
