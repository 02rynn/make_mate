import {useState, useEffect} from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import axios from 'axios';

const { kakao } = window;

function MapSearch() {

    const [state, setState] = useState({
  // 지도의 초기 위치
    center: { lat: 36.807276, lng: 127.147177},
  // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
});
const [searchAddress, SetSearchAddress] = useState();

// 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
const SearchMap = () => {
    const ps = new kakao.maps.services.Places()
    const placesSearchCB = function(data, status) {
    if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0]
        setState({
        center: { lat: newSearch.y, lng: newSearch.x }
        })
    }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB); 
}   

    const handleSearchAddress = (e) => {
        SetSearchAddress(e.target.value)
    }

    return (
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
                <MapMarker position={ state.center } >
                    <div>{searchAddress}</div> 
                </MapMarker>
                </Map>
                <div>
                    <input placeholder="주소를 입력해주세요" style={{border:'1px solid orange'}} onChange={handleSearchAddress}></input>
                    <button  onClick={SearchMap}  style={{backgroundColor:'orange'}}>검색</button>
                </div>
            </div>
    );
}

export default MapSearch; 