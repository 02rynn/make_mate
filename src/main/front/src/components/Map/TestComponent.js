import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestComponent() {

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

    return (
        <div>
            <h2>data</h2>
            <div>
                {data ? data.map((datas)=>(
                        <div>주소: {datas.address}</div>
                )) : ''}
            </div>
        </div>
    );

}

export default TestComponent;