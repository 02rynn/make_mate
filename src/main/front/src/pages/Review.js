import axios from 'axios';
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import Card from 'react-bootstrap/Card';





function Review() {
    
    const colors= {
    orange: "#FFBA5A",
    grey:"#a9a9a9"
    }
    
    const submit=()=>{
    console.log(review);
    console.log(writer);
    axios({
    method: "post",
    url: "http://localhost:8080/review",
    data: {
        'content' : review,
        'reviewWriter' : writer,
        'rate': currentValue
    },
    headers:{"Content-Type":'application/json'}
    })
    .catch((e) => {
    console.error(e.response.data);
    })
    .then((response) =>{
    console.log(response);
    })
    }

const stars = Array(5).fill(0);
const [currentValue, setCurrentValue] = React.useState(0);
const [hoverValue, setHoverValue] = React.useState(undefined);
const [review, setReview] = useState("");
const writer = sessionStorage.getItem("loginId");

const handleClick = value => {
setCurrentValue(value)
console.log(currentValue);
};

const handleMouseOver =() => {
setHoverValue(undefined)
}

return(

<div style={{border:'20px solid #001529', marginTop:'5%', borderRadius:10}}>
    <Card style={{minHeight:'500px', border:'10px solid #FF7F27', borderRadius:0}}>
        <Card.Title>
            <h2 style={{marginTop:'5%'}}>REVIEW</h2>
                <div style={styles.stars}>
                    {stars.map((_,index)=>{
           return(
                <FaStar
                key={index}
                size={24}
                style={{
                marginRight:10,
                cursor:"pointer"
                }}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                onClick={() => handleClick(index + 1)}
                />
                            )
                            })}
                </div>
        </Card.Title>
        <Card.Body>
            <div className='reviewContainer' style={styles.container}>
                <textarea
                placeholder='리뷰를 남겨주세요.'
                style={styles.textarea}
                onChange={(e)=>{
                    setReview(e.target.value);
                }}
                />
                <button style={styles.button} onClick={()=>{
                submit()
                console.log(review);
                }}>리뷰남기기</button>
                </div>
        </Card.Body>
        </Card>
    </div>
)
}

const styles = {
container: {
flexDirection:"column",
aliItems:"center",
margin: "0 33% 0 33%",
position: "relative"

},
textarea: {
border:'1px solid #001529',
borderRadius: 5,
width:'100%',
minHeight: 200,
padding: 10
},
button: {
border:'2px solid #001529',
borderRadius: 5,
width: '100%',
padding: 10,
backgroundColor:'#FF7F27',
}
}

export default Review;