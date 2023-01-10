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
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">새글을 작성해주세요</h3>
            <div className="card-body">
              <div className="form-group">
                <label> Type </label>
                <select
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
                <label> Title </label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  className="form-control"
                  value={inputTitle}
                  onChange={changeTitleHandler}
                />
              </div>
              <div className="form-group">
                <label> Contents </label>
                <textarea
                  placeholder="contents"
                  name="contents"
                  className="form-control"
                  value={inputContent}
                  onChange={changeContentsHandler}></textarea>
                {/* <MapSearch/>   */}
                <div>
                  <Map // 지도를 표시할 Container
                    center={state.center}
                    isPanto={state.isPanto}
                    style={{
                      // 지도의 크기
                      width: "100%",
                      height: "450px",
                    }}
                    level={3} // 지도의 확대 레벨
                  >
                    <MapMarker position={state.center}>
                      <div>{searchAddress}</div>
                    </MapMarker>
                  </Map>
                  <div>
                    <input
                      placeholder="주소를 입력해주세요"
                      style={{border: "1px solid orange"}}
                      onChange={handleSearchAddress}></input>
                    <button
                      onClick={SearchMap}
                      style={{backgroundColor: "orange"}}>
                      검색
                    </button>
                  </div>
                </div>
              </div>

              <button className="btn btn-success" onClick={createBoard}>
                Save
              </button>
              <button
                className="btn btn-danger"
                onClick={() => navigate("/")}
                style={{marginLeft: "10px"}}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardComponent;
