import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    const markerdata = [
            {
            title: "콜드스퀘어",
            lat: 37.62197524055062,
            lng: 127.16017523675508,
            },
            {
            title: "하남돼지집",
            lat: 37.620842424005616,
            lng: 127.1583774403176,
            },
            {
            title: "수유리우동",
            lat: 37.624915253753194,
            lng: 127.15122688059974,
            },
            {
            title: "맛닭꼬",
            lat: 37.62456273069659,
            lng: 127.15211256646381,
            },
        ];
        
        useEffect(() => {
            mapscript();
        }, []);
        
        const mapscript = () => {
            let container = document.getElementById("map");
            let options = {
            center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
            level: 5,
            };
        
            //map
            const map = new kakao.maps.Map(container, options);
            
            markerdata.forEach((el) => {
            // 마커를 생성합니다
            new kakao.maps.Marker({
                //마커가 표시 될 지도
                map: map,
                //마커가 표시 될 위치
                position: new kakao.maps.LatLng(el.lat, el.lng),
                //마커에 hover시 나타날 title
                title: el.title,
            });
            });
        };

    

    return (
        <div>
            <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
        </div>
    );
}

export default MapContainer; 