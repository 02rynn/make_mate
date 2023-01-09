import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

function MapShow() {

    //Spring DB연결 부분
    const baseUrl = "http://localhost:8080";

    const [ data, setData ] = useState();


    useEffect(() => {
        putSpringData();
    },[])

    async function putSpringData() {
        await axios
        .get(baseUrl + "/mapinfo")
        .then((res)=>{
            console.log(res.data); 
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const [state, setState] = useState({
  // 지도의 초기 위치
    center: { lat: 36.807276, lng: 127.147177},
  // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
});


// 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
    const ps = new kakao.maps.services.Places()
    const placesSearchCB = function(data, status) {
    if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0]
        setState({
        center: { lat: newSearch.y, lng: newSearch.x }
        })
    }
    };
    ps.keywordSearch('두정역', placesSearchCB);


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
                    {data ? data.map((datas)=>(
                            <div>{datas.address}</div>
                    )) : ''}
                </MapMarker>
                </Map>
            </div>
    );
}

export default MapShow; 